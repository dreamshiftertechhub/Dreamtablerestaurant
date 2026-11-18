import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as OCCASIONS, T as useMimi, _ as Button } from "./router-Cg2LEUbK.mjs";
import { t as Badge } from "./badge-DPJnkyux.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-kzKlVQYN.js
var import_jsx_runtime = require_jsx_runtime();
function AdminReservations() {
	const list = useMimi((s) => s.reservations);
	const update = useMimi((s) => s.updateReservation);
	const today = "2026-10-02";
	const todays = list.filter((r) => r.date === today);
	const upcoming = list.filter((r) => r.date > today);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-label text-brand",
			children: "The book"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Reservations"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			title: "Today",
			rows: todays,
			update
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			title: "Upcoming",
			rows: upcoming,
			update
		})
	] });
}
function Block({ title, rows, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: title
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Quiet book."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-line border-y border-line",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-center justify-between gap-3 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium",
					children: [
						r.name,
						" · ",
						r.guests,
						" covers"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						r.date,
						" ",
						r.time,
						" · ",
						OCCASIONS.find((o) => o.id === r.occasion)?.label,
						" · #",
						r.id
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: r.status === "confirmed" ? "ok" : r.status === "pending" ? "warn" : "outline",
							children: r.status
						}),
						r.status !== "confirmed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => update(r.id, "confirmed"),
							children: "Confirm"
						}),
						r.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => update(r.id, "cancelled"),
							children: "Cancel"
						}),
						r.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => update(r.id, "completed"),
							children: "Complete"
						})
					]
				})]
			}, r.id))
		})]
	});
}
//#endregion
export { AdminReservations as component };
