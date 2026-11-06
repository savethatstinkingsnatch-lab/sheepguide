import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const LINKS = [
  { to: "/start", label: "Start here", match: (path: string) => path.startsWith("/start") },
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
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:px-6">
          <Link to="/" className="flex min-w-0 flex-col py-1 leading-tight" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl tracking-tight text-ink">Flockstead</span>
            <span className="text-xs text-muted">
              The Education Revolution Pocket Guide, Volume 29: Sheep
            </span>
            <span className="text-xs text-muted">by Blue and the Awesome Dudes</span>
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
          withdrawals, and disease programs with a veterinarian. Copper in cattle or goat mineral can kill
          sheep. Blue and the Awesome Dudes are not responsible for illness, injury, citations, or flock
          loss. Part of The Education Revolution pocket guide series. Privacy: This guide does not collect
          your name, email, or any personal information. Your checklist marks are saved only on your own
          device.
        </p>
      </footer>
    </div>
  );
}
