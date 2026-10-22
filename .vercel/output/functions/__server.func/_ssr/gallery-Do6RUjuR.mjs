import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Do6RUjuR.js
var import_jsx_runtime = require_jsx_runtime();
var SHOTS = [
	{
		src: "/food/jollof.jpg",
		alt: "Signature jollof and grilled chicken",
		span: "md:col-span-7"
	},
	{
		src: "/food/suya-fries.jpg",
		alt: "Suya loaded fries",
		span: "md:col-span-5"
	},
	{
		src: "/food/chicken.jpg",
		alt: "Fire-grilled chicken",
		span: "md:col-span-5"
	},
	{
		src: "/food/pasta.jpg",
		alt: "Creamy chicken pasta",
		span: "md:col-span-7"
	},
	{
		src: "/food/seafood.jpg",
		alt: "Seafood pepper rice",
		span: "md:col-span-4"
	},
	{
		src: "/food/ofada.jpg",
		alt: "Ofada rice",
		span: "md:col-span-4"
	},
	{
		src: "/food/chocolate.jpg",
		alt: "Chocolate indulgence",
		span: "md:col-span-4"
	},
	{
		src: "/food/burger.jpg",
		alt: "DreamTable beef burger",
		span: "md:col-span-6"
	},
	{
		src: "/food/hero.jpg",
		alt: "The table",
		span: "md:col-span-6"
	}
];
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pb-16 pt-24 md:px-8 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "The table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-2xl font-display text-5xl md:text-6xl",
				children: "What the room looks like."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-12",
				children: SHOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.src,
					alt: s.alt,
					className: `aspect-[4/3] w-full object-cover ${s.span}`
				}, s.src))
			})
		]
	}) });
}
//#endregion
export { GalleryPage as component };
