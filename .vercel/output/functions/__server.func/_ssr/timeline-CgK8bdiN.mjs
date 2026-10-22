import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as cn } from "./router-B3gA6S6q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-CgK8bdiN.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: "confirmed",
		label: "Order confirmed"
	},
	{
		id: "preparing",
		label: "Kitchen preparing"
	},
	{
		id: "ready",
		label: "Ready"
	},
	{
		id: "out-for-delivery",
		label: "Rider picked up"
	},
	{
		id: "delivered",
		label: "Delivered"
	}
];
var FLOW = [
	"new",
	"confirmed",
	"preparing",
	"ready",
	"out-for-delivery",
	"delivered"
];
function TrackingTimeline({ status, fulfillment }) {
	const steps = fulfillment === "pickup" ? STEPS.filter((s) => s.id !== "out-for-delivery").map((s) => s.id === "delivered" ? {
		...s,
		label: "Picked up"
	} : s) : STEPS;
	const idx = FLOW.indexOf(status);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-0",
		children: steps.map((step, i) => {
			const stepIdx = FLOW.indexOf(step.id);
			const done = idx >= stepIdx && status !== "cancelled";
			const current = step.id === status || status === "new" && step.id === "confirmed";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-0.5 size-3 rounded-full", done ? "bg-brand" : "bg-line", current && "ring-4 ring-brand/20") }), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-px flex-1 min-h-8", done ? "bg-brand" : "bg-line") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("pb-8 text-sm", current ? "font-semibold text-ink" : done ? "text-ink" : "text-subtle"),
					children: step.label
				})]
			}, step.id);
		})
	});
}
//#endregion
export { TrackingTimeline as t };
