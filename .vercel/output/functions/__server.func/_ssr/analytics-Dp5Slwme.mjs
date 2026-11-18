import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as useMimi, m as formatNaira } from "./router-Cg2LEUbK.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-Dp5Slwme.js
var import_jsx_runtime = require_jsx_runtime();
function AdminAnalytics() {
	const orders = useMimi((s) => s.orders);
	const reservations = useMimi((s) => s.reservations);
	const items = useMimi((s) => s.items);
	const revenue = orders.reduce((s, o) => s + (o.status === "cancelled" ? 0 : o.total), 0);
	const aov = orders.length ? Math.round(revenue / orders.length) : 0;
	const counts = /* @__PURE__ */ new Map();
	for (const o of orders) for (const line of o.items) {
		const cur = counts.get(line.menuItemId) ?? {
			name: line.name,
			qty: 0
		};
		cur.qty += line.quantity;
		counts.set(line.menuItemId, cur);
	}
	const popular = [...counts.values()].sort((a, b) => b.qty - a.qty).slice(0, 6);
	const hours = Array.from({ length: 8 }, (_, i) => {
		const hour = 16 + i;
		return {
			hour: `${hour}:00`,
			orders: orders.filter((o) => new Date(o.createdAt).getHours() === hour).length
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-label text-brand",
			children: "The numbers"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "How the room is doing"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Revenue",
					value: formatNaira(revenue)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Orders",
					value: String(orders.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Average ticket",
					value: formatNaira(aov)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					label: "Reservations",
					value: String(reservations.length)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-2xl",
			children: "Peak ordering hours"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-64 border border-line bg-paper p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: hours,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "#E8DFD4",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "hour",
							tick: {
								fontSize: 12,
								fill: "#6B645C"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fontSize: 12,
								fill: "#6B645C"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { cursor: { fill: "#F4EBE3" } }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "orders",
							fill: "#D71920",
							radius: 0
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-2xl",
			children: "Popular dishes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 divide-y divide-line border-y border-line",
			children: popular.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-3 font-display text-xl text-brand",
					children: String(i + 1).padStart(2, "0")
				}), p.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-muted",
					children: [p.qty, " sold"]
				})]
			}, p.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted",
			children: [items.filter((i) => i.available).length, " dishes on tonight."]
		})
	] });
}
function Tile({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream px-5 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-label text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-3xl tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { AdminAnalytics as component };
