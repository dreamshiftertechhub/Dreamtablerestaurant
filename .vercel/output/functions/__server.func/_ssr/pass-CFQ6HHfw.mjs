import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
import { t as PassBoard } from "./pass-board-C33d6R6S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pass-CFQ6HHfw.js
var import_jsx_runtime = require_jsx_runtime();
function PassPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Live from the kitchen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl md:text-6xl",
				children: "The pass"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-lg text-muted",
				children: "Whatever the kitchen just called. One tap and it's yours — the same plate, not a photo of yesterday's specials."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassBoard, {})
			})
		]
	}) });
}
//#endregion
export { PassPage as component };
