import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { V as cn } from "./router-Cg2LEUbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-BdXbkEur.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className, size = "nav", onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/mark.png",
			alt: "",
			className: cn("w-auto object-contain object-left", size === "nav" && "h-8 md:h-11", size === "footer" && "h-14", size === "lg" && "h-20")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col items-start leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-brand tracking-tight", size === "nav" && "text-lg md:text-[1.5rem]", size === "footer" && "text-3xl", size === "lg" && "text-4xl", onDark ? "text-white" : "text-ink"),
				children: "DreamTable"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("hidden font-sans font-semibold tracking-[0.38em] text-[0.55rem] sm:block", onDark ? "text-white/70" : "text-muted", size === "nav" && "mt-0.5", size === "footer" && "mt-1 text-[0.65rem]"),
				children: "RESTAURANT"
			})]
		})]
	});
}
//#endregion
export { Logo as t };
