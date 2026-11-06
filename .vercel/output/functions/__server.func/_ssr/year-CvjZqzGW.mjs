import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/year-CvjZqzGW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEASONS = [
	{
		id: "winter",
		title: "Winter",
		north: "December – February",
		south: "June – August",
		blurb: "Feed is the job. Late pregnancy and cold rain punish thin ewes and bad shelter.",
		tasks: [
			{
				id: "winter-bcs",
				label: "Score body condition",
				detail: "Hands on the loin, not a glance from the lane. Aim near a 3 before lambing, closer to 3.5 for ewes carrying twins."
			},
			{
				id: "winter-hay",
				label: "Weigh a day’s hay once",
				detail: "Most people overestimate flakes. Late gestation needs more energy in the last four to six weeks — add it slowly."
			},
			{
				id: "winter-water",
				label: "Break ice every day",
				detail: "A ewe who cannot drink will not eat. Check heaters and hoses before the cold snap, not during it."
			},
			{
				id: "winter-jugs",
				label: "Build or bed the jugs",
				detail: "Panels, a heat lamp only if you know the fire risk, iodine, colostrum supplies, and a notebook in the barn."
			},
			{
				id: "winter-cdt",
				label: "CDT the ewes before lambing",
				detail: "For ewes who already finished a primary series, a dose two to four weeks before lambing is a common way to load the colostrum. An unvaccinated ewe needs the primary series on the product label, not one shot called a booster. Follow the label and your vet."
			},
			{
				id: "winter-shelter",
				label: "Walk the windward wall",
				detail: "Dry bedding and a draft at sheep height are different things. Ventilation up high, stillness down low."
			}
		]
	},
	{
		id: "spring",
		title: "Spring",
		north: "March – May",
		south: "September – November",
		blurb: "Lambs, mud, and the first grass. The pretty part is also when mistakes show up.",
		tasks: [
			{
				id: "spring-bond",
				label: "Keep new pairs in a jug",
				detail: "A day or three until the lamb nurses and the ewe talks to it. Ear-tag or note who belongs to whom before turnout."
			},
			{
				id: "spring-navel",
				label: "Dip navels and watch navels",
				detail: "Iodine early. A wet, swollen navel a few days later is a reason to call, not to wait for the weekend."
			},
			{
				id: "spring-grass",
				label: "Turn out gradually",
				detail: "Sudden lush pasture bloats and scours. A few hours, then home to hay, until rumens catch up."
			},
			{
				id: "spring-coccidia",
				label: "Watch lambs for coccidia",
				detail: "Dark, straining scours in lambs around three to eight weeks, often after stress. It is a management and vet problem, not a weather story."
			},
			{
				id: "spring-shear",
				label: "Shear before the heat",
				detail: "Or at least crutch udders and docks before lambing if you lamb later. Book the shearer in winter."
			},
			{
				id: "spring-feet",
				label: "Check feet while they are in",
				detail: "Mud season hides rot. Trim only when the wall needs it — over-trimming makes feet sore. Smell the hoof. One lame sheep is a flock problem until you prove otherwise."
			}
		]
	},
	{
		id: "summer",
		title: "Summer",
		north: "June – August",
		south: "December – February",
		blurb: "Parasites peak when the grass is shortest and the lambs are heaviest.",
		tasks: [
			{
				id: "summer-famacha",
				label: "FAMACHA on a schedule",
				detail: "Lower eyelid color, learned from a trained person. It tracks barber-pole anemia — not every worm, and not a guess from a photo."
			},
			{
				id: "summer-rest",
				label: "Rest paddocks",
				detail: "Leave residual grass. Grazing to the dirt invites larvae and weak plants. Move water with the flock."
			},
			{
				id: "summer-shade",
				label: "Shade and extra water",
				detail: "Wool is insulation both ways, but a freshly shorn sheep can sunburn, and an unshorn one can overheat without air."
			},
			{
				id: "summer-fly",
				label: "Check docks for flystrike",
				detail: "Daily in humid weather if anyone is dirty behind. Shear, crutch, and treat early. Maggots do not wait."
			},
			{
				id: "summer-wean",
				label: "Plan weaning",
				detail: "Often 60–90 days, when lambs are eating forage or creep well. Dry the ewes off grain and richer pasture for a few days."
			},
			{
				id: "summer-weeds",
				label: "Walk for toxic plants",
				detail: "Wilted cherry, yew, rhododendron, oleander, and bracken are the usual villains. Fence lines grow what the pasture does not."
			}
		]
	},
	{
		id: "fall",
		title: "Fall",
		north: "September – November",
		south: "March – May",
		blurb: "Breeding season for most flocks, and the last chance to put on cheap grass before hay.",
		tasks: [
			{
				id: "fall-flush",
				label: "Flush only the ewes who need it",
				detail: "A rising plane of feed for two weeks before rams can lift ovulation in thinner ewes. Fat ewes do not need the extra."
			},
			{
				id: "fall-ram",
				label: "Sound the ram before turnout",
				detail: "Feet, body condition, and a look at the testes. One mature ram per about thirty ewes, fewer ewes per ram lamb."
			},
			{
				id: "fall-mark",
				label: "Mark breedings",
				detail: "A raddle or crayon harness, color changed every 17 days. Repeating marks mean she did not settle."
			},
			{
				id: "fall-feet2",
				label: "Hooves before the mud returns",
				detail: "Check hooves before breeding. Trim a lame or overgrown foot so a ram who cannot mount is not your breeding program."
			},
			{
				id: "fall-replacements",
				label: "Choose replacements on purpose",
				detail: "Keep daughters of ewes who lambed easily, milked, and stayed healthy. Cute is not a selection index."
			},
			{
				id: "fall-hay-test",
				label: "Test or at least judge the hay",
				detail: "Leafy green grass hay, not yellow stems. If you can, a forage test tells you whether grain is even necessary."
			}
		]
	}
];
var TASK_COUNT = SEASONS.reduce((sum, season) => sum + season.tasks.length, 0);
var KEY = "flockstead-checklist-v1";
var EMPTY = {
	hemisphere: "north",
	done: {}
};
function useChecklist() {
	const [state, setState] = (0, import_react.useState)(EMPTY);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				const done = parsed.done && typeof parsed.done === "object" ? parsed.done : {};
				setState({
					hemisphere: parsed.hemisphere === "south" ? "south" : "north",
					done
				});
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem(KEY, JSON.stringify(state));
	}, [state, hydrated]);
	const toggle = (0, import_react.useCallback)((id) => {
		setState((current) => ({
			...current,
			done: {
				...current.done,
				[id]: !current.done[id]
			}
		}));
	}, []);
	const setHemisphere = (0, import_react.useCallback)((hemisphere) => {
		setState((current) => ({
			...current,
			hemisphere
		}));
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		setState((current) => ({
			...current,
			done: {}
		}));
	}, []);
	return {
		...state,
		hydrated,
		toggle,
		setHemisphere,
		reset
	};
}
function YearPage() {
	const { hemisphere, done, toggle, setHemisphere, reset } = useChecklist();
	const finished = SEASONS.reduce((sum, season) => sum + season.tasks.filter((task) => done[task.id]).length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-sage-deep uppercase",
				children: "The year"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-2xl font-display text-4xl sm:text-5xl",
					children: "Chores follow the grass, not the calendar app."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl text-sage-deep tabular-nums",
					children: [finished, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xl text-muted",
						children: [" / ", TASK_COUNT]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Northern and southern seasons swap months. The work inside them does not. Checks stay in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-full bg-surface p-1 ring-1 ring-line",
					role: "radiogroup",
					"aria-label": "Hemisphere",
					children: [["north", "Northern"], ["south", "Southern"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "radio",
						"aria-checked": hemisphere === id,
						onClick: () => setHemisphere(id),
						className: hemisphere === id ? "inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface" : "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium",
						children: label
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: reset,
					className: "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-clay-deep hover:bg-clay-soft",
					children: "Clear checks"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-2",
				children: SEASONS.map((season) => {
					const seasonDone = season.tasks.filter((task) => done[task.id]).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl",
									children: season.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted tabular-nums",
									children: [
										seasonDone,
										"/",
										season.tasks.length
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-sage-deep",
								children: hemisphere === "north" ? season.north : season.south
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: season.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 divide-y divide-line",
								children: season.tasks.map((task) => {
									const checked = Boolean(done[task.id]);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer gap-3 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "mt-1 size-4 shrink-0 accent-sage",
											checked,
											onChange: () => toggle(task.id)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: checked ? "font-medium text-muted line-through" : "font-medium",
											children: task.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm leading-relaxed text-muted",
											children: task.detail
										})] })]
									}) }, task.id);
								})
							})
						]
					}, season.id);
				})
			})
		]
	});
}
//#endregion
export { YearPage as component };
