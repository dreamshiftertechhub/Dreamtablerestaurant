import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as Store, v as Bike } from "../_libs/lucide-react.mjs";
import { N as ORDER_STATUS_LABELS, T as useMimi, V as cn, _ as Button, g as Input, h as formatTime, m as formatNaira } from "./router-Cg2LEUbK.mjs";
import { o as listHouseOrders, p as setHouseOrderStatus } from "./house.functions-BuOthy0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-C5h1HkKJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLUMNS = [
	{
		id: "new",
		hint: "Just landed"
	},
	{
		id: "confirmed",
		hint: "Accepted"
	},
	{
		id: "preparing",
		hint: "On the fire"
	},
	{
		id: "ready",
		hint: "At the pass"
	},
	{
		id: "out-for-delivery",
		hint: "With the rider"
	},
	{
		id: "delivered",
		hint: "Closed"
	}
];
var FLOW = [
	"new",
	"confirmed",
	"preparing",
	"ready",
	"out-for-delivery",
	"delivered"
];
function nextStatus(order) {
	if (order.status === "cancelled" || order.status === "delivered") return null;
	if (order.status === "ready" && order.fulfillment === "pickup") return "delivered";
	return FLOW[FLOW.indexOf(order.status) + 1] ?? null;
}
function nextLabel(order) {
	const next = nextStatus(order);
	if (!next) return null;
	if (next === "confirmed") return "Accept";
	if (next === "preparing") return "Send to kitchen";
	if (next === "ready") return "Mark ready";
	if (next === "out-for-delivery") return "Send rider";
	if (next === "delivered" && order.fulfillment === "pickup") return "Handed over";
	if (next === "delivered") return "Mark delivered";
	return ORDER_STATUS_LABELS[next];
}
function age(iso, now) {
	const minutes = Math.max(0, Math.round((now - new Date(iso).getTime()) / 6e4));
	if (minutes < 1) return "just now";
	if (minutes < 60) return `${minutes}m`;
	return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
function AdminHome() {
	const local = useMimi((s) => s.orders);
	const update = useMimi((s) => s.updateOrderStatus);
	const [remote, setRemote] = (0, import_react.useState)([]);
	const [overrides, setOverrides] = (0, import_react.useState)({});
	const [query, setQuery] = (0, import_react.useState)("");
	const [lane, setLane] = (0, import_react.useState)("all");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		let live = true;
		async function load() {
			try {
				const rows = await listHouseOrders();
				if (live) setRemote(rows);
			} catch {}
		}
		load();
		const poll = window.setInterval(() => void load(), 8e3);
		const clock = window.setInterval(() => setNow(Date.now()), 3e4);
		return () => {
			live = false;
			window.clearInterval(poll);
			window.clearInterval(clock);
		};
	}, []);
	const orders = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const order of remote) map.set(order.id, order);
		for (const order of local) map.set(order.id, {
			...map.get(order.id),
			...order
		});
		return [...map.values()].map((order) => overrides[order.id] ? {
			...order,
			status: overrides[order.id]
		} : order).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
	}, [
		local,
		remote,
		overrides
	]);
	const visible = orders.filter((order) => {
		if (lane !== "all" && order.fulfillment !== lane) return false;
		return `${order.id} ${order.customer.name} ${order.customer.phone} ${order.items.map((i) => i.name).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	const open = visible.filter((order) => order.status !== "delivered" && order.status !== "cancelled");
	const sales = orders.filter((order) => order.status !== "cancelled").reduce((sum, order) => sum + order.total, 0);
	const selected = orders.find((order) => order.id === openId) ?? null;
	function move(order, status) {
		setOverrides((current) => ({
			...current,
			[order.id]: status
		}));
		update(order.id, status);
		setRemote((rows) => rows.map((row) => row.id === order.id ? {
			...row,
			status
		} : row));
		setHouseOrderStatus({ data: {
			id: order.id,
			status
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Kitchen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Order board"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted",
					children: "Every ticket from the floor, the website, and signed-in guests. Move it as the plate leaves the pass."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-muted",
				children: "Live · refreshes every few seconds"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Open tickets",
					value: String(open.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "On the road",
					value: String(orders.filter((o) => o.status === "out-for-delivery").length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Sales on the board",
					value: formatNaira(sales)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Cancelled",
					value: String(orders.filter((o) => o.status === "cancelled").length)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-col gap-3 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search name, phone, dish, or order",
				"aria-label": "Search orders",
				className: "md:max-w-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					["all", "All"],
					["delivery", "Delivery"],
					["pickup", "Pickup"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLane(id),
					className: cn("h-11 px-4 text-[11px] font-semibold tracking-label", lane === id ? "bg-ink text-cream" : "bg-white text-ink"),
					children: label
				}, id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex gap-4 overflow-x-auto pb-4",
			children: COLUMNS.map((column) => {
				const tickets = visible.filter((order) => order.status === column.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "w-72 shrink-0 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between border-b border-line px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-medium",
							children: ORDER_STATUS_LABELS[column.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: column.hint
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tabular-nums",
							children: tickets.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 p-3",
						children: [tickets.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-1 py-6 text-sm text-muted",
							children: "Nothing here."
						}), tickets.map((order) => {
							const action = nextLabel(order);
							const next = nextStatus(order);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("border border-line p-3", openId === order.id && "border-brand"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "w-full text-left",
									onClick: () => setOpenId(order.id),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-semibold tracking-label",
												children: order.id
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted",
												children: age(order.createdAt, now)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-medium",
											children: order.customer.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 flex items-center gap-1 text-xs text-muted",
											children: [
												order.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-3.5" }),
												order.fulfillment === "delivery" ? "Delivery" : "Pickup",
												" · ",
												formatNaira(order.total)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-2 text-sm text-muted",
											children: order.items.map((item) => `${item.quantity}× ${item.name}`).join(", ")
										})
									]
								}), action && next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-3 w-full",
									size: "sm",
									onClick: () => move(order, next),
									children: action
								})]
							}, order.id);
						})]
					})]
				}, column.id);
			})
		}),
		visible.some((order) => order.status === "cancelled") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [visible.filter((order) => order.status === "cancelled").length, " cancelled — hidden from the live columns."]
		}),
		selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mt-8 border border-line bg-white p-5 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-label text-brand",
							children: ORDER_STATUS_LABELS[selected.status]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: selected.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								"Placed ",
								formatTime(selected.createdAt),
								" · ",
								age(selected.createdAt, now),
								" ago"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [nextStatus(selected) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => move(selected, nextStatus(selected)),
							children: nextLabel(selected)
						}), selected.status !== "cancelled" && selected.status !== "delivered" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => move(selected, "cancelled"),
							children: "Cancel ticket"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 flex flex-wrap gap-2",
					children: FLOW.map((status) => {
						const reached = FLOW.indexOf(status) <= FLOW.indexOf(selected.status) && selected.status !== "cancelled";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: cn("px-3 py-2 text-[11px] font-semibold tracking-label", reached ? "bg-ink text-cream" : "bg-cream text-muted"),
							children: ORDER_STATUS_LABELS[status]
						}, status);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-label text-muted",
								children: "Guest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium",
								children: selected.customer.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: selected.customer.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: selected.fulfillment === "delivery" ? selected.customer.address : "Pickup at the restaurant"
							}),
							selected.customer.apartment && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: selected.customer.apartment
							}),
							selected.customer.instructions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: ["Note: ", selected.customer.instructions]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-label text-muted",
							children: "Ticket"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: selected.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								item.quantity,
								"× ",
								item.name,
								item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [" — ", item.notes]
								}) : null
							] }, item.lineId))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-label text-muted",
								children: "Bill"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: ["Subtotal ", formatNaira(selected.subtotal)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: ["Delivery ", formatNaira(selected.deliveryFee)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: ["Discount ", formatNaira(selected.discount)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-medium",
								children: ["Total ", formatNaira(selected.total)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm capitalize text-muted",
								children: [selected.payment, selected.promoCode ? ` · ${selected.promoCode}` : ""]
							})
						] })
					]
				})
			]
		})
	] });
}
function Stat({ label, value }) {
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
export { AdminHome as component };
