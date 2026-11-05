import { b as Link, q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as readMinutes, i as headingId, n as chapterIndex, r as getChapter, t as CHAPTERS } from "./content-BBE6pLtw.mjs";
import { n as TriangleAlert, o as ChevronRight, r as NotebookPen, s as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CiujCTLS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide._slug-B3WRFSBf.js
var import_jsx_runtime = require_jsx_runtime();
function Blocks({ blocks }) {
	let heading = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: blocks.map((block, index) => {
			if (block.type === "h") {
				heading += 1;
				const id = headingId(block.text, heading);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id,
					className: "pt-4 font-display text-3xl text-ink sm:text-4xl",
					children: block.text
				}, id);
			}
			if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-relaxed text-ink",
				children: block.text
			}, index);
			if (block.type === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink",
				children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}, index);
			if (block.type === "callout") {
				const caution = block.callout.tone === "caution";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: caution ? "rounded-2xl bg-clay-soft px-5 py-4 text-ink" : "rounded-2xl bg-sage-soft px-5 py-4 text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-medium",
						children: [caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							className: "size-4 shrink-0 text-clay-deep",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, {
							className: "size-4 shrink-0 text-sage-deep",
							"aria-hidden": true
						}), block.callout.title]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-ink",
						children: block.callout.body
					})]
				}, index);
			}
			if (block.type === "stats") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface px-4 py-4 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-sage-deep tabular-nums",
							children: item.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium",
							children: item.label
						}),
						item.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.hint
						}) : null
					]
				}, item.label))
			}, index);
			if (block.type === "table") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-2xl bg-surface ring-1 ring-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "px-4 pt-4 pb-2 text-left text-sm text-muted",
							children: block.caption
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-line",
							children: block.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: header
							}, header))
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b border-line last:border-0",
							children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top leading-snug",
								children: cell
							}, cellIndex))
						}, row[0])) })
					]
				})
			}, index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "divide-y divide-line rounded-2xl bg-surface ring-1 ring-line",
				children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-medium",
						children: item.term
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted",
						children: item.meaning
					})]
				}, item.term))
			}, index);
		})
	});
}
function ChapterView({ chapter }) {
	const index = chapterIndex(chapter.slug);
	const previous = index > 0 ? CHAPTERS[index - 1] : void 0;
	const next = index >= 0 && index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : void 0;
	const minutes = readMinutes(chapter);
	const headings = chapter.blocks.flatMap((block, blockIndex) => {
		if (block.type !== "h") return [];
		const count = chapter.blocks.slice(0, blockIndex + 1).filter((item) => item.type === "h").length;
		return [{
			id: headingId(block.text, count),
			text: block.text
		}];
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-4 lg:hidden",
			"aria-label": "Chapters",
			children: CHAPTERS.map((item) => {
				const active = item.slug === chapter.slug;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/guide/$slug",
					params: { slug: item.slug },
					"aria-current": active ? "page" : void 0,
					className: active ? "inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-medium text-surface" : "inline-flex h-11 shrink-0 items-center rounded-full bg-surface px-4 text-sm font-medium ring-1 ring-line",
					children: item.short
				}, item.slug);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "sticky top-24",
					"aria-label": "Chapters",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Chapters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: CHAPTERS.map((item) => {
							const active = item.slug === chapter.slug;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/guide/$slug",
								params: { slug: item.slug },
								"aria-current": active ? "page" : void 0,
								className: active ? "flex h-11 items-center rounded-xl bg-ink px-3 text-sm font-medium text-surface" : "flex h-11 items-center rounded-xl px-3 text-sm text-ink hover:bg-paper-deep",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: active ? "mr-2 tabular-nums text-wool" : "mr-2 tabular-nums text-muted",
									children: item.number
								}), item.short]
							}) }, item.slug);
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium tracking-widest text-sage-deep uppercase",
						children: [
							"Chapter ",
							chapter.number,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									" · ",
									minutes,
									" min read"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl",
						children: chapter.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg text-muted",
						children: chapter.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: chapter.image,
						alt: chapter.imageAlt,
						className: "mt-8 aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1]"
					}),
					headings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-8",
						"aria-label": "On this page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-muted uppercase",
							children: "On this page"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: headings.map((heading) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${heading.id}`,
								className: "inline-flex min-h-11 items-center rounded-full bg-surface px-3 text-sm ring-1 ring-line hover:bg-paper-deep",
								children: heading.text
							}) }, heading.id))
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: chapter.blocks })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2",
						children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guide/$slug",
							params: { slug: previous.slug },
							className: "flex min-h-20 items-center gap-3 rounded-2xl bg-surface px-4 py-4 ring-1 ring-line hover:bg-paper-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								"aria-hidden": true,
								className: "shrink-0 text-muted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-widest text-muted uppercase",
								children: "Previous"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: previous.title
							})] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guide/$slug",
							params: { slug: next.slug },
							className: "flex min-h-20 items-center justify-end gap-3 rounded-2xl bg-surface px-4 py-4 text-right ring-1 ring-line hover:bg-paper-deep sm:col-start-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-widest text-muted uppercase",
								children: "Next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: next.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								"aria-hidden": true,
								className: "shrink-0 text-muted"
							})]
						}) : null]
					})
				]
			})]
		})]
	});
}
function GuideChapter() {
	const { slug } = Route.useParams();
	const chapter = getChapter(slug);
	if (!chapter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: "Missing chapter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "That page isn’t in the book."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "The guide has eight chapters. This address isn’t one of them."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn btn-primary mt-8",
				children: "Back to the guide"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterView, { chapter });
}
//#endregion
export { GuideChapter as component };
