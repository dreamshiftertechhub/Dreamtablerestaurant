import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as Phone } from "../_libs/lucide-react.mjs";
import { N as ORDER_STATUS_LABELS, T as useMimi, _ as Button, m as formatNaira, n as Route$1 } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
import { t as TrackingTimeline } from "./timeline-CgK8bdiN.mjs";
import { t as Badge } from "./badge-DPJnkyux.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track._orderId-DtT1Zl_f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KITCHEN = [6.4284, 3.4241];
var DOOR = [6.4474, 3.4723];
var PATH = [
	KITCHEN,
	[6.4312, 3.4308],
	[6.4358, 3.4412],
	[6.441, 3.456],
	DOOR
];
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function along(t) {
	const scaled = Math.min(1, Math.max(0, t)) * (PATH.length - 1);
	const i = Math.min(PATH.length - 2, Math.floor(scaled));
	const local = scaled - i;
	return [lerp(PATH[i][0], PATH[i + 1][0], local), lerp(PATH[i][1], PATH[i + 1][1], local)];
}
function progressFor(status) {
	if (status === "delivered") return 1;
	if (status === "out-for-delivery") return null;
	if (status === "ready") return .12;
	if (status === "preparing" || status === "confirmed") return .02;
	return 0;
}
function LiveMap({ status }) {
	const el = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!el.current) return;
		let cancelled = false;
		let map = null;
		let raf = 0;
		(async () => {
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			if (cancelled || !el.current) return;
			const instance = L.map(el.current, {
				zoomControl: false,
				attributionControl: true,
				scrollWheelZoom: false
			}).setView([6.437, 3.448], 13);
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "&copy; OpenStreetMap",
				maxZoom: 19
			}).addTo(instance);
			const line = L.polyline(PATH, {
				color: "#D71920",
				weight: 3,
				dashArray: "8 8",
				opacity: .95
			}).addTo(instance);
			instance.fitBounds(line.getBounds(), { padding: [28, 28] });
			L.circleMarker(KITCHEN, {
				radius: 8,
				color: "#FFF8F2",
				weight: 2,
				fillColor: "#102A72",
				fillOpacity: 1
			}).addTo(instance).bindTooltip("DreamTable · Victoria Island", {
				permanent: true,
				direction: "right",
				className: "map-tip"
			});
			L.circleMarker(DOOR, {
				radius: 8,
				color: "#FFF8F2",
				weight: 2,
				fillColor: "#D71920",
				fillOpacity: 1
			}).addTo(instance).bindTooltip("Your door", {
				permanent: true,
				direction: "left",
				className: "map-tip"
			});
			const rider = L.circleMarker(along(0), {
				radius: 9,
				color: "#111111",
				weight: 2,
				fillColor: "#FFF8F2",
				fillOpacity: 1
			}).addTo(instance);
			const staticT = progressFor(status);
			if (staticT == null) {
				const start = performance.now();
				const loop = (now) => {
					const t = (Math.sin((now - start) / 2800) + 1) / 2 * .82 + .1;
					rider.setLatLng(along(t));
					raf = requestAnimationFrame(loop);
				};
				raf = requestAnimationFrame(loop);
			} else rider.setLatLng(along(staticT));
			map = instance;
		})();
		return () => {
			cancelled = true;
			if (raf) cancelAnimationFrame(raf);
			map?.remove();
		};
	}, [status]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden bg-navy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: el,
			className: "h-[340px] w-full md:h-[420px]",
			role: "img",
			"aria-label": "Delivery map of Lagos"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute left-4 top-4 text-[11px] font-semibold tracking-label text-cream",
			children: "Lagos · Adeola Odeku → Lekki"
		})]
	});
}
function TrackPage() {
	const { orderId } = Route$1.useParams();
	const hydrated = useMimi((s) => s.hydrated);
	const order = useMimi((s) => s.orders.find((o) => o.id.toLowerCase() === orderId.toLowerCase()));
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveMap, { status: order.status })
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted",
						children: [
							"ETA ",
							order.etaMinutes - 3,
							"–",
							order.etaMinutes + 5,
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
					})
				]
			})
		})]
	})] });
}
//#endregion
export { TrackPage as component };
