export const PASTURE_RATES = {
  lush: { ewesPerAcre: 6, label: "Lush improved", note: "Fertile, rainy, rotationally grazed. Parasites love it too." },
  average: { ewesPerAcre: 4, label: "Average pasture", note: "A fair mixed grass-clover sward in the growing season." },
  rough: { ewesPerAcre: 1.5, label: "Rough grazing", note: "Hill ground, thin soils, or weedy old fields." },
  range: { ewesPerAcre: 0.15, label: "Arid range", note: "About one ewe to six or seven acres. Some country needs more." },
} as const;

export type PastureKey = keyof typeof PASTURE_RATES;
export type ClimateKey = "cool" | "temperate" | "hot";

export type PlanInput = {
  ewes: number;
  rams: number;
  lambsPerEwe: number;
  pasture: PastureKey;
  winterDays: number;
  winterLambs: boolean;
  climate: ClimateKey;
};

export type FlockPlan = {
  ewes: number;
  rams: number;
  lambs: number;
  units: number;
  acres: number;
  rate: number;
  hayLb: number;
  hayTons: number;
  waterGal: number;
  shelterSqFt: number;
  jugs: number;
  mineralLbMonth: number;
  suggestedRams: number;
  perimeterFt: number;
  winterDays: number;
};

function clamp(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function planFlock(raw: PlanInput): FlockPlan {
  const ewes = clamp(Math.round(raw.ewes), 0, 5000);
  const rams = clamp(Math.round(raw.rams), 0, 400);
  const lambsPerEwe = clamp(raw.lambsPerEwe, 0, 3);
  const winterDays = clamp(Math.round(raw.winterDays), 0, 300);
  const lambs = Math.round(ewes * lambsPerEwe);
  const units = ewes + rams * 1.25 + lambs * 0.4;
  const rate = PASTURE_RATES[raw.pasture].ewesPerAcre;
  const acres = units / rate;

  const adultHead = ewes + rams;
  const hayPerAdult = raw.winterLambs ? 6.2 : 5.2;
  const hayPerLamb = raw.winterLambs ? 2.2 : 0;
  const hayLb = winterDays * (adultHead * hayPerAdult + lambs * hayPerLamb);

  const heat = raw.climate === "hot" ? 1.55 : raw.climate === "temperate" ? 1.15 : 1;
  const waterGal =
    ewes * (raw.winterLambs ? 2.4 : 1.5) * heat + rams * 1.6 * heat + lambs * 0.6 * heat;

  const shelterSqFt = adultHead * 16 + (raw.winterLambs ? lambs * 8 : 0);
  const jugs = ewes === 0 ? 0 : Math.max(1, Math.ceil(ewes / 8));
  const mineralOzDay = (adultHead + lambs * 0.35) * 0.75;
  const mineralLbMonth = (mineralOzDay * 30) / 16;
  const suggestedRams = ewes === 0 ? 0 : Math.max(1, Math.ceil(ewes / 30));
  const sideFt = Math.sqrt(Math.max(acres, 0) * 43560);
  const perimeterFt = acres > 0 ? sideFt * 4 : 0;

  return {
    ewes,
    rams,
    lambs,
    units,
    acres,
    rate,
    hayLb,
    hayTons: hayLb / 2000,
    waterGal,
    shelterSqFt,
    jugs,
    mineralLbMonth,
    suggestedRams,
    perimeterFt,
    winterDays,
  };
}

export function formatNum(n: number, digits = 0): string {
  return n.toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function parseIso(iso: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

export function addDays(iso: string, days: number): Date | null {
  const date = parseIso(iso);
  if (!date) return null;
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
  return next;
}

export function formatLong(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export type LambingMode = "observed" | "group";

export type LambingPlan = {
  earliest: Date;
  likely: Date;
  latest: Date;
  cdt: Date;
  prep: Date;
  span: number;
};

export function lambingPlan(iso: string, mode: LambingMode, daysWithRam: number): LambingPlan | null {
  if (!parseIso(iso)) return null;
  const span = mode === "group" ? clamp(Math.round(daysWithRam), 1, 90) : 0;
  const earliest = addDays(iso, 142);
  const likely = addDays(iso, 147 + Math.round(span / 2));
  const latest = addDays(iso, 152 + span);
  const cdt = addDays(iso, 142 - 28);
  const prep = addDays(iso, 142 - 7);
  if (!earliest || !likely || !latest || !cdt || !prep) return null;
  return { earliest, likely, latest, cdt, prep, span };
}
