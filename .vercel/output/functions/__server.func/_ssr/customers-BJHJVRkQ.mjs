import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as useMimi, m as formatNaira } from "./router-B3gA6S6q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customers-BJHJVRkQ.js
var import_jsx_runtime = require_jsx_runtime();
function AdminCustomers() {
	const orders = useMimi((s) => s.orders);
	const reservations = useMimi((s) => s.reservations);
	const map = /* @__PURE__ */ new Map();
	for (const o of orders) {
		const key = o.customer.phone || o.customer.name;
		const cur = map.get(key) ?? {
			name: o.customer.name,
			phone: o.customer.phone,
			orders: 0,
			spend: 0,
			reservations: 0
		};
		cur.orders += 1;
		cur.spend += o.total;
		map.set(key, cur);
	}
	for (const r of reservations) {
		const key = r.phone || r.name;
		const cur = map.get(key) ?? {
			name: r.name,
			phone: r.phone,
			orders: 0,
			spend: 0,
			reservations: 0
		};
		cur.reservations += 1;
		map.set(key, cur);
	}
	const guests = [...map.values()].sort((a, b) => b.spend - a.spend);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-label text-brand",
			children: "Front of house"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Guests"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[560px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[11px] tracking-label text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-semibold",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-semibold",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-semibold",
								children: "Orders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-semibold",
								children: "Spend"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-semibold",
								children: "Reservations"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: guests.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3",
							children: g.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3",
							children: g.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 tabular-nums",
							children: g.orders
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 tabular-nums",
							children: formatNaira(g.spend)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 tabular-nums",
							children: g.reservations
						})
					]
				}, g.phone)) })]
			})
		})
	] });
}
//#endregion
export { AdminCustomers as component };
