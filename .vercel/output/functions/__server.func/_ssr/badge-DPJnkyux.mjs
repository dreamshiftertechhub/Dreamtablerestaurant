import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { V as cn } from "./router-Cg2LEUbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DPJnkyux.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center tracking-label text-[10px] font-semibold px-2 py-1", {
	variants: { variant: {
		default: "bg-ink text-cream",
		brand: "bg-brand text-white",
		navy: "bg-navy text-white",
		outline: "border border-line text-muted",
		cream: "bg-surface text-ink",
		ok: "bg-ok/10 text-ok",
		warn: "bg-warn/10 text-warn"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
