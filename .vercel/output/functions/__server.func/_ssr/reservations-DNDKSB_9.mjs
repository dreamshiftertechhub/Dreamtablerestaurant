import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as OCCASIONS, T as useMimi, V as cn, _ as Button, g as Input, o as Textarea, s as Label } from "./router-Cg2LEUbK.mjs";
import { t as SiteShell } from "./site-shell-7aEV2_ZE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-DNDKSB_9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReservationsPage() {
	const profile = useMimi((s) => s.profile);
	const add = useMimi((s) => s.addReservation);
	const [date, setDate] = (0, import_react.useState)("2026-10-16");
	const [time, setTime] = (0, import_react.useState)("19:30");
	const [guests, setGuests] = (0, import_react.useState)(4);
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [phone, setPhone] = (0, import_react.useState)(profile.phone);
	const [email, setEmail] = (0, import_react.useState)(profile.email);
	const [occasion, setOccasion] = (0, import_react.useState)("dinner");
	const [request, setRequest] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(null);
	if (done) {
		const pretty = (/* @__PURE__ */ new Date(`${done.date}T${done.time}`)).toLocaleString("en-NG", {
			weekday: "long",
			month: "long",
			day: "numeric"
		});
		const clock = (/* @__PURE__ */ new Date(`${done.date}T${done.time}`)).toLocaleTimeString("en-NG", {
			hour: "numeric",
			minute: "2-digit"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl px-4 py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: ["Reservation #", done.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Table confirmed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-lg",
					children: [
						pretty,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						clock,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						done.guests,
						" guests"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-10",
					onClick: () => setDone(null),
					children: "Make another"
				})
			]
		}) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 md:grid-cols-12 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Reservations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl md:text-6xl",
					children: "Your table is waiting."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "Dinner service from 5:00 PM. We hold the table for 15 minutes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/food/hero.jpg",
					alt: "",
					className: "mt-10 hidden aspect-[4/3] object-cover md:block"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4 md:col-span-6",
			onSubmit: (e) => {
				e.preventDefault();
				const r = add({
					date,
					time,
					guests,
					name,
					phone,
					email,
					occasion,
					request
				});
				setDone({
					id: r.id,
					date,
					time,
					guests
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "date",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "date",
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "time",
							children: "Time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "time",
							type: "time",
							value: time,
							onChange: (e) => setTime(e.target.value),
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "guests",
						children: "Number of guests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "guests",
						type: "number",
						min: 1,
						max: 16,
						value: guests,
						onChange: (e) => setGuests(Number(e.target.value)),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "rname",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "rname",
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "rphone",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "rphone",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "remail",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "remail",
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mb-2 block",
					children: "Occasion"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: OCCASIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOccasion(o.id),
						className: cn("h-10 px-3 text-[11px] font-semibold tracking-label border", occasion === o.id ? "border-ink bg-ink text-cream" : "border-line"),
						children: o.label
					}, o.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "req",
						children: "Special request"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "req",
						value: request,
						onChange: (e) => setRequest(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full",
					children: "Reserve table"
				})
			]
		})]
	}) });
}
//#endregion
export { ReservationsPage as component };
