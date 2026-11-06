import { Link } from "@tanstack/react-router";
import { AlertTriangle, ChevronLeft, ChevronRight, NotebookPen } from "lucide-react";
import {
  CHAPTERS,
  chapterIndex,
  headingId,
  readMinutes,
  type Block,
  type Chapter,
} from "@/lib/flock/content";

function Blocks({ blocks }: { blocks: Block[] }) {
  let heading = 0;
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "h") {
          heading += 1;
          const id = headingId(block.text, heading);
          return (
            <h2 id={id} key={id} className="pt-4 font-display text-3xl text-ink sm:text-4xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={index} className="text-lg leading-relaxed text-ink">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          const caution = block.callout.tone === "caution";
          return (
            <aside
              key={index}
              className={
                caution
                  ? "rounded-2xl bg-clay-soft px-5 py-4 text-ink"
                  : "rounded-2xl bg-sage-soft px-5 py-4 text-ink"
              }
            >
              <p className="flex items-center gap-2 font-medium">
                {caution ? (
                  <AlertTriangle className="size-4 shrink-0 text-clay-deep" aria-hidden />
                ) : (
                  <NotebookPen className="size-4 shrink-0 text-sage-deep" aria-hidden />
                )}
                {block.callout.title}
              </p>
              <p className="mt-2 leading-relaxed text-ink">{block.callout.body}</p>
            </aside>
          );
        }
        if (block.type === "stats") {
          return (
            <div key={index} className="grid gap-3 sm:grid-cols-3">
              {block.items.map((item) => (
                <div key={item.label} className="rounded-2xl bg-surface px-4 py-4 ring-1 ring-line">
                  <p className="font-display text-3xl text-sage-deep tabular-nums">{item.value}</p>
                  <p className="mt-1 text-sm font-medium">{item.label}</p>
                  {item.hint ? <p className="mt-1 text-sm text-muted">{item.hint}</p> : null}
                </div>
              ))}
            </div>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto rounded-2xl bg-surface ring-1 ring-line">
              <table className="w-full text-left text-sm">
                <caption className="px-4 pt-4 pb-2 text-left text-sm text-muted">{block.caption}</caption>
                <thead>
                  <tr className="border-b border-line">
                    {block.headers.map((header) => (
                      <th key={header} className="px-4 py-3 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-line last:border-0">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 align-top leading-snug">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <dl key={index} className="divide-y divide-line rounded-2xl bg-surface ring-1 ring-line">
            {block.items.map((item) => (
              <div key={item.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-medium">{item.term}</dt>
                <dd className="text-muted">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        );
      })}
    </div>
  );
}

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const index = chapterIndex(chapter.slug);
  const previous = index > 0 ? CHAPTERS[index - 1] : undefined;
  const next = index >= 0 && index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : undefined;
  const minutes = readMinutes(chapter);
  const headings = chapter.blocks.flatMap((block, blockIndex) => {
    if (block.type !== "h") return [];
    const count = chapter.blocks.slice(0, blockIndex + 1).filter((item) => item.type === "h").length;
    return [{ id: headingId(block.text, count), text: block.text }];
  });

  return (
    <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <nav className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-4 lg:hidden" aria-label="Chapters">
        {CHAPTERS.map((item) => {
          const active = item.slug === chapter.slug;
          return (
            <Link
              key={item.slug}
              to="/guide/$slug"
              params={{ slug: item.slug }}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface"
                  : "inline-flex h-11 shrink-0 items-center rounded-full bg-surface px-4 text-sm font-medium ring-1 ring-line"
              }
            >
              {item.short}
            </Link>
          );
        })}
      </nav>

      <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:block">
          <nav className="sticky top-32" aria-label="Chapters">
            <p className="text-xs font-medium tracking-widest text-muted uppercase">Chapters</p>
            <ul className="mt-3 space-y-1">
              {CHAPTERS.map((item) => {
                const active = item.slug === chapter.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      to="/guide/$slug"
                      params={{ slug: item.slug }}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "flex h-11 items-center rounded-xl bg-ink px-3 text-sm font-medium text-surface"
                          : "flex h-11 items-center rounded-xl px-3 text-sm text-ink hover:bg-paper-deep"
                      }
                    >
                      <span className={active ? "mr-2 tabular-nums text-wool" : "mr-2 tabular-nums text-muted"}>
                        {item.number}
                      </span>
                      {item.short}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0">
          <p className="text-sm font-medium tracking-widest text-sage-deep uppercase">
            Chapter {chapter.number}
            <span className="text-muted"> · {minutes} min read</span>
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">{chapter.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{chapter.summary}</p>
          <img
            src={chapter.image}
            alt={chapter.imageAlt}
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1]"
          />

          {headings.length > 0 ? (
            <nav className="mt-8" aria-label="On this page">
              <p className="text-xs font-medium tracking-widest text-muted uppercase">On this page</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="inline-flex min-h-11 items-center rounded-full bg-surface px-3 text-sm ring-1 ring-line hover:bg-paper-deep"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="mt-10 max-w-3xl">
            <Blocks blocks={chapter.blocks} />
          </div>

          <div className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
            {previous ? (
              <Link
                to="/guide/$slug"
                params={{ slug: previous.slug }}
                className="flex min-h-20 items-center gap-3 rounded-2xl bg-surface px-4 py-4 ring-1 ring-line hover:bg-paper-deep"
              >
                <ChevronLeft aria-hidden className="shrink-0 text-muted" />
                <span>
                  <span className="block text-xs tracking-widest text-muted uppercase">Previous</span>
                  <span className="font-display text-xl">{previous.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/guide/$slug"
                params={{ slug: next.slug }}
                className="flex min-h-20 items-center justify-end gap-3 rounded-2xl bg-surface px-4 py-4 text-right ring-1 ring-line hover:bg-paper-deep sm:col-start-2"
              >
                <span>
                  <span className="block text-xs tracking-widest text-muted uppercase">Next</span>
                  <span className="font-display text-xl">{next.title}</span>
                </span>
                <ChevronRight aria-hidden className="shrink-0 text-muted" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
