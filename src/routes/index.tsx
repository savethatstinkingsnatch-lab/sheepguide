import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calculator, CalendarDays, Library } from "lucide-react";
import { CHAPTERS } from "@/lib/flock/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Flockstead — a field guide to raising sheep" }],
  }),
  component: Home,
});

const TOOLS = [
  {
    to: "/planner",
    title: "Flock planner",
    text: "Acres, winter hay, water, shelter, and a lambing window from a date.",
    image: "/images/hay.jpg",
    alt: "Sheep eating hay beside stacked bales.",
    icon: Calculator,
  },
  {
    to: "/breeds",
    title: "Breed book",
    text: "Twelve breeds sorted by meat, wool, milk, hair, and how much fuss they are.",
    image: "/images/ewe.jpg",
    alt: "Portrait of a white-faced ewe.",
    icon: Library,
  },
  {
    to: "/year",
    title: "The working year",
    text: "A seasonal checklist you can tick off. It stays on this device.",
    image: "/images/pasture.jpg",
    alt: "Sheep in a rotational pasture beside rested grass.",
    icon: CalendarDays,
  },
] as const;

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="relative overflow-hidden rounded-2xl">
        <img
          src="/images/meadow.jpg"
          alt="A small flock grazing a green meadow in late afternoon light."
          className="h-[32rem] w-full object-cover sm:h-[38rem]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <p className="text-xs font-medium tracking-widest text-wool uppercase">Field guide</p>
          <h1 className="mt-3 max-w-xl font-display text-4xl text-surface sm:text-6xl">
            Raise a flock you can actually see.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-surface sm:text-lg">
            Breeds, fence, feed, worms, lambing, and wool — written as chores and numbers, not as a
            catalog.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/guide/$slug" params={{ slug: "starting" }} className="btn btn-primary">
              Start with the flock
            </Link>
            <Link to="/planner" className="btn bg-surface text-ink hover:bg-paper-deep">
              Size hay and acres
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Eight chapters, one working year</h2>
          <p className="mt-3 max-w-xl text-muted">
            Read it straight through, or open the page you need when a ewe is due and the notebook is
            still in the house.
          </p>
        </div>
        <p className="font-display text-xl text-ink italic lg:text-right">
          Quiet sheep are made by fence, forage, and feet.
        </p>
      </section>

      <ol className="mt-8 divide-y divide-line border-y border-line">
        {CHAPTERS.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              to="/guide/$slug"
              params={{ slug: chapter.slug }}
              className="group grid gap-2 py-5 sm:grid-cols-[4rem_minmax(0,16rem)_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-2xl text-sage tabular-nums">{chapter.number}</span>
              <span className="font-display text-2xl group-hover:text-sage-deep">{chapter.title}</span>
              <span className="text-muted">{chapter.summary}</span>
              <ArrowUpRight className="hidden size-5 text-muted sm:block" aria-hidden />
            </Link>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <h2 className="font-display text-3xl sm:text-4xl">Three tools beside the reading</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.to}
              to={tool.to}
              className="group overflow-hidden rounded-2xl bg-surface ring-1 ring-line"
            >
              <img src={tool.image} alt={tool.alt} className="aspect-[3/2] w-full object-cover" />
              <div className="p-5">
                <tool.icon className="size-5 text-sage-deep" aria-hidden />
                <h3 className="mt-3 font-display text-2xl">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tool.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-sage px-5 py-6 text-surface">
          <p className="font-display text-4xl tabular-nums">147</p>
          <p className="mt-2 text-sm leading-relaxed">
            Days from a known mating to the usual lambing date. Early is 142. Late is 152.
          </p>
        </div>
        <div className="rounded-2xl bg-ink px-5 py-6 text-surface">
          <p className="font-display text-4xl">1 : 30</p>
          <p className="mt-2 text-sm leading-relaxed">
            A fit mature ram to about thirty ewes. Ram lambs cover fewer. Borrow one if you can.
          </p>
        </div>
        <div className="rounded-2xl bg-clay-deep px-5 py-6 text-surface">
          <p className="font-display text-4xl">No Cu</p>
          <p className="mt-2 text-sm leading-relaxed">
            Cattle mineral and a lot of goat feed carry copper sheep cannot clear. Buy sheep mineral.
          </p>
        </div>
      </section>
    </div>
  );
}
