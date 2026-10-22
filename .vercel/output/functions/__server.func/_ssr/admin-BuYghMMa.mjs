import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link, g as Outlet, p as useRouterState, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as cn, _ as Button } from "./router-B3gA6S6q.mjs";
import { n as useCurrentUserState } from "./use-current-user-Bl-mknHK.mjs";
import { t as Logo } from "./logo-D2chpiXU.mjs";
import { t as UserButton } from "./gates-jyome2l9.mjs";
import { n as claimHouse, r as getMySeat } from "./house.functions-DsPTHCXb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BuYghMMa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/admin",
		label: "Orders"
	},
	{
		to: "/admin/menu",
		label: "Menu"
	},
	{
		to: "/admin/reservations",
		label: "Reservations"
	},
	{
		to: "/admin/customers",
		label: "Guests"
	},
	{
		to: "/admin/analytics",
		label: "Numbers"
	},
	{
		to: "/admin/staff",
		label: "Staff"
	}
];
function AdminLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { user, isPending } = useCurrentUserState();
	const [seat, setSeat] = (0, import_react.useState)(void 0);
	const [error, setError] = (0, import_react.useState)("");
	const [claiming, setClaiming] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isPending || !user) return;
		let live = true;
		getMySeat().then((next) => {
			if (live) setSeat(next);
		}).catch(() => {
			if (live) setSeat(null);
		});
		return () => {
			live = false;
		};
	}, [isPending, user]);
	if (isPending || user && seat === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-cream text-muted",
		children: "Checking the keys…"
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		search: { next: "/admin" }
	});
	if (!seat) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-cream px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-5xl",
					children: "The kitchen is locked."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "The first person to take the keys becomes the owner. After that, only people you add as staff can enter."
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-brand",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8",
					disabled: claiming,
					onClick: () => {
						setClaiming(true);
						setError("");
						claimHouse().then((result) => {
							if (!result.ok) setError(result.error);
							else setSeat(result.seat);
						}).catch(() => setError("Could not open the house.")).finally(() => setClaiming(false));
					},
					children: claiming ? "Opening…" : "Take the keys"
				})
			]
		})
	});
	const links = LINKS.filter((l) => l.to !== "/admin/staff" || seat.role === "owner");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-ink text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "flex items-center gap-3",
						"aria-label": "DreamTable kitchen",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { onDark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold tracking-label text-cream/70",
							children: seat.role === "owner" ? "Owner" : seat.role
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-wrap gap-5 text-[11px] font-semibold tracking-label",
						children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: cn("hover:text-brand", pathname === l.to ? "text-brand" : "text-cream/70"),
							children: l.label
						}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-cream/50 hover:text-cream",
							children: "Front of house"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[90rem] px-4 py-10 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
