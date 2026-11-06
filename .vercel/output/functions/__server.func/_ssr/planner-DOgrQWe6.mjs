import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-DOgrQWe6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PASTURE_RATES = {
	lush: {
		ewesPerAcre: 6,
		label: "Lush improved",
		note: "Fertile, rainy, rotationally grazed. Parasites love it too."
	},
	average: {
		ewesPerAcre: 4,
		label: "Average pasture",
		note: "A fair mixed grass-clover sward in the growing season."
	},
	rough: {
		ewesPerAcre: 1.5,
		label: "Rough grazing",
		note: "Hill ground, thin soils, or weedy old fields."
	},
	range: {
		ewesPerAcre: .15,
		label: "Arid range",
		note: "About one ewe to six or seven acres. Some country needs more."
	}
};
function clamp(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, n));
}
function planFlock(raw) {
	const ewes = clamp(Math.round(raw.ewes), 0, 5e3);
	const rams = clamp(Math.round(raw.rams), 0, 400);
	const lambsPerEwe = clamp(raw.lambsPerEwe, 0, 3);
	const winterDays = clamp(Math.round(raw.winterDays), 0, 300);
	const lambs = Math.round(ewes * lambsPerEwe);
	const units = ewes + rams * 1.25 + lambs * .4;
	const rate = PASTURE_RATES[raw.pasture].ewesPerAcre;
	const acres = units / rate;
	const adultHead = ewes + rams;
	const hayPerAdult = raw.winterLambs ? 6.2 : 5.2;
	const hayPerLamb = raw.winterLambs ? 2.2 : 0;
	const hayLb = winterDays * (adultHead * hayPerAdult + lambs * hayPerLamb);
	const heat = raw.climate === "hot" ? 1.55 : raw.climate === "temperate" ? 1.15 : 1;
	const waterGal = ewes * (raw.winterLambs ? 2.4 : 1.5) * heat + rams * 1.6 * heat + lambs * .6 * heat;
	const shelterSqFt = adultHead * 16 + (raw.winterLambs ? lambs * 8 : 0);
	const jugs = ewes === 0 ? 0 : Math.max(1, Math.ceil(ewes / 8));
	const mineralLbMonth = (adultHead + lambs * .35) * .75 * 30 / 16;
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
		hayTons: hayLb / 2e3,
		waterGal,
		shelterSqFt,
		jugs,
		mineralLbMonth,
		suggestedRams,
		perimeterFt,
		winterDays
	};
}
function formatNum(n, digits = 0) {
	return n.toLocaleString("en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
function parseIso(iso) {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
	if (!match) return null;
	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = Number(match[3]);
	const date = new Date(year, month - 1, day);
	if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
	return date;
}
function addDays(iso, days) {
	const date = parseIso(iso);
	if (!date) return null;
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}
function formatLong(date) {
	return date.toLocaleDateString("en-US", {
		weekday: "short",
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function lambingPlan(iso, mode, daysWithRam) {
	if (!parseIso(iso)) return null;
	const span = mode === "group" ? clamp(Math.round(daysWithRam), 1, 90) : 0;
	const earliest = addDays(iso, 142);
	const likely = addDays(iso, 147 + Math.round(span / 2));
	const latest = addDays(iso, 152 + span);
	const cdt = addDays(iso, 114);
	const prep = addDays(iso, 135);
	if (!earliest || !likely || !latest || !cdt || !prep) return null;
	return {
		earliest,
		likely,
		latest,
		cdt,
		prep,
		span
	};
}
var PASTURES = Object.entries(PASTURE_RATES);
function NumberField({ id, label, value, min, max, step = 1, onChange, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		htmlFor: id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				className: "field mt-1.5",
				type: "number",
				inputMode: "decimal",
				min,
				max,
				step,
				value,
				onChange: (event) => {
					const next = Number(event.target.value);
					onChange(Number.isFinite(next) ? next : min);
				}
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: hint
			}) : null
		]
	});
}
function PlannerPage() {
	const [ewes, setEwes] = (0, import_react.useState)(8);
	const [rams, setRams] = (0, import_react.useState)(0);
	const [lambsPerEwe, setLambsPerEwe] = (0, import_react.useState)(1.6);
	const [pasture, setPasture] = (0, import_react.useState)("average");
	const [winterDays, setWinterDays] = (0, import_react.useState)(120);
	const [winterLambs, setWinterLambs] = (0, import_react.useState)(false);
	const [climate, setClimate] = (0, import_react.useState)("temperate");
	const [bredOn, setBredOn] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("observed");
	const [daysWithRam, setDaysWithRam] = (0, import_react.useState)(34);
	const plan = (0, import_react.useMemo)(() => planFlock({
		ewes,
		rams,
		lambsPerEwe,
		pasture,
		winterDays,
		winterLambs,
		climate
	}), [
		ewes,
		rams,
		lambsPerEwe,
		pasture,
		winterDays,
		winterLambs,
		climate
	]);
	const lambing = (0, import_react.useMemo)(() => bredOn ? lambingPlan(bredOn, mode, daysWithRam) : null, [
		bredOn,
		mode,
		daysWithRam
	]);
	const ramWord = plan.suggestedRams === 1 ? "ram" : "rams";
	const ramNote = plan.ewes === 0 ? "Add ewes to size a breeding group." : plan.rams === 0 ? `You listed no ram. Borrow or keep at least ${plan.suggestedRams} mature ${ramWord} for this many ewes, or share one for about 34 days.` : plan.rams > plan.suggestedRams ? `That’s more rams than a 1-to-30 rule needs (${plan.suggestedRams}). Extra rams still eat.` : `About ${plan.suggestedRams} mature ${ramWord} covers this ewe group. Ram lambs should be given fewer ewes.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-sage-deep uppercase",
				children: "Planner"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-2xl font-display text-4xl sm:text-5xl",
				children: "Size the flock before you buy the hay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Growing-season pasture, a winter hay pile, water, shelter, and the date the lambs should show up. Acre, water, and mineral lines are rough starting estimates for a medium ewe, not a stocking rate or a ration."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6",
					onSubmit: (event) => event.preventDefault(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "The flock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								id: "ewes",
								label: "Ewes",
								value: ewes,
								min: 0,
								max: 5e3,
								onChange: setEwes
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								id: "rams",
								label: "Rams kept",
								value: rams,
								min: 0,
								max: 400,
								onChange: setRams
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block",
							htmlFor: "lambs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between text-sm font-medium",
								children: ["Lambs expected per ewe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: lambsPerEwe.toFixed(1)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "lambs",
								className: "mt-3 w-full accent-sage",
								type: "range",
								min: 0,
								max: 2.5,
								step: .1,
								value: lambsPerEwe,
								onChange: (event) => setLambsPerEwe(Number(event.target.value))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm font-medium",
									children: "Pasture while it is growing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "The ewes-per-acre figures below are broad examples, not a stocking recommendation for a particular place. Carrying capacity depends on local forage production, rainfall, soil, and how the grass is managed. Extension offices treat stocking rates as variable. Ask them before you trust an acre number."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid gap-2",
									children: PASTURES.map(([key, info]) => {
										const active = pasture === key;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: active ? "flex cursor-pointer gap-3 rounded-xl bg-sage-soft px-3 py-3 ring-1 ring-sage" : "flex cursor-pointer gap-3 rounded-xl px-3 py-3 ring-1 ring-line",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "radio",
												name: "pasture",
												className: "mt-1 accent-sage",
												checked: active,
												onChange: () => setPasture(key)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block font-medium",
												children: [info.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "ml-2 font-normal text-muted tabular-nums",
													children: [info.ewesPerAcre, " ewe-units / acre"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 block text-sm text-muted",
												children: info.note
											})] })]
										}, key);
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								id: "winter",
								label: "Days on hay",
								value: winterDays,
								min: 0,
								max: 300,
								onChange: setWinterDays,
								hint: "Zero if they graze all year."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								htmlFor: "climate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Climate for water"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "climate",
									className: "field mt-1.5",
									value: climate,
									onChange: (event) => setClimate(event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "cool",
											children: "Cool"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "temperate",
											children: "Temperate"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "hot",
											children: "Hot"
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 flex min-h-11 cursor-pointer items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-sage",
								checked: winterLambs,
								onChange: (event) => setWinterLambs(event.target.checked)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: "Lambs are on the ground during hay season"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-muted",
								children: "Adds late-gestation and lactation hay, jug space, and more water."
							})] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-ink p-5 text-surface sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "What to plan for"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-wool",
							children: ramNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 divide-y divide-white/15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Pasture in the growing season",
									value: `${formatNum(plan.acres, plan.acres < 10 ? 1 : 0)} acres`,
									hint: "Example only. Forage, rainfall, soil, and management decide what the ground can carry."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Winter hay",
									value: plan.hayLb >= 2e3 ? `${formatNum(plan.hayTons, 1)} tons` : `${formatNum(plan.hayLb)} lb`,
									hint: `${formatNum(plan.hayLb)} pounds as fed, waste included, for ${plan.winterDays} days`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Water, rough estimate",
									value: `${formatNum(plan.waterGal, 0)} gal / day`,
									hint: "A fixed rate and a simple climate factor. Drinking changes with temperature, diet, pregnancy, lactation, and size. Size tanks with a veterinarian or extension office."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Open shelter",
									value: `${formatNum(plan.shelterSqFt)} ft²`,
									hint: "About 16 square feet per adult"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Lambing jugs",
									value: String(plan.jugs),
									hint: "5×5 ft pens, one per eight ewes if they lamb together"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Sheep mineral, rough estimate",
									value: `${formatNum(plan.mineralLbMonth, 1)} lb / month`,
									hint: "A fixed intake, not a measured appetite. Free choice, labeled for sheep — never cattle or goat mineral. Confirm the product locally."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "One square paddock",
									value: plan.perimeterFt > 0 ? `${formatNum(plan.perimeterFt)} ft of fence` : "—",
									hint: "Perimeter if the whole acreage were one block. Real farms bend."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm leading-relaxed text-wool",
							children: [
								"About ",
								formatNum(plan.lambs),
								" lambs if every ewe meets that average. The acre figure is a seasonal example, not advice for your farm. Hay is separate. Size water, mineral, and feed with local veterinary or extension guidance."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-8 rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Lambing window"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Gestation is counted as 147 days, with lambs possibly from day 142 through day 152."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						role: "radiogroup",
						"aria-label": "How the date was taken",
						children: [["observed", "One mating you saw"], ["group", "Ram left in"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "radio",
							"aria-checked": mode === id,
							onClick: () => setMode(id),
							className: mode === id ? "inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface" : "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium ring-1 ring-line",
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						htmlFor: "bred",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: mode === "observed" ? "Day she was bred" : "Day the ram went in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bred",
							type: "date",
							className: "field mt-1.5",
							value: bredOn,
							onChange: (event) => setBredOn(event.target.value)
						})]
					}),
					mode === "group" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
							id: "days-ram",
							label: "Days he stayed in",
							value: daysWithRam,
							min: 1,
							max: 90,
							onChange: setDaysWithRam,
							hint: "Two heat cycles is 34 days."
						})
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:pt-2",
					children: !bredOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl bg-paper px-4 py-8 text-muted",
						children: "Pick the day the ram went in, or the day you saw a breeding. The window will land here."
					}) : !lambing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl bg-clay-soft px-4 py-8",
						children: "That date doesn’t parse. Try again."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "divide-y divide-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRow, {
								label: "Vaccinate ewes (typical CDT)",
								value: formatLong(lambing.cdt),
								hint: "About four weeks before the earliest lamb is a common timing only for ewes who already finished a primary series. Unvaccinated ewes need the series on the label. Follow your vet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRow, {
								label: "Jugs bedded, kit in the barn",
								value: formatLong(lambing.prep),
								hint: "A week before the first possible lamb."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRow, {
								label: "Earliest lamb",
								value: formatLong(lambing.earliest),
								hint: "Day 142."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRow, {
								label: lambing.span > 0 ? "Middle of the window" : "Most likely",
								value: formatLong(lambing.likely),
								hint: lambing.span > 0 ? "147 days after the middle of his stay." : "Day 147."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRow, {
								label: "Latest lamb",
								value: formatLong(lambing.latest),
								hint: lambing.span > 0 ? "Day 152 after he came out." : "Day 152."
							})
						]
					})
				})]
			})
		]
	});
}
function Row({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm text-wool",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-right font-display text-2xl tabular-nums",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-wool/80",
			children: hint
		})]
	});
}
function DateRow({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "font-display text-2xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			})
		]
	});
}
//#endregion
export { PlannerPage as component };
