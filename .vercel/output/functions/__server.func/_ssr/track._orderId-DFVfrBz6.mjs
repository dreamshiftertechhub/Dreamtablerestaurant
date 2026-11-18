import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as Phone } from "../_libs/lucide-react.mjs";
import { N as ORDER_STATUS_LABELS, T as useMimi, _ as Button, m as formatNaira, n as Route$1 } from "./router-Cg2LEUbK.mjs";
import { t as SiteShell } from "./site-shell-7aEV2_ZE.mjs";
import { i as getKitchenOrder } from "./house.functions-BuOthy0i.mjs";
import { t as TransferDetails } from "./transfer-details-CNz34oQV.mjs";
import { t as TrackingTimeline } from "./timeline-CgK8bdiN.mjs";
import { t as Badge } from "./badge-DPJnkyux.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track._orderId-DFVfrBz6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KITCHEN = [6.4284, 3.4241];
function LiveMap() {
	const el = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!el.current) return;
		let cancelled = false;
		let map = null;
		(async () => {
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			if (cancelled || !el.current) return;
			const instance = L.map(el.current, {
				zoomControl: false,
				attributionControl: true,
				scrollWheelZoom: false
			}).setView(KITCHEN, 15);
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "&copy; OpenStreetMap",
				maxZoom: 19
			}).addTo(instance);
			L.circleMarker(KITCHEN, {
				radius: 9,
				color: "#FFF8F2",
				weight: 2,
				fillColor: "#D71920",
				fillOpacity: 1
			}).addTo(instance).bindTooltip("DreamTable · 14 Adeola Odeku, Victoria Island", {
				permanent: true,
				direction: "right",
				className: "map-tip"
			});
			map = instance;
		})();
		return () => {
			cancelled = true;
			map?.remove();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden bg-navy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: el,
			className: "h-[280px] w-full md:h-[360px]",
			role: "img",
			"aria-label": "Map of DreamTable, Victoria Island"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute left-4 top-4 max-w-xs text-[11px] font-semibold tracking-label text-cream",
			children: "Restaurant location · status changes when the kitchen updates the ticket"
		})]
	});
}
function TrackPage() {
	const { orderId } = Route$1.useParams();
	const hydrated = useMimi((s) => s.hydrated);
	const local = useMimi((s) => s.orders.find((o) => o.id.toLowerCase() === orderId.toLowerCase()));
	const [remote, setRemote] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		const load = () => {
			getKitchenOrder({ data: { id: orderId } }).then((next) => {
				if (live && next) setRemote(next);
			}).catch(() => {});
		};
		load();
		const timer = window.setInterval(load, 8e3);
		return () => {
			live = false;
			window.clearInterval(timer);
		};
	}, [orderId]);
	const order = remote ?? local;
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-lg px-4 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Finding your order…"
		})
	}) });
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Nothing matched that craving."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"We couldn't find order #",
					orderId,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/track",
					children: "Try another number"
				})
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveMap, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-12 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: ["Order #", order.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl",
					children: "Where's my food?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "brand",
						children: ORDER_STATUS_LABELS[order.status]
					}), order.status !== "delivered" && order.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted",
						children: [
							"Kitchen estimate ",
							order.etaMinutes,
							" minutes"
						]
					})]
				}),
				order.rider && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm",
					children: [
						"Rider ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: order.rider.name }),
						" · ",
						order.rider.vehicle
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackingTimeline, {
						status: order.status,
						fulfillment: order.fulfillment
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [order.rider && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${order.rider.phone}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call rider"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+2342013301840",
							children: "Contact support"
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "md:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-label text-muted",
						children: "In the bag"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: order.items.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: l.image,
								alt: "",
								className: "size-14 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								l.quantity,
								"× ",
								l.name
							] })]
						}, l.lineId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex justify-between text-sm font-semibold",
						children: ["Total ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatNaira(order.total)
						})]
					}),
					order.payment === "transfer" && order.status !== "delivered" && order.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransferDetails, { total: order.total })
					})
				]
			})
		})]
	})] });
}
//#endregion
export { TrackPage as component };
