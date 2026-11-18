import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { S as lineTotal, T as useMimi, _ as Button, m as formatNaira, r as Route$3 } from "./router-Cg2LEUbK.mjs";
import { t as SiteShell } from "./site-shell-7aEV2_ZE.mjs";
import { t as TransferDetails } from "./transfer-details-CNz34oQV.mjs";
import { t as TrackingTimeline } from "./timeline-CgK8bdiN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmation._orderId-CTcWUY1t.js
var import_jsx_runtime = require_jsx_runtime();
function ConfirmationPage() {
	const { orderId } = Route$3.useParams();
	const hydrated = useMimi((s) => s.hydrated);
	const order = useMimi((s) => s.orders.find((o) => o.id === orderId));
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-lg px-4 py-32 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Plating your receipt…"
		})
	}) });
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "We can't find that order."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/track",
				children: "Track another"
			})
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 pt-24 md:px-8 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: ["Order #", order.id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl leading-tight md:text-7xl",
				children: order.fulfillment === "pickup" ? "We'll see you soon." : "Your food is on the way."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					"Estimated ",
					order.fulfillment === "pickup" ? "ready in" : "arrival",
					" ",
					order.etaMinutes,
					" minutes."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackingTimeline, {
					status: order.status,
					fulfillment: order.fulfillment
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm",
						children: order.items.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								l.quantity,
								"× ",
								l.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatNaira(lineTotal(l))
							})]
						}, l.lineId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex justify-between font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatNaira(order.total)
						})]
					}),
					order.payment === "transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransferDetails, { total: order.total })
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/track/$orderId",
						params: { orderId: order.id },
						children: "Track order"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						children: "Continue shopping"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { ConfirmationPage as component };
