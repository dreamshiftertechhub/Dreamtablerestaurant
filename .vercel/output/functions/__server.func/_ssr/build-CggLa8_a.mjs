import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as useUi, F as PLATE_PROTEINS, I as PLATE_SAUCES, P as PLATE_BASES, T as useMimi, V as cn, _ as Button, k as EXTRAS, m as formatNaira, x as extraCost } from "./router-Cg2LEUbK.mjs";
import { t as SiteShell } from "./site-shell-7aEV2_ZE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/build-CggLa8_a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BuildPage() {
	const [base, setBase] = (0, import_react.useState)("jollof");
	const [protein, setProtein] = (0, import_react.useState)("chicken");
	const [sauce, setSauce] = (0, import_react.useState)("signature");
	const [extras, setExtras] = (0, import_react.useState)([]);
	const add = useMimi((s) => s.addToCart);
	const setCart = useUi((s) => s.setCartOpen);
	const baseP = PLATE_BASES.find((b) => b.id === base);
	const protP = PLATE_PROTEINS.find((p) => p.id === protein);
	const sauceL = PLATE_SAUCES.find((s) => s.id === sauce);
	const total = baseP.price + protP.price + extraCost(extras);
	function toggle(id) {
		setExtras((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-24 md:grid-cols-12 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-label text-brand",
					children: "Build your plate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "Four decisions. One plate."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "01",
					title: "Choose your base",
					children: PLATE_BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: base === b.id,
						onClick: () => setBase(b.id),
						label: `${b.label} · ${formatNaira(b.price)}`
					}, b.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "02",
					title: "Choose your protein",
					children: PLATE_PROTEINS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: protein === p.id,
						onClick: () => setProtein(p.id),
						label: `${p.label} · ${formatNaira(p.price)}`
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "03",
					title: "Choose your sauce",
					children: PLATE_SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: sauce === s.id,
						onClick: () => setSauce(s.id),
						label: s.label
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "04",
					title: "Choose extras",
					children: EXTRAS.filter((e) => e.id !== "extra-sauce").map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						on: extras.includes(e.id),
						onClick: () => toggle(e.id),
						label: `${e.label} · ${formatNaira(e.price)}`
					}, e.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "md:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-24 border border-line bg-paper p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-label text-muted",
						children: "Your plate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-3xl",
						children: [
							baseP.label,
							" · ",
							protP.label
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: baseP.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatNaira(baseP.price)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: protP.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatNaira(protP.price)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sauceL.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: "Included"
								})]
							}),
							extras.map((id) => {
								const e = EXTRAS.find((x) => x.id === id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: formatNaira(e.price)
									})]
								}, id);
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 flex items-end justify-between border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] tracking-label",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl tabular-nums",
							children: formatNaira(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-6 w-full",
						onClick: () => {
							add({
								menuItemId: `plate-${base}-${protein}`,
								name: `Your plate · ${baseP.label} & ${protP.label}`,
								image: base === "pasta" ? "/food/pasta.jpg" : "/food/jollof.jpg",
								unitPrice: total,
								quantity: 1,
								protein,
								extras,
								customLabel: sauceL.label
							});
							toast("Added to your order.");
							setCart(true);
						},
						children: "Build my plate"
					})
				]
			})
		})]
	}) });
}
function Step({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "font-display text-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-brand",
					children: n
				}),
				" ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children
		})]
	});
}
function Chip({ on, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: cn("h-12 px-4 text-[11px] font-semibold tracking-label border", on ? "border-ink bg-ink text-cream" : "border-line bg-paper hover:border-ink"),
		children: label
	});
}
//#endregion
export { BuildPage as component };
