import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Heart, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as useUi, T as useMimi, V as cn, a as SpiceDots, m as formatNaira } from "./router-Cg2LEUbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/food-card-Bt1V0zwG.js
var import_jsx_runtime = require_jsx_runtime();
function FoodCard({ item, index, layout = "grid" }) {
	const fav = useMimi((s) => s.favouriteIds.includes(item.id));
	const toggle = useMimi((s) => s.toggleFavourite);
	const open = useUi((s) => s.openFood);
	const add = useMimi((s) => s.addToCart);
	const setCart = useUi((s) => s.setCartOpen);
	const sold = !item.available;
	const protein = starterProtein(item);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col bg-transparent text-left", layout === "rail" && "w-[78vw] shrink-0 snap-start sm:w-80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => open(item.id),
			className: "relative block overflow-hidden bg-surface",
			"aria-label": `View ${item.name}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: cn("aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105", sold && "opacity-60")
				}),
				item.signature ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 font-display text-2xl text-white drop-shadow",
					children: String(item.signature).padStart(2, "0")
				}) : index != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 text-[11px] font-semibold tracking-label text-white/80",
					children: String(index + 1).padStart(2, "0")
				}) : null,
				sold && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-x-0 bottom-0 bg-ink/70 py-2 text-center text-[11px] tracking-label text-white",
					children: "Sold out tonight"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-tight text-ink",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-sm text-muted",
						children: item.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tabular-nums",
							children: formatNaira(item.price)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceDots, { level: item.spice })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": fav ? "Remove from favourites" : "Save to favourites",
					"aria-pressed": fav,
					onClick: () => toggle(item.id),
					className: "grid size-11 place-items-center text-ink hover:text-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", fav && "fill-brand text-brand") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: sold,
					"aria-label": `Add ${item.name} to cart`,
					onClick: () => {
						add({
							menuItemId: item.id,
							name: item.name,
							image: item.image,
							unitPrice: item.price,
							quantity: 1,
							extras: [],
							protein
						});
						toast(`${item.name} added. Open the dish if you want to change it.`);
						setCart(true);
					},
					className: "grid size-11 place-items-center bg-brand text-white transition-opacity hover:bg-brand-dark disabled:opacity-30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})]
			})]
		})]
	});
}
function starterProtein(item) {
	if (!item.customizable) return void 0;
	const name = item.name.toLowerCase();
	if (name.includes("seafood") || name.includes("prawn")) return "prawns";
	if (name.includes("fish") || name.includes("tilapia")) return "fish";
	if (name.includes("beef") || name.includes("suya") || name.includes("asun") || name.includes("goat")) return "beef";
	return "chicken";
}
//#endregion
export { FoodCard as t };
