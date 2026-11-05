import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breeds-YnrcPRJ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BREEDS = [
	{
		id: "katahdin",
		name: "Katahdin",
		origin: "Maine, United States",
		purposes: ["meat", "hair"],
		beginner: true,
		smallAcreage: true,
		climate: "Handles heat and humidity better than most wooled breeds.",
		size: "Ewes often 120–160 lb",
		summary: "A hair sheep that sheds a winter coat instead of needing a shearer. Built as a pasture meat sheep, and a common first flock in the eastern United States.",
		fit: "People who want lambs more than fleeces, and who would rather not book a shearer.",
		watch: "Hair does not mean no care. Hooves, minerals, and worms still run the year. Some lines are flightier than the breed’s reputation.",
		traits: {
			hardiness: 5,
			lambs: 4,
			fiber: 1,
			calm: 4,
			ease: 5
		}
	},
	{
		id: "dorper",
		name: "Dorper",
		origin: "South Africa",
		purposes: ["meat", "hair"],
		beginner: true,
		smallAcreage: false,
		climate: "Bred for arid country. Heat-tolerant; less happy in constant mud.",
		size: "Ewes often 150–200 lb",
		summary: "A muscular hair breed with a white body and, in the original type, a black head. Fast early growth and a reputation for foraging where grass is stingy.",
		fit: "Hot, dry farms that sell meat and do not want a wool clip.",
		watch: "They are heavy sheep. Soft ground, small jugs, and flimsy fences feel it. White Dorpers exist; don’t buy a color and assume the rest.",
		traits: {
			hardiness: 4,
			lambs: 3,
			fiber: 1,
			calm: 3,
			ease: 4
		}
	},
	{
		id: "southdown",
		name: "Southdown",
		origin: "Sussex, England",
		purposes: ["meat"],
		beginner: true,
		smallAcreage: true,
		climate: "A temperate-breed classic. Provide shade and air in hard heat.",
		size: "Ewes often 120–160 lb; a compact build",
		summary: "A small, mouse-gray-faced meat sheep known for quiet manners and a carcass that chefs still ask for. Babydoll is a smaller, separate Southdown-type line.",
		fit: "Small acreage, families, and anyone who will be catching sheep alone.",
		watch: "They are not range sheep. Wool still has to come off once a year, and a cute face is not a health program.",
		traits: {
			hardiness: 3,
			lambs: 3,
			fiber: 2,
			calm: 5,
			ease: 4
		}
	},
	{
		id: "dorset",
		name: "Dorset",
		origin: "Southern England",
		purposes: ["meat"],
		beginner: false,
		smallAcreage: true,
		climate: "Adaptable temperate sheep. Both horned and polled lines exist.",
		size: "Ewes often 150–200 lb",
		summary: "A white-faced meat breed that will breed outside the usual short-day season more readily than many. Useful if you want a fall lamb crop.",
		fit: "Flocks that need lambs more than once a year, or an out-of-season window.",
		watch: "Out-of-season breeding still needs feed, shade, and a plan for lambs in bad weather. Don’t assume every white-faced ewe is a Dorset.",
		traits: {
			hardiness: 3,
			lambs: 4,
			fiber: 2,
			calm: 4,
			ease: 3
		}
	},
	{
		id: "polypay",
		name: "Polypay",
		origin: "United States, a four-breed composite",
		purposes: ["meat", "wool"],
		beginner: false,
		smallAcreage: false,
		climate: "Developed for managed US farm flocks, not desert range.",
		size: "Ewes often 150–180 lb",
		summary: "Targhee, Dorset, Rambouillet, and Finnsheep were combined for a prolific commercial ewe that still grows a useful fleece and can lamb more than once a year.",
		fit: "Someone already comfortable with records, lambing jugs, and a higher lamb crop.",
		watch: "More lambs means more milk, more jugs, and more ways for a ewe to fall behind. Prolificacy is work, not a free bonus.",
		traits: {
			hardiness: 3,
			lambs: 5,
			fiber: 3,
			calm: 4,
			ease: 2
		}
	},
	{
		id: "suffolk",
		name: "Suffolk",
		origin: "England",
		purposes: ["meat"],
		beginner: false,
		smallAcreage: false,
		climate: "Does its best work as a terminal sire on good feed, not on thin range.",
		size: "Ewes often 200–250 lb; rams larger",
		summary: "The black-faced head without wool, and a long body built to sire fast-growing market lambs. Common in show rings and commercial ram batteries.",
		fit: "A ram breed to put on hardy ewes when the lamb check is the point.",
		watch: "Large birth weights raise lambing trouble. Bare heads and open fleeces mean they feel weather. Parasites pick on them more than on hair sheep.",
		traits: {
			hardiness: 2,
			lambs: 3,
			fiber: 2,
			calm: 3,
			ease: 2
		}
	},
	{
		id: "merino",
		name: "Merino",
		origin: "Spain, then the world’s fine-wool flocks",
		purposes: ["wool"],
		beginner: false,
		smallAcreage: false,
		climate: "Dry country suits them. Wrinkle and dense wool invite flystrike in wet heat.",
		size: "Ewes often 110–160 lb, depending on strain",
		summary: "The fine-wool sheep. A well-grown Merino fleece is the reason the breed exists — soft, dense, and worth skirting with care.",
		fit: "A shearer you trust, a dry climate, and a buyer or mill for fine wool.",
		watch: "Wrinkled skin, wool blindness, and flies. This is a specialist’s sheep if you have never shorn or classed a fleece.",
		traits: {
			hardiness: 4,
			lambs: 2,
			fiber: 5,
			calm: 3,
			ease: 1
		}
	},
	{
		id: "romney",
		name: "Romney",
		origin: "Romney Marsh, England",
		purposes: ["wool", "meat"],
		beginner: true,
		smallAcreage: true,
		climate: "Bred for wet feet. A better wet-climate wool sheep than a Merino.",
		size: "Ewes often 155–200 lb",
		summary: "A longwool with a calm reputation and a lustrous, durable fleece that handspinners actually ask for. Also a respectable meat sheep.",
		fit: "Damp temperate farms that want both a fleece and a quiet ewe.",
		watch: "Long wool holds rain. Shear on a sensible date and keep them off boggy ground if foot rot is already in the flock.",
		traits: {
			hardiness: 4,
			lambs: 3,
			fiber: 4,
			calm: 5,
			ease: 3
		}
	},
	{
		id: "icelandic",
		name: "Icelandic",
		origin: "Iceland",
		purposes: ["wool", "meat"],
		beginner: false,
		smallAcreage: true,
		climate: "Hardy in cold and wind. A primitive sheep, not a pampered one.",
		size: "Ewes often 120–150 lb",
		summary: "A short-tailed northern breed with a dual coat: soft thel next to the skin and longer tog on the outside. Fleeces come in many natural colors.",
		fit: "Fiber people who like leadersheep attitude and can fence well.",
		watch: "They are alert and some lines are genuinely wild. A fence that holds a Southdown may be a suggestion to an Icelandic.",
		traits: {
			hardiness: 5,
			lambs: 4,
			fiber: 4,
			calm: 2,
			ease: 3
		}
	},
	{
		id: "shetland",
		name: "Shetland",
		origin: "Shetland Islands",
		purposes: ["wool"],
		beginner: true,
		smallAcreage: true,
		climate: "Thrifty in cold wind and poor grass. Small enough for tight acreage.",
		size: "Ewes often 75–100 lb",
		summary: "A tiny northern sheep with a fine, varied fleece — the breed of Fair Isle color. Rams are often horned; many ewes are too.",
		fit: "A small holding that wants fleeces, lawn-scale grazing, and sheep you can still lift.",
		watch: "Horns and small bones change handling. They are not a commercial lamb crop. Copper rules still apply — small sheep, same mineral.",
		traits: {
			hardiness: 5,
			lambs: 2,
			fiber: 4,
			calm: 3,
			ease: 4
		}
	},
	{
		id: "east-friesian",
		name: "East Friesian",
		origin: "Friesland, northern Europe",
		purposes: ["dairy"],
		beginner: false,
		smallAcreage: true,
		climate: "A barn-and-parlor sheep. Weather is manageable; nutrition is not optional.",
		size: "Ewes often 150–200 lb",
		summary: "The high-milk dairy breed, with a pink nose and a long thin tail. One ewe can milk seriously — if she is fed, milked, and kept healthy like a dairy animal.",
		fit: "Someone ready for a milking routine, mastitis checks, and a milk-room habit.",
		watch: "Dairy sheep fail quietly when treated like a pet wether on rough grass. High producers also need parasite control you can defend.",
		traits: {
			hardiness: 2,
			lambs: 4,
			fiber: 2,
			calm: 4,
			ease: 1
		}
	},
	{
		id: "jacob",
		name: "Jacob",
		origin: "England; a piebald park sheep of older type",
		purposes: ["wool", "meat"],
		beginner: true,
		smallAcreage: true,
		climate: "Temperate. The spotted fleece shows every burr, which is a feature until it isn’t.",
		size: "Ewes often 80–120 lb",
		summary: "Spotted, often multi-horned, and sized for a small farm. The fleece is a handspinner’s sheep: distinct colors in one clip.",
		fit: "Hobby flocks that like a striking sheep and a usable, small carcass.",
		watch: "Four horns can tangle in feeders and fences. Ask about temperament — some bloodlines are calm, some are not.",
		traits: {
			hardiness: 4,
			lambs: 3,
			fiber: 3,
			calm: 3,
			ease: 3
		}
	}
];
function filterBreeds(filter) {
	if (filter === "all") return BREEDS;
	if (filter === "beginner") return BREEDS.filter((breed) => breed.beginner);
	if (filter === "small") return BREEDS.filter((breed) => breed.smallAcreage);
	return BREEDS.filter((breed) => breed.purposes.includes(filter));
}
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "beginner",
		label: "Easier start"
	},
	{
		id: "small",
		label: "Small acreage"
	},
	{
		id: "meat",
		label: "Meat"
	},
	{
		id: "wool",
		label: "Wool"
	},
	{
		id: "dairy",
		label: "Dairy"
	},
	{
		id: "hair",
		label: "Hair"
	}
];
var PURPOSE_LABEL = {
	meat: "Meat",
	wool: "Wool",
	dairy: "Dairy",
	hair: "Hair"
};
var TRAITS = [
	{
		key: "hardiness",
		label: "Hardiness"
	},
	{
		key: "lambs",
		label: "Lamb crop"
	},
	{
		key: "fiber",
		label: "Fiber"
	},
	{
		key: "calm",
		label: "Calm"
	},
	{
		key: "ease",
		label: "Low upkeep"
	}
];
function BreedsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const breeds = (0, import_react.useMemo)(() => filterBreeds(filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-sage-deep uppercase",
				children: "Breed book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-2xl font-display text-4xl sm:text-5xl",
				children: "Pick the sheep that fits the job."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Twelve common choices, scored for a small farm rather than a show ring. Scores are a reading aid — bloodlines inside a breed vary more than the name does."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex gap-2 overflow-x-auto pb-1",
				role: "radiogroup",
				"aria-label": "Filter breeds",
				children: FILTERS.map((item) => {
					const active = filter === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "radio",
						"aria-checked": active,
						onClick: () => setFilter(item.id),
						className: active ? "inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface" : "inline-flex h-11 shrink-0 items-center rounded-full bg-surface px-4 text-sm font-medium ring-1 ring-line",
						children: item.label
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted tabular-nums",
				children: [
					breeds.length,
					" ",
					breeds.length === 1 ? "breed" : "breeds"
				]
			}),
			breeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-2xl bg-surface px-5 py-8 ring-1 ring-line",
				children: [
					"Nothing in this short book matches.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-sage-deep underline",
						onClick: () => setFilter("all"),
						children: "Show all breeds"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: breeds.map((breed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-surface p-5 ring-1 ring-line sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: breed.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: breed.origin
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								breed.purposes.map((purpose) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-sage-soft px-2.5 py-1 text-xs font-medium text-sage-deep",
									children: PURPOSE_LABEL[purpose]
								}, purpose)),
								breed.beginner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-paper-deep px-2.5 py-1 text-xs font-medium",
									children: "Easier start"
								}) : null,
								breed.smallAcreage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-paper-deep px-2.5 py-1 text-xs font-medium",
									children: "Small acreage"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed",
							children: breed.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-5 grid gap-3",
							children: TRAITS.map((trait) => {
								const score = breed.traits[trait.key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[6.5rem_1fr_1.5rem] items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-muted",
											children: trait.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "flex gap-1",
											"aria-hidden": true,
											children: Array.from({ length: 5 }, (_, mark) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: mark < score ? "h-1.5 flex-1 rounded-full bg-sage" : "h-1.5 flex-1 rounded-full bg-paper-deep" }, mark))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "text-right text-sm tabular-nums text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "sr-only",
												children: [
													trait.label,
													" ",
													score,
													" of 5.",
													" "
												]
											}), score]
										})
									]
								}, trait.key);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Fits "
							}), breed.fit]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "Watch "
							}), breed.watch]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: breed.climate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: breed.size
						})
					]
				}, breed.id))
			})
		]
	});
}
//#endregion
export { BreedsPage as component };
