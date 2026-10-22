import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Button } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-6mW999X_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QUESTIONS = [
	{
		q: "Where do you deliver?",
		a: "Victoria Island, Ikoyi, and Lekki Phase 1. Orders over ₦25,000 travel free. Everywhere else is pickup on Adeola Odeku."
	},
	{
		q: "How spicy is the food?",
		a: "You set the heat when you customise a plate: mild, medium, hot, extra hot. Signature jollof lands at medium unless you say otherwise."
	},
	{
		q: "Can you cook for a wedding or office lunch?",
		a: "Yes. Drop-off, staffed service, or a live jollof and suya station. Tell the events desk the date and the headcount."
	},
	{
		q: "Do you have a private room?",
		a: "Twelve seats upstairs, reserved by the evening. Book it through catering, not the regular table form."
	},
	{
		q: "How do I track an order?",
		a: "Use the order number from your confirmation. The map shows the kitchen-to-door route. The rider position is a preview of the trip, not a live GPS feed."
	},
	{
		q: "Is there parking?",
		a: "Street parking on Adeola Odeku, plus the public lot behind the Wings complex, a three-minute walk."
	},
	{
		q: "Allergies?",
		a: "Tell us in the special instructions on the dish, or call the kitchen. Nuts sit in the suya spice. We can hold them back."
	},
	{
		q: "How do I reach the kitchen desk?",
		a: "The owner view lives at Kitchen desk. It is a working demo of orders, menu, reservations, and numbers."
	}
];
function FaqPage() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Before you arrive"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl md:text-6xl",
				children: "Questions."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 divide-y divide-line border-y border-line",
				children: QUESTIONS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-center justify-between gap-6 py-5 text-left",
					"aria-expanded": open === i,
					onClick: () => setOpen(open === i ? -1 : i),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: open === i ? "–" : "+"
					})]
				}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-5 text-sm leading-relaxed text-muted",
					children: item.a
				})] }, item.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catering",
						children: "Plan an event"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/2342013301840",
						children: "WhatsApp the house"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { FaqPage as component };
