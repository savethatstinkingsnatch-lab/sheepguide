import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterView } from "@/components/chapter-view";
import { getChapter } from "@/lib/flock/content";

export const Route = createFileRoute("/guide/$slug")({
  head: ({ params }) => {
    const chapter = getChapter(params.slug);
    return {
      meta: [{ title: chapter ? `${chapter.title} — Flockstead` : "Not in the book — Flockstead" }],
    };
  },
  component: GuideChapter,
});

function GuideChapter() {
  const { slug } = Route.useParams();
  const chapter = getChapter(slug);

  if (!chapter) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Missing chapter</p>
        <h1 className="mt-3 font-display text-4xl">That page isn’t in the book.</h1>
        <p className="mt-4 text-muted">The guide has eight chapters. This address isn’t one of them.</p>
        <Link to="/" className="btn btn-primary mt-8">
          Back to the guide
        </Link>
      </div>
    );
  }

  return <ChapterView chapter={chapter} />;
}
