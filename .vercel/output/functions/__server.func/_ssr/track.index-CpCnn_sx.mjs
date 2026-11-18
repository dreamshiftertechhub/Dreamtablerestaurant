import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as useMimi, _ as Button, g as Input, s as Label } from "./router-Cg2LEUbK.mjs";
import { t as SiteShell } from "./site-shell-7aEV2_ZE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track.index-CpCnn_sx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackIndex() {
	const navigate = useNavigate();
	const latest = useMimi((s) => s.orders[0]?.id ?? "");
	const [id, setId] = (0, import_react.useState)(latest);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 pb-16 pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Tracking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "Where's my food?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-10 space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					navigate({
						to: "/track/$orderId",
						params: { orderId: id.replace("#", "").trim() }
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "oid",
						children: "Order number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "oid",
						value: id,
						onChange: (e) => setId(e.target.value),
						placeholder: "Your order number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						children: "Track order"
					})
				]
			})
		]
	}) });
}
//#endregion
export { TrackIndex as component };
