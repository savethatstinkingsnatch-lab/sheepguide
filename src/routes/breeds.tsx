import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { filterBreeds, type BreedFilter, type Purpose } from "@/lib/flock/breeds";

export const Route = createFileRoute("/breeds")({
  head: () => ({
    meta: [{ title: "Breed book — Flockstead" }],
  }),
  component: BreedsPage,
});

const FILTERS: { id: BreedFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Easier start" },
  { id: "small", label: "Small acreage" },
  { id: "meat", label: "Meat" },
  { id: "wool", label: "Wool" },
  { id: "dairy", label: "Dairy" },
  { id: "hair", label: "Hair" },
];

const PURPOSE_LABEL: Record<Purpose, string> = {
  meat: "Meat",
  wool: "Wool",
  dairy: "Dairy",
  hair: "Hair",
};

const TRAITS = [
  { key: "hardiness", label: "Hardiness" },
  { key: "lambs", label: "Lamb crop" },
  { key: "fiber", label: "Fiber" },
  { key: "calm", label: "Calm" },
  { key: "ease", label: "Low upkeep" },
] as const;

function BreedsPage() {
  const [filter, setFilter] = useState<BreedFilter>("all");
  const breeds = useMemo(() => filterBreeds(filter), [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-medium tracking-widest text-sage-deep uppercase">Breed book</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">Pick the sheep that fits the job.</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Twelve common choices, scored for a small farm rather than a show ring. Scores are a reading
        aid — bloodlines inside a breed vary more than the name does.
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="radiogroup" aria-label="Filter breeds">
        {FILTERS.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setFilter(item.id)}
              className={
                active
                  ? "inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface"
                  : "inline-flex h-11 shrink-0 items-center rounded-full bg-surface px-4 text-sm font-medium ring-1 ring-line"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted tabular-nums">
        {breeds.length} {breeds.length === 1 ? "breed" : "breeds"}
      </p>

      {breeds.length === 0 ? (
        <p className="mt-8 rounded-2xl bg-surface px-5 py-8 ring-1 ring-line">
          Nothing in this short book matches.{" "}
          <button type="button" className="font-medium text-sage-deep underline" onClick={() => setFilter("all")}>
            Show all breeds
          </button>
        </p>
      ) : (
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {breeds.map((breed) => (
            <li key={breed.id} className="rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-3xl">{breed.name}</h2>
                <p className="text-sm text-muted">{breed.origin}</p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {breed.purposes.map((purpose) => (
                  <li
                    key={purpose}
                    className="rounded-full bg-sage-soft px-2.5 py-1 text-xs font-medium text-sage-deep"
                  >
                    {PURPOSE_LABEL[purpose]}
                  </li>
                ))}
                {breed.beginner ? (
                  <li className="rounded-full bg-paper-deep px-2.5 py-1 text-xs font-medium">Easier start</li>
                ) : null}
                {breed.smallAcreage ? (
                  <li className="rounded-full bg-paper-deep px-2.5 py-1 text-xs font-medium">Small acreage</li>
                ) : null}
              </ul>
              <p className="mt-4 leading-relaxed">{breed.summary}</p>
              <dl className="mt-5 grid gap-3">
                {TRAITS.map((trait) => {
                  const score = breed.traits[trait.key];
                  return (
                    <div key={trait.key} className="grid grid-cols-[6.5rem_1fr_1.5rem] items-center gap-3">
                      <dt className="text-sm text-muted">{trait.label}</dt>
                      <dd className="flex gap-1" aria-hidden>
                        {Array.from({ length: 5 }, (_, mark) => (
                          <span
                            key={mark}
                            className={
                              mark < score ? "h-1.5 flex-1 rounded-full bg-sage" : "h-1.5 flex-1 rounded-full bg-paper-deep"
                            }
                          />
                        ))}
                      </dd>
                      <dd className="text-right text-sm tabular-nums text-muted">
                        <span className="sr-only">
                          {trait.label} {score} of 5.{" "}
                        </span>
                        {score}
                      </dd>
                    </div>
                  );
                })}
              </dl>
              <p className="mt-5 text-sm leading-relaxed">
                <span className="font-medium">Fits </span>
                {breed.fit}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Watch </span>
                {breed.watch}
              </p>
              <p className="mt-3 text-sm text-muted">{breed.climate}</p>
              <p className="text-sm text-muted">{breed.size}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
