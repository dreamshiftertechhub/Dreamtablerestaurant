import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { L as RESTAURANT_ADDRESS, R as RESTAURANT_PHONE, _ as Button, g as Input, j as KITCHEN_CLOSES, o as Textarea, s as Label } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-rddfHfe_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 md:grid-cols-12 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Visit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Come through."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg",
					children: RESTAURANT_ADDRESS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-brand",
						href: `tel:${RESTAURANT_PHONE.replace(/\s/g, "")}`,
						children: RESTAURANT_PHONE
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "hello@dreamtable.ng"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/2342013301840",
						className: "inline-flex h-11 items-center bg-brand px-5 text-[11px] font-semibold tracking-label text-white",
						children: "WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.google.com/maps/search/?api=1&query=14+Adeola+Odeku+Street+Victoria+Island+Lagos",
						className: "inline-flex h-11 items-center border border-ink px-5 text-[11px] font-semibold tracking-label",
						children: "Directions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Lunch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "11:30 AM – 3:30 PM" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Dinner"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["5:00 PM – ", KITCHEN_CLOSES] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "VI, Ikoyi, Lekki" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Parking"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Street + Wings lot" })]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			className: "space-y-4 md:col-span-7",
			onSubmit: (e) => {
				e.preventDefault();
				toast("Message received. We'll write back.");
				setSent(true);
			},
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl",
				children: "We've got it."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "n",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "n",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "e",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "e",
							type: "email",
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "m",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "m",
						required: true,
						placeholder: "A table for Thursday. A question about suya."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					children: "Send"
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: "DreamTable on the map",
			className: "h-72 w-full border-0 grayscale",
			src: "https://www.openstreetmap.org/export/embed.html?bbox=3.415%2C6.422%2C3.435%2C6.436&layer=mapnik&marker=6.4284%2C3.4241"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "14 Adeola Odeku Street, Victoria Island."
		})]
	})] });
}
//#endregion
export { ContactPage as component };
