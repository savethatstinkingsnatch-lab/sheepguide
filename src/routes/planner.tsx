import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  PASTURE_RATES,
  formatLong,
  formatNum,
  lambingPlan,
  planFlock,
  type ClimateKey,
  type LambingMode,
  type PastureKey,
} from "@/lib/flock/planner";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [{ title: "Flock planner — Flockstead" }],
  }),
  component: PlannerPage,
});

const PASTURES = Object.entries(PASTURE_RATES) as [PastureKey, (typeof PASTURE_RATES)[PastureKey]][];

function NumberField({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  hint?: string;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-medium">{label}</span>
      <input
        id={id}
        className="field mt-1.5"
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => {
          const next = Number(event.target.value);
          onChange(Number.isFinite(next) ? next : min);
        }}
      />
      {hint ? <span className="mt-1 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
}

function PlannerPage() {
  const [ewes, setEwes] = useState(8);
  const [rams, setRams] = useState(0);
  const [lambsPerEwe, setLambsPerEwe] = useState(1.6);
  const [pasture, setPasture] = useState<PastureKey>("average");
  const [winterDays, setWinterDays] = useState(120);
  const [winterLambs, setWinterLambs] = useState(false);
  const [climate, setClimate] = useState<ClimateKey>("temperate");

  const [bredOn, setBredOn] = useState("");
  const [mode, setMode] = useState<LambingMode>("observed");
  const [daysWithRam, setDaysWithRam] = useState(34);

  const plan = useMemo(
    () => planFlock({ ewes, rams, lambsPerEwe, pasture, winterDays, winterLambs, climate }),
    [ewes, rams, lambsPerEwe, pasture, winterDays, winterLambs, climate],
  );
  const lambing = useMemo(
    () => (bredOn ? lambingPlan(bredOn, mode, daysWithRam) : null),
    [bredOn, mode, daysWithRam],
  );

  const ramWord = plan.suggestedRams === 1 ? "ram" : "rams";
  const ramNote =
    plan.ewes === 0
      ? "Add ewes to size a breeding group."
      : plan.rams === 0
        ? `You listed no ram. Borrow or keep at least ${plan.suggestedRams} mature ${ramWord} for this many ewes, or share one for about 34 days.`
        : plan.rams > plan.suggestedRams
          ? `That’s more rams than a 1-to-30 rule needs (${plan.suggestedRams}). Extra rams still eat.`
          : `About ${plan.suggestedRams} mature ${ramWord} covers this ewe group. Ram lambs should be given fewer ewes.`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-medium tracking-widest text-sage-deep uppercase">Planner</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">Size the flock before you buy the hay.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Growing-season pasture, a winter hay pile, water, shelter, and the date the lambs should show
        up. Every figure is a planning range for a medium ewe, with waste included.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <form className="rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6" onSubmit={(event) => event.preventDefault()}>
          <h2 className="font-display text-2xl">The flock</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <NumberField id="ewes" label="Ewes" value={ewes} min={0} max={5000} onChange={setEwes} />
            <NumberField id="rams" label="Rams kept" value={rams} min={0} max={400} onChange={setRams} />
          </div>
          <label className="mt-4 block" htmlFor="lambs">
            <span className="flex items-baseline justify-between text-sm font-medium">
              Lambs expected per ewe
              <span className="tabular-nums text-muted">{lambsPerEwe.toFixed(1)}</span>
            </span>
            <input
              id="lambs"
              className="mt-3 w-full accent-sage"
              type="range"
              min={0}
              max={2.5}
              step={0.1}
              value={lambsPerEwe}
              onChange={(event) => setLambsPerEwe(Number(event.target.value))}
            />
          </label>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">Pasture while it is growing</legend>
            <div className="mt-3 grid gap-2">
              {PASTURES.map(([key, info]) => {
                const active = pasture === key;
                return (
                  <label
                    key={key}
                    className={
                      active
                        ? "flex cursor-pointer gap-3 rounded-xl bg-sage-soft px-3 py-3 ring-1 ring-sage"
                        : "flex cursor-pointer gap-3 rounded-xl px-3 py-3 ring-1 ring-line"
                    }
                  >
                    <input
                      type="radio"
                      name="pasture"
                      className="mt-1 accent-sage"
                      checked={active}
                      onChange={() => setPasture(key)}
                    />
                    <span>
                      <span className="block font-medium">
                        {info.label}
                        <span className="ml-2 font-normal text-muted tabular-nums">
                          {info.ewesPerAcre} ewe-units / acre
                        </span>
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">{info.note}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="winter"
              label="Days on hay"
              value={winterDays}
              min={0}
              max={300}
              onChange={setWinterDays}
              hint="Zero if they graze all year."
            />
            <label className="block" htmlFor="climate">
              <span className="text-sm font-medium">Climate for water</span>
              <select
                id="climate"
                className="field mt-1.5"
                value={climate}
                onChange={(event) => setClimate(event.target.value as ClimateKey)}
              >
                <option value="cool">Cool</option>
                <option value="temperate">Temperate</option>
                <option value="hot">Hot</option>
              </select>
            </label>
          </div>

          <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-sage"
              checked={winterLambs}
              onChange={(event) => setWinterLambs(event.target.checked)}
            />
            <span>
              <span className="block text-sm font-medium">Lambs are on the ground during hay season</span>
              <span className="block text-sm text-muted">
                Adds late-gestation and lactation hay, jug space, and more water.
              </span>
            </span>
          </label>
        </form>

        <div className="rounded-2xl bg-ink p-5 text-surface sm:p-6">
          <h2 className="font-display text-2xl">What to plan for</h2>
          <p className="mt-2 text-sm text-wool">{ramNote}</p>
          <dl className="mt-6 divide-y divide-white/15">
            <Row label="Pasture in the growing season" value={`${formatNum(plan.acres, plan.acres < 10 ? 1 : 0)} acres`} hint={`${formatNum(plan.units, 1)} ewe-units at ${plan.rate} per acre`} />
            <Row
              label="Winter hay"
              value={plan.hayLb >= 2000 ? `${formatNum(plan.hayTons, 1)} tons` : `${formatNum(plan.hayLb)} lb`}
              hint={`${formatNum(plan.hayLb)} pounds as fed, waste included, for ${plan.winterDays} days`}
            />
            <Row label="Water" value={`${formatNum(plan.waterGal, 0)} gal / day`} hint="All classes, with a heat allowance if you chose one" />
            <Row label="Open shelter" value={`${formatNum(plan.shelterSqFt)} ft²`} hint="About 16 square feet per adult" />
            <Row label="Lambing jugs" value={String(plan.jugs)} hint="5×5 ft pens, one per eight ewes if they lamb together" />
            <Row label="Sheep mineral" value={`${formatNum(plan.mineralLbMonth, 1)} lb / month`} hint="Free choice. Never a cattle mix." />
            <Row
              label="One square paddock"
              value={plan.perimeterFt > 0 ? `${formatNum(plan.perimeterFt)} ft of fence` : "—"}
              hint="Perimeter if the whole acreage were one block. Real farms bend."
            />
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-wool">
            About {formatNum(plan.lambs)} lambs if every ewe meets that average. Stocking is for the
            growing season only — hay is separate, and arid range can need far more land than this sketch.
          </p>
        </div>
      </div>

      <section className="mt-8 grid gap-8 rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">Lambing window</h2>
          <p className="mt-2 text-sm text-muted">
            Gestation is counted as 147 days, with lambs possibly from day 142 through day 152.
          </p>
          <div className="mt-5 flex flex-wrap gap-2" role="radiogroup" aria-label="How the date was taken">
            {(
              [
                ["observed", "One mating you saw"],
                ["group", "Ram left in"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={mode === id}
                onClick={() => setMode(id)}
                className={
                  mode === id
                    ? "inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface"
                    : "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium ring-1 ring-line"
                }
              >
                {label}
              </button>
            ))}
          </div>
          <label className="mt-4 block" htmlFor="bred">
            <span className="text-sm font-medium">{mode === "observed" ? "Day she was bred" : "Day the ram went in"}</span>
            <input
              id="bred"
              type="date"
              className="field mt-1.5"
              value={bredOn}
              onChange={(event) => setBredOn(event.target.value)}
            />
          </label>
          {mode === "group" ? (
            <div className="mt-4">
              <NumberField
                id="days-ram"
                label="Days he stayed in"
                value={daysWithRam}
                min={1}
                max={90}
                onChange={setDaysWithRam}
                hint="Two heat cycles is 34 days."
              />
            </div>
          ) : null}
        </div>
        <div className="lg:pt-2">
          {!bredOn ? (
            <p className="rounded-2xl bg-paper px-4 py-8 text-muted">
              Pick the day the ram went in, or the day you saw a breeding. The window will land here.
            </p>
          ) : !lambing ? (
            <p className="rounded-2xl bg-clay-soft px-4 py-8">That date doesn’t parse. Try again.</p>
          ) : (
            <dl className="divide-y divide-line">
              <DateRow label="Vaccinate ewes (typical CDT)" value={formatLong(lambing.cdt)} hint="About four weeks before the earliest lamb. Follow your vet and the label." />
              <DateRow label="Jugs bedded, kit in the barn" value={formatLong(lambing.prep)} hint="A week before the first possible lamb." />
              <DateRow label="Earliest lamb" value={formatLong(lambing.earliest)} hint="Day 142." />
              <DateRow
                label={lambing.span > 0 ? "Middle of the window" : "Most likely"}
                value={formatLong(lambing.likely)}
                hint={lambing.span > 0 ? "147 days after the middle of his stay." : "Day 147."}
              />
              <DateRow
                label="Latest lamb"
                value={formatLong(lambing.latest)}
                hint={lambing.span > 0 ? "Day 152 after he came out." : "Day 152."}
              />
            </dl>
          )}
        </div>
      </section>
    </div>
  );
}

function Row({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <dt className="text-sm text-wool">{label}</dt>
        <dd className="text-right font-display text-2xl tabular-nums">{value}</dd>
      </div>
      <p className="mt-1 text-sm text-wool/80">{hint}</p>
    </div>
  );
}

function DateRow({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="py-3">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-display text-2xl">{value}</dd>
      <p className="text-sm text-muted">{hint}</p>
    </div>
  );
}
