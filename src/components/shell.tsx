import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const LINKS = [
  { to: "/", label: "Guide", match: (path: string) => path === "/" || path.startsWith("/guide") },
  { to: "/breeds", label: "Breeds", match: (path: string) => path.startsWith("/breeds") },
  { to: "/planner", label: "Planner", match: (path: string) => path.startsWith("/planner") },
  { to: "/year", label: "The year", match: (path: string) => path.startsWith("/year") },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl tracking-tight text-ink">Flockstead</span>
            <span className="hidden text-xs font-medium tracking-widest text-muted uppercase sm:inline">
              Field guide
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {LINKS.map((link) => {
              const active = link.match(path);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface"
                      : "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-ink hover:bg-paper-deep"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-paper-deep md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-line px-4 py-3 md:hidden" aria-label="Primary">
            <ul className="flex flex-col">
              {LINKS.map((link) => {
                const active = link.match(path);
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={
                        active
                          ? "flex h-11 items-center rounded-xl bg-ink px-3 text-sm font-medium text-surface"
                          : "flex h-11 items-center rounded-xl px-3 text-sm font-medium text-ink"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-muted sm:px-6">
        <p className="max-w-3xl">
          Flockstead is a field guide for learning, not a diagnosis or a feed ticket. Confirm dosing,
          vaccines, and rations with a veterinarian who knows sheep, and with your local extension service.
          Copper in cattle mineral can kill sheep.
        </p>
      </footer>
    </div>
  );
}
