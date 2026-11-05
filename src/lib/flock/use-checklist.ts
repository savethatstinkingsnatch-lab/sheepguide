import { useCallback, useEffect, useState } from "react";

const KEY = "flockstead-checklist-v1";

export type Hemisphere = "north" | "south";

type Saved = {
  hemisphere: Hemisphere;
  done: Record<string, boolean>;
};

const EMPTY: Saved = { hemisphere: "north", done: {} };

export function useChecklist() {
  const [state, setState] = useState<Saved>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Saved>;
        const done =
          parsed.done && typeof parsed.done === "object" ? (parsed.done as Record<string, boolean>) : {};
        setState({
          hemisphere: parsed.hemisphere === "south" ? "south" : "north",
          done,
        });
      }
    } catch {
      /* ignore unreadable storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const toggle = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      done: { ...current.done, [id]: !current.done[id] },
    }));
  }, []);

  const setHemisphere = useCallback((hemisphere: Hemisphere) => {
    setState((current) => ({ ...current, hemisphere }));
  }, []);

  const reset = useCallback(() => {
    setState((current) => ({ ...current, done: {} }));
  }, []);

  return { ...state, hydrated, toggle, setHemisphere, reset };
}
