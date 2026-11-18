import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as CATEGORIES, E as useUi, O as CATEGORY_LABELS, T as useMimi, V as cn, g as Input } from "./router-Cg2LEUbK.mjs";
import { t as FoodCard } from "./food-card-Bt1V0zwG.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DXfW1NoA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-experience-CVTqpA1w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY_FILTERS = {
	query: "",
	category: "all",
	sort: "popular",
	popular: false,
	spicy: false,
	vegetarian: false
};
function MenuFilters({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: value.query,
				onChange: (e) => onChange({
					...value,
					query: e.target.value
				}),
				placeholder: "Search the kitchen…",
				"aria-label": "Search menu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto no-scrollbar pb-1",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange({
						...value,
						category: c
					}),
					className: cn("h-10 shrink-0 px-4 text-[11px] font-semibold tracking-label border", value.category === c ? "border-ink bg-ink text-cream" : "border-line bg-transparent text-ink hover:border-ink"),
					children: CATEGORY_LABELS[c]
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: value.popular,
						onClick: () => onChange({
							...value,
							popular: !value.popular
						}),
						label: "Popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: value.spicy,
						onClick: () => onChange({
							...value,
							spicy: !value.spicy
						}),
						label: "Spicy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						on: value.vegetarian,
						onClick: () => onChange({
							...value,
							vegetarian: !value.vegetarian
						}),
						label: "Vegetarian"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto w-44",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: value.sort,
							onValueChange: (v) => onChange({
								...value,
								sort: v
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"aria-label": "Sort",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "popular",
									children: "Popular first"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "price-asc",
									children: "Price · low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "price-desc",
									children: "Price · high"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "name",
									children: "Name"
								})
							] })]
						})
					})
				]
			})
		]
	});
}
function Toggle({ on, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: cn("h-10 px-4 text-[11px] font-semibold tracking-label border", on ? "border-brand bg-brand text-white" : "border-line text-ink"),
		children: label
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse bg-surface", className),
		...props
	});
}
function filterMenu(items, f) {
	let list = items.filter((item) => {
		if (f.category !== "all" && item.category !== f.category) return false;
		if (f.popular && !item.popular) return false;
		if (f.spicy && item.spice < 2) return false;
		if (f.vegetarian && !item.vegetarian) return false;
		if (f.query.trim()) {
			const q = f.query.toLowerCase();
			if (!`${item.name} ${item.description} ${item.ingredients.join(" ")}`.toLowerCase().includes(q)) return false;
		}
		return true;
	});
	list = [...list].sort((a, b) => {
		if (f.sort === "price-asc") return a.price - b.price;
		if (f.sort === "price-desc") return b.price - a.price;
		if (f.sort === "name") return a.name.localeCompare(b.name);
		const pop = Number(b.popular) - Number(a.popular);
		if (pop) return pop;
		return (a.signature ?? 99) - (b.signature ?? 99);
	});
	return list;
}
function MenuExperience({ kicker, title }) {
	const items = useMimi((s) => s.items);
	const hydrated = useMimi((s) => s.hydrated);
	const [filters, setFilters] = (0, import_react.useState)(EMPTY_FILTERS);
	const results = (0, import_react.useMemo)(() => filterMenu(items, filters), [items, filters]);
	const open = useUi((s) => s.openFood);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pb-16 pt-24 md:px-8 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-label text-brand",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl md:text-6xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuFilters, {
					value: filters,
					onChange: setFilters
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [results.length, " dishes"]
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[4/3] w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-6 w-2/3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-full" })
				] }, i))
			}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Nothing matched that craving."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Try our Signature Jollof."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-6 text-sm font-semibold text-brand",
						onClick: () => open("signature-jollof"),
						children: "Open Signature Jollof"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
				children: results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, { item }, item.id))
			})
		]
	});
}
//#endregion
export { MenuExperience as t };
