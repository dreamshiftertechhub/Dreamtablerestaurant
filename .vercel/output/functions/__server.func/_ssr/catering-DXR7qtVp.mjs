import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { H as cn, _ as Button, g as Input, m as formatNaira, o as Textarea, s as Label } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catering-DXR7qtVp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EVENTS = [
	{
		id: "wedding",
		label: "Wedding & traditional"
	},
	{
		id: "corporate",
		label: "Corporate lunch"
	},
	{
		id: "birthday",
		label: "Birthday"
	},
	{
		id: "home",
		label: "Private chef at home"
	},
	{
		id: "room",
		label: "Private dining room"
	}
];
var SERVICES = [
	{
		id: "drop",
		label: "Drop-off"
	},
	{
		id: "staffed",
		label: "Staffed service"
	},
	{
		id: "live",
		label: "Live jollof & suya station"
	}
];
var PACKAGES = [
	{
		name: "The Street",
		guests: "20–40",
		price: 185e3,
		copy: "Jollof, grilled chicken, plantain, Chapman. Delivered hot."
	},
	{
		name: "The House",
		guests: "At your address",
		price: 24e4,
		copy: "A chef, two cooks, and a full service in your kitchen."
	},
	{
		name: "The Table",
		guests: "40–80",
		price: 42e4,
		copy: "Full spread, carving station, dessert, and a floor captain."
	},
	{
		name: "The Night",
		guests: "Private room · 12",
		price: 95e3,
		copy: "Upstairs at Victoria Island. A set menu. Yours until close."
	}
];
function CateringPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [event, setEvent] = (0, import_react.useState)("birthday");
	const [service, setService] = (0, import_react.useState)("staffed");
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Events desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "We'll call you today."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "The events desk has your note. Keep your phone close — quotes go out the same afternoon."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				onClick: () => setSent(false),
				children: "Plan another"
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 md:grid-cols-12 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Cook for an event"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "We bring the kitchen to you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Weddings, board lunches, birthdays, naming ceremonies. Drop-off, staffed service, or a live suya station."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-6",
					children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line pb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									p.guests,
									" · from ",
									formatNaira(p.price)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: p.copy
							})
						]
					}, p.name))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5 md:col-span-7",
			onSubmit: (e) => {
				e.preventDefault();
				toast("Request sent to the events desk.");
				setSent(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mb-2 block",
					children: "What are we cooking for?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: EVENTS.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setEvent(ev.id),
						className: cn("h-10 border px-3 text-[11px] font-semibold tracking-label", event === ev.id ? "border-ink bg-ink text-cream" : "border-line bg-paper"),
						children: ev.label
					}, ev.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mb-2 block",
					children: "How should we serve?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setService(s.id),
						className: cn("h-10 border px-3 text-[11px] font-semibold tracking-label", service === s.id ? "border-ink bg-ink text-cream" : "border-line bg-paper"),
						children: s.label
					}, s.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						id: "c-name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "c-name",
							required: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						id: "c-phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "c-phone",
							type: "tel",
							required: true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					id: "c-email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-email",
						type: "email",
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Venue or address",
					id: "c-venue",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-venue",
						placeholder: "Lekki, VI, or the private room upstairs",
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date",
						id: "c-date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "c-date",
							type: "date",
							required: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Guests",
						id: "c-guests",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "c-guests",
							type: "number",
							min: 8,
							defaultValue: 24,
							required: true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Notes",
					id: "c-note",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "c-note",
						placeholder: "No pork. Extra plantain. Speeches at 8."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					children: "Request a quote"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Prefer WhatsApp?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-brand",
							href: "https://wa.me/2342013301840?text=I%20want%20DreamTable%20to%20cook%20for%20an%20event",
							children: "Message the events desk"
						})
					]
				})
			]
		})]
	}) });
}
function Field({ label, id, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), children]
	});
}
//#endregion
export { CateringPage as component };
