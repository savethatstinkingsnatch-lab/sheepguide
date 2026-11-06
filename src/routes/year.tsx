import { createFileRoute } from "@tanstack/react-router";
import { SEASONS, TASK_COUNT } from "@/lib/flock/year";
import { useChecklist } from "@/lib/flock/use-checklist";

export const Route = createFileRoute("/year")({
  head: () => ({
    meta: [{ title: "The working year — Sheep: Flockstead" }],
  }),
  component: YearPage,
});

function YearPage() {
  const { hemisphere, done, toggle, setHemisphere, reset } = useChecklist();
  const finished = SEASONS.reduce(
    (sum, season) => sum + season.tasks.filter((task) => done[task.id]).length,
    0,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-medium tracking-widest text-sage-deep uppercase">The year</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h1 className="max-w-2xl font-display text-4xl sm:text-5xl">Chores follow the grass, not the calendar app.</h1>
        <p className="font-display text-3xl text-sage-deep tabular-nums">
          {finished}
          <span className="text-xl text-muted"> / {TASK_COUNT}</span>
        </p>
      </div>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Northern and southern seasons swap months. The work inside them does not. Checks stay in this
        browser.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <div className="flex rounded-full bg-surface p-1 ring-1 ring-line" role="radiogroup" aria-label="Hemisphere">
          {(
            [
              ["north", "Northern"],
              ["south", "Southern"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={hemisphere === id}
              onClick={() => setHemisphere(id)}
              className={
                hemisphere === id
                  ? "inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface"
                  : "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium"
              }
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-clay-deep hover:bg-clay-soft"
        >
          Clear checks
        </button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {SEASONS.map((season) => {
          const seasonDone = season.tasks.filter((task) => done[task.id]).length;
          return (
            <section key={season.id} className="rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-3xl">{season.title}</h2>
                <p className="text-sm text-muted tabular-nums">
                  {seasonDone}/{season.tasks.length}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-sage-deep">
                {hemisphere === "north" ? season.north : season.south}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{season.blurb}</p>
              <ul className="mt-4 divide-y divide-line">
                {season.tasks.map((task) => {
                  const checked = Boolean(done[task.id]);
                  return (
                    <li key={task.id}>
                      <label className="flex cursor-pointer gap-3 py-3">
                        <input
                          type="checkbox"
                          className="mt-1 size-4 shrink-0 accent-sage"
                          checked={checked}
                          onChange={() => toggle(task.id)}
                        />
                        <span>
                          <span className={checked ? "font-medium text-muted line-through" : "font-medium"}>
                            {task.label}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted">{task.detail}</span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
