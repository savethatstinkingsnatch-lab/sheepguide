import { createFileRoute, Link } from "@tanstack/react-router";
import { GLOSSARY } from "@/lib/flock/content";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [{ title: "Start here — Sheep: Flockstead" }],
  }),
  component: StartPage,
});

const STEPS = [
  "Check local rules.",
  "Pick a purpose (meat, wool, hair, grass).",
  "Buy 3–6 healthy ewes from a known flock; quarantine 30 days.",
  "Fence and shelter before they arrive.",
  "Sheep mineral only — never goat or cattle mineral.",
  "Put CDT and a worm plan on the calendar.",
  "Find a livestock vet before lambing.",
];

function StartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-medium tracking-widest text-sage-deep uppercase">Start here</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">New to sheep?</h1>
      <p className="mt-4 text-lg text-muted">
        Seven steps before the flock arrives. The rest of the guide is free to read in any order.
      </p>
      <ol className="mt-8 space-y-3">
        {STEPS.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-2xl bg-surface px-4 py-4 ring-1 ring-line">
            <span className="font-display text-2xl text-sage tabular-nums">{index + 1}</span>
            <span className="pt-1 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm leading-relaxed text-muted">
        See also Volume 27: Goats for browse clearing and fencing contrasts — and never share mineral
        buckets between the two species.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/guide/$slug" params={{ slug: "starting" }} className="btn btn-primary">
          Read starting a flock
        </Link>
        <Link to="/planner" className="btn btn-quiet">
          Size the flock
        </Link>
      </div>

      <h2 className="mt-14 font-display text-3xl">Glossary</h2>
      <dl className="mt-4 divide-y divide-line rounded-2xl bg-surface ring-1 ring-line">
        {GLOSSARY.map((item) => (
          <div key={item.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="font-medium">{item.term}</dt>
            <dd className="text-muted">{item.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
