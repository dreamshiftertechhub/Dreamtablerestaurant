import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as useUi, H as cn, T as useMimi, _ as Button, m as formatNaira, p as formatDate, z as REWARDS } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loyalty-kUmhvFR6.js
var import_jsx_runtime = require_jsx_runtime();
var PLANS = [{
	id: "table",
	name: "Table",
	price: 4500,
	copy: "Double points. Birthday dessert. Skip the Friday queue."
}, {
	id: "host",
	name: "Host",
	price: 15e3,
	copy: "Everything in Table, plus 10% off catering and a held booth."
}];
var GIFTS = [
	5e3,
	1e4,
	25e3
];
function LoyaltyPage() {
	const points = useMimi((s) => s.points);
	const history = useMimi((s) => s.loyaltyHistory);
	const redeem = useMimi((s) => s.redeemReward);
	const membership = useMimi((s) => s.membership);
	const subscribe = useMimi((s) => s.subscribe);
	const buyGift = useMimi((s) => s.buyGiftCard);
	const setCart = useUi((s) => s.setCartOpen);
	const toNext = Math.max(0, 1500 - points);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 pb-16 pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-navy",
				children: "Loyalty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-brand text-5xl tracking-tight text-ink md:text-6xl",
				children: "Dream Table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[11px] font-semibold tracking-[0.42em] text-brand",
				children: "THE CIRCLE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-display text-7xl tabular-nums",
				children: points.toLocaleString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: membership !== "none" ? `You're on ${membership === "host" ? "Host" : "Table"}.` : toNext === 0 ? "A free side is already yours." : `You are ${toNext.toLocaleString()} points away from a free side.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "Subscribe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-lg text-sm text-muted",
				children: "A monthly seat at the house. Cancel any time from your account."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						subscribe(p.id);
						toast(`Welcome to ${p.name}.`);
					},
					className: cn("border p-6 text-left", membership === p.id ? "border-ink bg-paper" : "border-line hover:border-ink"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm font-semibold tabular-nums",
							children: [formatNaira(p.price), " / month"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: p.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[11px] tracking-label",
							children: membership === p.id ? "Your plan" : "Join"
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "Gift cards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Credit lands on the next order."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: GIFTS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						buyGift(n);
						toast(`${formatNaira(n)} gift card added as credit.`);
					},
					children: formatNaira(n)
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "Rewards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: REWARDS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-4 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: r.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [r.points.toLocaleString(), " points"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						disabled: points < r.points,
						onClick: () => {
							const err = redeem(r.id);
							if (err) toast(err);
							else {
								toast(`${r.label} added.`);
								if (r.id !== "discount") setCart(true);
							}
						},
						children: "Redeem"
					})]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "History"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3 text-sm",
				children: history.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between border-b border-line py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [h.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-muted",
						children: formatDate(h.at)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [h.points > 0 ? "+" : "", h.points]
					})]
				}, h.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/account",
					children: "Back to account"
				})
			})
		]
	}) });
}
//#endregion
export { LoyaltyPage as component };
