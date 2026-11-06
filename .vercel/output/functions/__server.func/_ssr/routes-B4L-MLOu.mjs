import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CHAPTERS } from "./content-1VZToBA3.mjs";
import { a as Library, c as CalendarDays, l as Calculator, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B4L-MLOu.js
var import_jsx_runtime = require_jsx_runtime();
var TOOLS = [
	{
		to: "/planner",
		title: "Flock planner",
		text: "Acres, winter hay, water, shelter, and a lambing window from a date.",
		image: "/images/hay.jpg",
		alt: "Sheep eating hay beside stacked bales.",
		icon: Calculator
	},
	{
		to: "/breeds",
		title: "Breed book",
		text: "Twelve breeds sorted by meat, wool, milk, hair, and how much fuss they are.",
		image: "/images/ewe.jpg",
		alt: "Portrait of a white-faced ewe.",
		icon: Library
	},
	{
		to: "/year",
		title: "The working year",
		text: "A seasonal checklist you can tick off. It stays on this device.",
		image: "/images/pasture.jpg",
		alt: "Sheep in a rotational pasture beside rested grass.",
		icon: CalendarDays
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/meadow.jpg",
						alt: "A small flock grazing a green meadow in late afternoon light.",
						className: "h-[32rem] w-full object-cover sm:h-[38rem]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-wool uppercase",
								children: "Field guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-xl font-display text-4xl text-surface sm:text-6xl",
								children: "Raise a flock you can actually see."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-base leading-relaxed text-surface sm:text-lg",
								children: "Breeds, fence, feed, worms, lambing, and wool — written as chores and numbers, not as a catalog."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/start",
									className: "btn btn-primary",
									children: "New to sheep? Start here"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/planner",
									className: "btn bg-surface text-ink hover:bg-paper-deep",
									children: "Size hay and acres"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Eight chapters, one working year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Read it straight through, or open the page you need when a ewe is due and the notebook is still in the house."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-ink italic lg:text-right",
					children: "Quiet sheep are made by fence, forage, and feet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 divide-y divide-line border-y border-line",
				children: CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/guide/$slug",
					params: { slug: chapter.slug },
					className: "group grid gap-2 py-5 sm:grid-cols-[4rem_minmax(0,16rem)_1fr_auto] sm:items-baseline sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl text-sage tabular-nums",
							children: chapter.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl group-hover:text-sage-deep",
							children: chapter.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: chapter.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "hidden size-5 text-muted sm:block",
							"aria-hidden": true
						})
					]
				}) }, chapter.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "Three tools beside the reading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: TOOLS.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: tool.to,
						className: "group overflow-hidden rounded-2xl bg-surface ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tool.image,
							alt: tool.alt,
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tool.icon, {
									className: "size-5 text-sage-deep",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl",
									children: tool.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: tool.text
								})
							]
						})]
					}, tool.to))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-sage px-5 py-6 text-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl tabular-nums",
							children: "147"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "Days from a known mating to the usual lambing date. Early is 142. Late is 152."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-ink px-5 py-6 text-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl",
							children: "1 : 30"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "A fit mature ram to about thirty ewes. Ram lambs cover fewer. Borrow one if you can."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-clay-deep px-5 py-6 text-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl",
							children: "No Cu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "Cattle or goat mineral can kill sheep. Use a mineral labeled for sheep only."
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
