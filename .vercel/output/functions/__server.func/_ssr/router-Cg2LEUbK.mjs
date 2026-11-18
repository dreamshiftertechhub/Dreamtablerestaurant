import { o as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { s as __exportAll } from "./ssr.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { i as auth } from "./server-ByPMY43R.mjs";
import { a as Trash2, c as Search, f as Minus, h as Heart, i as TriangleAlert, t as X, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cg2LEUbK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "Something went wrong. Let's try that again.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-cream px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brand",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Something went wrong."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-4 inline-flex h-11 items-center bg-brand px-5 text-[11px] font-semibold tracking-label text-white",
				children: "Let's try that again"
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var MENU = [
	{
		id: "signature-jollof",
		name: "DreamTable Signature Jollof",
		description: "Smoky party-style jollof rice served with grilled chicken and house sauce.",
		price: 8500,
		category: "rice",
		image: "/food/jollof.jpg",
		spice: 2,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Long-grain rice",
			"Smoked tomatoes",
			"Scotch bonnet",
			"Thyme",
			"Bay leaf",
			"Grilled chicken",
			"House sauce"
		],
		signature: 1,
		customizable: true
	},
	{
		id: "suya-fries",
		name: "Suya Loaded Fries",
		description: "Crispy fries topped with spicy suya beef, onions and DreamTable signature sauce.",
		price: 7e3,
		category: "sides",
		image: "/food/suya-fries.jpg",
		spice: 2,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Fries",
			"Suya beef",
			"Peanut spice",
			"Red onions",
			"House sauce"
		],
		signature: 2,
		customizable: true
	},
	{
		id: "creamy-pasta",
		name: "Creamy Chicken Pasta",
		description: "Creamy garlic pasta with grilled chicken, parmesan and herbs.",
		price: 9e3,
		category: "pasta",
		image: "/food/pasta.jpg",
		spice: 0,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Pasta",
			"Cream",
			"Garlic",
			"Grilled chicken",
			"Parmesan",
			"Herbs"
		],
		signature: 3,
		customizable: true
	},
	{
		id: "fire-chicken",
		name: "Fire-Grilled Chicken",
		description: "Charcoal grilled chicken marinated in DreamTable's secret pepper blend.",
		price: 8e3,
		category: "grills",
		image: "/food/chicken.jpg",
		spice: 2,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Chicken",
			"Pepper marinade",
			"Thyme",
			"Ginger",
			"Garlic",
			"Charcoal"
		],
		signature: 4,
		customizable: true
	},
	{
		id: "beef-burger",
		name: "DreamTable Beef Burger",
		description: "Double smashed beef patties, melted cheese, caramelised onions and house sauce.",
		price: 9500,
		category: "burgers",
		image: "/food/burger.jpg",
		spice: 1,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Beef patties",
			"Cheddar",
			"Caramelised onions",
			"Brioche",
			"House sauce"
		],
		signature: 5,
		customizable: true
	},
	{
		id: "seafood-rice",
		name: "Seafood Pepper Rice",
		description: "Aromatic pepper rice with prawns, calamari and grilled vegetables.",
		price: 12e3,
		category: "rice",
		image: "/food/seafood.jpg",
		spice: 3,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Pepper rice",
			"Prawns",
			"Calamari",
			"Grilled vegetables",
			"Scotch bonnet"
		],
		signature: 6,
		customizable: true
	},
	{
		id: "chocolate",
		name: "Chocolate Indulgence",
		description: "Warm chocolate dessert with vanilla cream and chocolate crumble.",
		price: 5500,
		category: "desserts",
		image: "/food/chocolate.jpg",
		spice: 0,
		popular: true,
		vegetarian: true,
		available: true,
		ingredients: [
			"Dark chocolate",
			"Vanilla cream",
			"Butter",
			"Sugar",
			"Cacao crumble"
		],
		signature: 7,
		customizable: false
	},
	{
		id: "ofada",
		name: "Ofada Rice & Ayamase",
		description: "Local ofada rice with rich green ayamase stew and assorted meats.",
		price: 9e3,
		category: "rice",
		image: "/food/ofada.jpg",
		spice: 3,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Ofada rice",
			"Green pepper stew",
			"Assorted meats",
			"Locust beans"
		],
		customizable: true
	},
	{
		id: "coconut-fried-rice",
		name: "Coconut Fried Rice",
		description: "Fragrant coconut fried rice with vegetables, shrimp and a squeeze of lime.",
		price: 7500,
		category: "rice",
		image: "/food/coconut-fried-rice.jpg",
		spice: 1,
		popular: false,
		vegetarian: false,
		available: true,
		ingredients: [
			"Rice",
			"Coconut milk",
			"Shrimp",
			"Carrots",
			"Peas",
			"Lime"
		],
		customizable: true
	},
	{
		id: "native-jollof",
		name: "Native Palm Jollof",
		description: "Palm-oil jollof with smoked fish, ugu and a slow-cooked pepper base.",
		price: 8e3,
		category: "rice",
		image: "/food/native-jollof.jpg",
		spice: 2,
		popular: false,
		vegetarian: false,
		available: true,
		ingredients: [
			"Rice",
			"Palm oil",
			"Smoked fish",
			"Ugu",
			"Peppers"
		],
		customizable: true
	},
	{
		id: "suya-platter",
		name: "Suya Platter",
		description: "Charcoal suya beef, peanut spice, onions and tomatoes — made to share.",
		price: 11e3,
		category: "grills",
		image: "/food/suya-platter.jpg",
		spice: 3,
		popular: true,
		vegetarian: false,
		available: true,
		ingredients: [
			"Beef",
			"Suya spice",
			"Onions",
			"Tomatoes",
			"Cabbage"
		],
		customizable: true
	},
	{
		id: "grilled-fish",
		name: "Fire Tilapia",
		description: "Whole grilled tilapia with pepper sauce, lemon and garden herbs.",
		price: 10500,
		category: "grills",
		image: "/food/tilapia.jpg",
		spice: 2,
		popular: false,
		vegetarian: false,
		available: true,
		ingredients: [
			"Tilapia",
			"Pepper sauce",
			"Lemon",
			"Ginger",
			"Garlic"
		],
		customizable: true
	},
	{
		id: "asun",
		name: "Asun",
		description: "Peppered grilled goat, chopped hot, finished with onions at the pass.",
		price: 9500,
		category: "grills",
		image: "/food/asun.jpg",
		spice: 3,
		popular: false,
		vegetarian: false,
		available: true,
		ingredients: [
			"Goat",
			"Scotch bonnet",
			"Onions",
			"Thyme"
		],
		customizable: true
	},
	{
		id: "chapman",
		name: "Chapman",
		description: "The Lagos classic — cucumber, orange, grenadine, very cold.",
		price: 2500,
		category: "drinks",
		image: "/food/chapman.jpg",
		spice: 0,
		popular: true,
		vegetarian: true,
		available: true,
		ingredients: [
			"Cucumber",
			"Orange",
			"Grenadine",
			"Fizz",
			"Angostura"
		],
		customizable: false
	},
	{
		id: "zobo",
		name: "Zobo",
		description: "Hibiscus, ginger and lime, brewed in-house.",
		price: 2e3,
		category: "drinks",
		image: "/food/zobo.jpg",
		spice: 0,
		popular: false,
		vegetarian: true,
		available: true,
		ingredients: [
			"Hibiscus",
			"Ginger",
			"Lime",
			"Pineapple"
		],
		customizable: false
	},
	{
		id: "orange",
		name: "Fresh Orange",
		description: "Pressed to order. No concentrate.",
		price: 2500,
		category: "drinks",
		image: "/food/orange.jpg",
		spice: 0,
		popular: false,
		vegetarian: true,
		available: true,
		ingredients: ["Oranges"],
		customizable: false
	},
	{
		id: "soft-drink",
		name: "Cold Soft Drink",
		description: "Cola, orange soda or lemon-lime — ice cold, unbranded bottles from the fridge.",
		price: 1500,
		category: "drinks",
		image: "/food/soft-drink.jpg",
		spice: 0,
		popular: false,
		vegetarian: true,
		available: true,
		ingredients: [
			"Cola",
			"Orange soda",
			"Lemon-lime"
		],
		customizable: false
	},
	{
		id: "palm-wine",
		name: "Palm Wine Cooler",
		description: "Lightly sparkling palm wine, citrus, served over ice.",
		price: 3500,
		category: "drinks",
		image: "/food/palm-wine.jpg",
		spice: 0,
		popular: false,
		vegetarian: true,
		available: true,
		ingredients: [
			"Palm wine",
			"Citrus",
			"Ice"
		],
		customizable: false
	}
];
var SIGNATURES = MENU.filter((item) => item.signature).sort((a, b) => (a.signature ?? 0) - (b.signature ?? 0));
var CATEGORIES = [
	"all",
	"rice",
	"grills",
	"pasta",
	"burgers",
	"sides",
	"drinks",
	"desserts"
];
var CATEGORY_LABELS = {
	all: "All",
	rice: "Rice",
	grills: "Grills",
	pasta: "Pasta",
	burgers: "Burgers",
	sides: "Sides",
	drinks: "Drinks",
	desserts: "Desserts"
};
var SPICE_CHOICES = [
	{
		id: "mild",
		label: "Mild",
		level: 1
	},
	{
		id: "medium",
		label: "Medium",
		level: 2
	},
	{
		id: "hot",
		label: "Hot",
		level: 3
	},
	{
		id: "extra-hot",
		label: "Extra Hot",
		level: 3
	}
];
var PROTEINS = [
	{
		id: "chicken",
		label: "Chicken",
		price: 0
	},
	{
		id: "beef",
		label: "Beef",
		price: 500
	},
	{
		id: "fish",
		label: "Fish",
		price: 1e3
	},
	{
		id: "prawns",
		label: "Prawns",
		price: 2e3
	}
];
var EXTRAS = [
	{
		id: "plantain",
		label: "Plantain",
		price: 1500
	},
	{
		id: "coleslaw",
		label: "Coleslaw",
		price: 1e3
	},
	{
		id: "fries",
		label: "Fries",
		price: 1500
	},
	{
		id: "extra-protein",
		label: "Extra protein",
		price: 3e3
	},
	{
		id: "extra-sauce",
		label: "Extra sauce",
		price: 500
	}
];
var PLATE_BASES = [
	{
		id: "jollof",
		label: "Jollof",
		price: 3500
	},
	{
		id: "fried-rice",
		label: "Fried Rice",
		price: 3500
	},
	{
		id: "white-rice",
		label: "White Rice",
		price: 2500
	},
	{
		id: "fries",
		label: "Fries",
		price: 2500
	},
	{
		id: "pasta",
		label: "Pasta",
		price: 4e3
	}
];
var PLATE_SAUCES = [
	{
		id: "pepper",
		label: "Pepper Sauce"
	},
	{
		id: "signature",
		label: "DreamTable Signature Sauce"
	},
	{
		id: "garlic",
		label: "Garlic Sauce"
	},
	{
		id: "none",
		label: "No Sauce"
	}
];
var PLATE_PROTEINS = [
	{
		id: "chicken",
		label: "Chicken",
		price: 3e3
	},
	{
		id: "beef",
		label: "Beef",
		price: 3500
	},
	{
		id: "fish",
		label: "Fish",
		price: 4e3
	},
	{
		id: "prawns",
		label: "Prawns",
		price: 5e3
	}
];
var ORDER_STATUS_LABELS = {
	new: "New",
	confirmed: "Confirmed",
	preparing: "Kitchen preparing",
	ready: "Ready",
	"out-for-delivery": "On the way",
	delivered: "Delivered",
	cancelled: "Cancelled"
};
var OCCASIONS = [
	{
		id: "dinner",
		label: "Dinner"
	},
	{
		id: "birthday",
		label: "Birthday"
	},
	{
		id: "date-night",
		label: "Date Night"
	},
	{
		id: "business",
		label: "Business Dinner"
	},
	{
		id: "celebration",
		label: "Celebration"
	}
];
var REWARDS = [
	{
		id: "drink",
		label: "Free drink",
		points: 500,
		type: "drink"
	},
	{
		id: "side",
		label: "Free side",
		points: 1500,
		type: "side"
	},
	{
		id: "discount",
		label: "₦2,000 discount",
		points: 2500,
		type: "discount"
	},
	{
		id: "meal",
		label: "Free main meal",
		points: 5e3,
		type: "meal"
	}
];
var PROMOS = [{
	code: "DREAM10",
	label: "10% off your order",
	type: "percent",
	value: 10
}, {
	code: "WELCOME",
	label: "₦1,000 off",
	type: "flat",
	value: 1e3
}];
var DELIVERY_FEE = 1500;
var FREE_DELIVERY_OVER = 25e3;
var KITCHEN_CLOSES = "10:30 PM";
var RESTAURANT_ADDRESS = "14 Adeola Odeku Street, Victoria Island, Lagos";
var RESTAURANT_PHONE = "+234 201 330 1840";
var useUi = create((set) => ({
	cartOpen: false,
	searchOpen: false,
	foodId: null,
	mobileMenuOpen: false,
	cartPulse: 0,
	setCartOpen: (open) => set({ cartOpen: open }),
	setSearchOpen: (open) => set({ searchOpen: open }),
	openFood: (id) => set({
		foodId: id,
		searchOpen: false,
		mobileMenuOpen: false
	}),
	closeFood: () => set({ foodId: null }),
	setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
	pulseCart: () => set((s) => ({ cartPulse: s.cartPulse + 1 }))
}));
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function nextOrderId(existing) {
	const nums = existing.map((o) => Number(o.id.replace(/^(DT|MIMI)/, ""))).filter((n) => !Number.isNaN(n));
	return `DT${Math.max(2847, ...nums) + 1}`;
}
function nextReservationId(existing) {
	const nums = existing.map((o) => Number(o.id.replace(/^(DT|MIMI)/, ""))).filter((n) => !Number.isNaN(n));
	return `DT${Math.max(4812, ...nums) + 1}`;
}
function lineTotal(line) {
	return line.unitPrice * line.quantity;
}
function cartSubtotal(cart) {
	return cart.reduce((sum, line) => sum + lineTotal(line), 0);
}
function mergeCart(cart, line) {
	const twin = cart.find((c) => c.menuItemId === line.menuItemId && c.protein === line.protein && c.spice === line.spice && c.notes === line.notes && c.customLabel === line.customLabel && c.extras.slice().sort().join() === line.extras.slice().sort().join());
	if (twin) return cart.map((c) => c.lineId === twin.lineId ? {
		...c,
		quantity: c.quantity + line.quantity
	} : c);
	return [...cart, {
		...line,
		lineId: uid("line")
	}];
}
function extraCost(extras) {
	return extras.reduce((sum, id) => sum + (EXTRAS.find((e) => e.id === id)?.price ?? 0), 0);
}
function applyPromo(subtotal, promo) {
	if (!promo) return 0;
	if (promo.type === "percent") return Math.round(subtotal * (promo.value / 100));
	return Math.min(subtotal, promo.value);
}
function deliveryFeeFor(subtotal, fulfillment) {
	if (fulfillment === "pickup") return 0;
	if (subtotal >= 25e3) return 0;
	return DELIVERY_FEE;
}
var STATUS_FLOW = [
	"new",
	"confirmed",
	"preparing",
	"ready",
	"out-for-delivery",
	"delivered"
];
var useMimi = create()(persist((set, get) => ({
	hydrated: false,
	items: MENU,
	cart: [],
	pendingAdds: [],
	promoCode: null,
	promoError: null,
	favouriteIds: [],
	orders: [],
	reservations: [],
	profile: {
		name: "",
		phone: "",
		email: ""
	},
	addresses: [],
	points: 0,
	loyaltyHistory: [],
	discountCredit: 0,
	membership: "none",
	calledIds: [],
	prefs: {
		receipts: true,
		sms: true
	},
	setHydrated: (v) => set({ hydrated: v }),
	flushPendingAdds: () => set((s) => {
		let cart = s.cart;
		for (const line of s.pendingAdds) cart = mergeCart(cart, line);
		return {
			hydrated: true,
			pendingAdds: [],
			cart
		};
	}),
	addToCart: (line) => {
		if (!get().hydrated) {
			set((s) => ({ pendingAdds: [...s.pendingAdds, line] }));
			useUi.getState().pulseCart();
			return;
		}
		set((s) => ({ cart: mergeCart(s.cart, line) }));
		useUi.getState().pulseCart();
	},
	setQty: (lineId, quantity) => set((s) => ({ cart: quantity <= 0 ? s.cart.filter((c) => c.lineId !== lineId) : s.cart.map((c) => c.lineId === lineId ? {
		...c,
		quantity
	} : c) })),
	removeLine: (lineId) => set((s) => ({ cart: s.cart.filter((c) => c.lineId !== lineId) })),
	clearCart: () => set({
		cart: [],
		promoCode: null,
		promoError: null
	}),
	applyCode: (code) => {
		const found = PROMOS.find((p) => p.code.toLowerCase() === code.trim().toLowerCase());
		if (!found) {
			set({
				promoError: "That code doesn't exist.",
				promoCode: null
			});
			return false;
		}
		set({
			promoCode: found.code,
			promoError: null
		});
		return true;
	},
	clearPromo: () => set({
		promoCode: null,
		promoError: null
	}),
	toggleFavourite: (id) => set((s) => ({ favouriteIds: s.favouriteIds.includes(id) ? s.favouriteIds.filter((x) => x !== id) : [...s.favouriteIds, id] })),
	placeOrder: (draft) => {
		const { cart, promoCode, discountCredit, orders, points } = get();
		const subtotal = cartSubtotal(cart);
		const promo = PROMOS.find((p) => p.code === promoCode) ?? null;
		const discount = applyPromo(subtotal, promo) + discountCredit;
		const deliveryFee = deliveryFeeFor(subtotal, draft.fulfillment);
		const total = Math.max(0, subtotal + deliveryFee - discount);
		const earned = Math.round(total / 100);
		const order = {
			id: nextOrderId(orders),
			items: cart,
			status: "confirmed",
			fulfillment: draft.fulfillment,
			customer: draft.customer,
			payment: draft.payment,
			subtotal,
			deliveryFee,
			discount,
			total,
			promoCode: promo?.code,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			etaMinutes: draft.fulfillment === "pickup" ? 18 : 28,
			pointsEarned: earned
		};
		set({
			orders: [order, ...orders],
			cart: [],
			promoCode: null,
			promoError: null,
			discountCredit: 0,
			points: points + earned,
			loyaltyHistory: [{
				id: uid("loy"),
				label: `Order #${order.id}`,
				points: earned,
				at: order.createdAt
			}, ...get().loyaltyHistory]
		});
		return order;
	},
	updateOrderStatus: (id, status) => set((s) => ({ orders: s.orders.map((o) => o.id === id ? {
		...o,
		status
	} : o) })),
	tickOrders: () => set((s) => ({ orders: s.orders.map((o) => {
		if (o.status === "delivered" || o.status === "cancelled") return o;
		const elapsed = (Date.now() - new Date(o.createdAt).getTime()) / 1e3;
		let next = o.status;
		if (elapsed > 12) next = "confirmed";
		if (elapsed > 25) next = "preparing";
		if (elapsed > 55) next = "ready";
		if (elapsed > 75 && o.fulfillment === "delivery") next = "out-for-delivery";
		if (elapsed > 140) next = "delivered";
		if (elapsed > 90 && o.fulfillment === "pickup") next = "delivered";
		if (STATUS_FLOW.indexOf(next) > STATUS_FLOW.indexOf(o.status)) return {
			...o,
			status: next
		};
		return o;
	}) })),
	addReservation: (r) => {
		const reservation = {
			...r,
			id: nextReservationId(get().reservations),
			status: "confirmed",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((s) => ({ reservations: [reservation, ...s.reservations] }));
		return reservation;
	},
	updateReservation: (id, status) => set((s) => ({ reservations: s.reservations.map((r) => r.id === id ? {
		...r,
		status
	} : r) })),
	updateProfile: (patch) => set((s) => ({ profile: {
		...s.profile,
		...patch
	} })),
	addAddress: (a) => set((s) => ({ addresses: [...s.addresses, {
		...a,
		id: uid("addr")
	}] })),
	removeAddress: (id) => set((s) => ({ addresses: s.addresses.filter((a) => a.id !== id) })),
	redeemReward: (id) => {
		const reward = [
			{
				id: "drink",
				label: "Free drink",
				points: 500
			},
			{
				id: "side",
				label: "Free side",
				points: 1500
			},
			{
				id: "discount",
				label: "₦2,000 discount",
				points: 2500
			},
			{
				id: "meal",
				label: "Free main meal",
				points: 5e3
			}
		].find((r) => r.id === id);
		if (!reward) return "That reward isn't available.";
		if (get().points < reward.points) return "You need a few more points.";
		set((s) => ({
			points: s.points - reward.points,
			discountCredit: s.discountCredit + (reward.id === "discount" ? 2e3 : 0),
			loyaltyHistory: [{
				id: uid("loy"),
				label: `Redeemed ${reward.label}`,
				points: -reward.points,
				at: (/* @__PURE__ */ new Date()).toISOString()
			}, ...s.loyaltyHistory]
		}));
		if (reward.id === "drink") get().addToCart({
			menuItemId: "chapman",
			name: "Chapman (reward)",
			image: "/food/hero.jpg",
			unitPrice: 0,
			quantity: 1,
			extras: [],
			customLabel: "Loyalty reward"
		});
		if (reward.id === "side") get().addToCart({
			menuItemId: "dodo",
			name: "Fried Plantain (reward)",
			image: "/food/ofada.jpg",
			unitPrice: 0,
			quantity: 1,
			extras: [],
			customLabel: "Loyalty reward"
		});
		if (reward.id === "meal") get().addToCart({
			menuItemId: "signature-jollof",
			name: "DreamTable Signature Jollof (reward)",
			image: "/food/jollof.jpg",
			unitPrice: 0,
			quantity: 1,
			extras: [],
			customLabel: "Loyalty reward"
		});
		return null;
	},
	subscribe: (plan) => {
		if (plan === "none") {
			set({ membership: "none" });
			return;
		}
		const bonus = plan === "host" ? 800 : 250;
		set((s) => ({
			membership: plan,
			points: s.points + bonus,
			loyaltyHistory: [{
				id: uid("loy"),
				label: plan === "host" ? "Joined Host membership" : "Joined The Circle",
				points: bonus,
				at: (/* @__PURE__ */ new Date()).toISOString()
			}, ...s.loyaltyHistory]
		}));
	},
	buyGiftCard: (amount) => set((s) => ({
		discountCredit: s.discountCredit + amount,
		loyaltyHistory: [{
			id: uid("loy"),
			label: `Gift card ${amount.toLocaleString("en-NG")}`,
			points: 0,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...s.loyaltyHistory]
	})),
	addMenuItem: (item) => set((s) => ({ items: [item, ...s.items] })),
	updateMenuItem: (id, patch) => set((s) => ({ items: s.items.map((it) => it.id === id ? {
		...it,
		...patch
	} : it) })),
	deleteMenuItem: (id) => set((s) => ({ items: s.items.filter((it) => it.id !== id) })),
	toggleCall: (id) => set((s) => ({ calledIds: (s.calledIds ?? []).includes(id) ? (s.calledIds ?? []).filter((x) => x !== id) : [id, ...s.calledIds ?? []] })),
	setPref: (key, value) => set((s) => ({ prefs: {
		...s.prefs ?? {
			receipts: true,
			sms: true
		},
		[key]: value
	} }))
}), {
	name: "dreamtable-v3",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	partialize: (s) => ({
		cart: s.cart,
		promoCode: s.promoCode,
		favouriteIds: s.favouriteIds,
		orders: s.orders,
		reservations: s.reservations,
		profile: s.profile,
		addresses: s.addresses,
		points: s.points,
		loyaltyHistory: s.loyaltyHistory,
		discountCredit: s.discountCredit,
		membership: s.membership,
		calledIds: s.calledIds,
		prefs: s.prefs
	})
}));
function useCartCount() {
	return useMimi((s) => s.cart.reduce((n, l) => n + l.quantity, 0));
}
function useActivePromo() {
	const code = useMimi((s) => s.promoCode);
	return PROMOS.find((p) => p.code === code) ?? null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-label text-[11px] transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy", {
	variants: {
		variant: {
			default: "bg-brand text-white hover:bg-brand-dark",
			navy: "bg-navy text-white hover:bg-navy-deep",
			outline: "border border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-cream",
			cream: "bg-cream text-ink hover:bg-paper",
			ghost: "bg-transparent text-ink hover:bg-surface",
			inverse: "bg-white text-ink hover:bg-cream",
			link: "bg-transparent text-brand underline-offset-4 hover:underline tracking-normal normal-case font-medium text-sm"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3",
			lg: "h-12 px-7",
			xl: "h-14 px-8",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-12 w-full border border-line bg-paper px-4 text-sm text-ink placeholder:text-subtle", "transition-colors duration-150 focus-visible:border-navy focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 flex flex-col bg-cream shadow-soft", "data-[state=open]:animate-in data-[state=closed]:animate-out duration-300", side === "right" && "inset-y-0 right-0 h-full w-full max-w-md data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "left" && "inset-y-0 left-0 h-full w-full max-w-md data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", side === "bottom" && "inset-x-0 bottom-0 max-h-[92vh] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		className: "absolute right-4 top-4 size-10 text-ink hover:bg-surface",
		"aria-label": "Close",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-6 pr-14", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-3xl", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function Qty({ value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex h-11 items-center border border-line bg-paper", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center text-ink hover:bg-surface",
				onClick: () => onChange(Math.max(1, value - 1)),
				"aria-label": "Decrease quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center text-ink hover:bg-surface",
				onClick: () => onChange(value + 1),
				"aria-label": "Increase quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
			})
		]
	});
}
function formatNaira(amount) {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		maximumFractionDigits: 0
	}).format(amount);
}
function formatTime(iso) {
	return new Date(iso).toLocaleTimeString("en-NG", {
		hour: "numeric",
		minute: "2-digit"
	});
}
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-NG", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
function CartDrawer() {
	const open = useUi((s) => s.cartOpen);
	const setOpen = useUi((s) => s.setCartOpen);
	const cart = useMimi((s) => s.cart);
	const setQty = useMimi((s) => s.setQty);
	const remove = useMimi((s) => s.removeLine);
	const applyCode = useMimi((s) => s.applyCode);
	const promoError = useMimi((s) => s.promoError);
	const promoCode = useMimi((s) => s.promoCode);
	const credit = useMimi((s) => s.discountCredit);
	const promo = useActivePromo();
	const [code, setCode] = (0, import_react.useState)("");
	const subtotal = cartSubtotal(cart);
	const discount = applyPromo(subtotal, promo) + credit;
	const delivery = deliveryFeeFor(subtotal, "delivery");
	const total = Math.max(0, subtotal + delivery - discount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "w-full sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Your order" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: cart.length === 0 ? "Your table is waiting." : `${cart.length} line${cart.length === 1 ? "" : "s"}` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-5 overflow-y-auto px-6 pb-4",
					children: cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "Your table is waiting."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								children: "Explore menu"
							})
						})]
					}) : cart.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: line.image,
								alt: "",
								className: "size-20 object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium leading-tight",
										children: line.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: [
											line.customLabel,
											line.protein,
											line.spice,
											...line.extras.map((e) => EXTRAS.find((x) => x.id === e)?.label ?? e),
											line.notes
										].filter(Boolean).join(" · ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qty, {
											value: line.quantity,
											onChange: (n) => setQty(line.lineId, n)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm tabular-nums",
											children: formatNaira(lineTotal(line))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Remove ${line.name}`,
								onClick: () => remove(line.lineId),
								className: "grid size-10 place-items-center text-muted hover:text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						]
					}, line.lineId))
				}), cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "flex gap-2",
							onSubmit: (e) => {
								e.preventDefault();
								if (applyCode(code)) toast(`Promo ${code.toUpperCase()} applied.`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: code,
								onChange: (e) => setCode(e.target.value),
								placeholder: "Promo code · try DREAM10",
								"aria-label": "Promo code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "outline",
								children: "Apply"
							})]
						}),
						promoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-brand",
							children: promoError
						}),
						promoCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-ok",
							children: PROMOS.find((p) => p.code === promoCode)?.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-1.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: formatNaira(subtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Delivery",
									value: delivery === 0 ? "On the house" : formatNaira(delivery)
								}),
								discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Discount",
									value: `−${formatNaira(discount)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Total",
									value: formatNaira(total),
									strong: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-4 w-full",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								children: "Checkout"
							})
						})
					]
				})]
			})]
		})
	});
}
function Row({ label, value, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: strong ? "font-semibold tabular-nums" : "tabular-nums",
			children: value
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[min(92vw,720px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-cream shadow-soft", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		className: "absolute right-4 top-4 size-10 bg-paper/80 text-ink hover:bg-paper",
		"aria-label": "Close",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-4" })
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 p-6 pb-0", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl leading-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function SearchOverlay() {
	const open = useUi((s) => s.searchOpen);
	const setOpen = useUi((s) => s.setSearchOpen);
	const openFood = useUi((s) => s.openFood);
	const items = useMimi((s) => s.items);
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (!query) return items.filter((i) => i.popular).slice(0, 6);
		return items.filter((i) => `${i.name} ${i.description}`.toLowerCase().includes(query));
	}, [items, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => {
			setOpen(o);
			if (!o) setQ("");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 pb-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: "Search the menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: "Find a dish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoFocus: true,
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Chicken, jollof, suya…",
								className: "pl-10",
								"aria-label": "Search dishes"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-[60vh] overflow-y-auto pb-4",
					children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "px-6 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: "Nothing matched that craving."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Try our Signature Jollof."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-4 text-sm font-semibold text-brand",
								onClick: () => {
									setOpen(false);
									openFood("signature-jollof");
								},
								children: "Open Signature Jollof"
							})
						]
					}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center gap-3 px-6 py-3 text-left hover:bg-surface",
						onClick: () => {
							setOpen(false);
							openFood(item.id);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "size-14 object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm text-muted",
									children: item.description
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm tabular-nums",
								children: formatNaira(item.price)
							})
						]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-6 py-3 text-xs text-muted",
					children: [
						"Or browse the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "text-navy",
							onClick: () => setOpen(false),
							children: "full menu"
						}),
						"."
					]
				})
			]
		})
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-[11px] font-semibold tracking-label text-muted", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-28 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-subtle", "transition-colors duration-150 focus-visible:border-navy focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
function SpiceDots({ level, className }) {
	if (level === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-[10px] tracking-label text-subtle", className),
		children: "No spice"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1", className),
		"aria-label": `Spice level ${level}`,
		children: [
			1,
			2,
			3
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", n <= level ? "bg-brand" : "bg-line") }, n))
	});
}
function FoodModal() {
	const foodId = useUi((s) => s.foodId);
	const close = useUi((s) => s.closeFood);
	const item = useMimi((s) => s.items.find((i) => i.id === foodId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!foodId,
		onOpenChange: (o) => !o && close(),
		children: item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodBody, {}, item.id) : null
	});
}
function FoodBody() {
	const foodId = useUi((s) => s.foodId);
	const close = useUi((s) => s.closeFood);
	const item = useMimi((s) => s.items.find((i) => i.id === foodId));
	const add = useMimi((s) => s.addToCart);
	const setCart = useUi((s) => s.setCartOpen);
	const fav = useMimi((s) => item ? s.favouriteIds.includes(item.id) : false);
	const toggle = useMimi((s) => s.toggleFavourite);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [protein, setProtein] = (0, import_react.useState)("chicken");
	const [extras, setExtras] = (0, import_react.useState)([]);
	const [spice, setSpice] = (0, import_react.useState)("medium");
	const [notes, setNotes] = (0, import_react.useState)("");
	if (!item) return null;
	const proteinPrice = item.customizable ? PROTEINS.find((p) => p.id === protein)?.price ?? 0 : 0;
	const extrasPrice = item.customizable ? extraCost(extras) : 0;
	const unit = item.price + proteinPrice + extrasPrice;
	const total = unit * qty;
	function toggleExtra(id) {
		setExtras((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: "flex h-[min(92vh,760px)] w-[min(96vw,780px)] flex-col overflow-hidden p-0 md:grid md:h-[min(86vh,720px)] md:grid-cols-2 md:grid-rows-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-44 shrink-0 bg-surface md:h-full md:min-h-[28rem]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: item.name,
				className: "h-full w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col bg-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-label text-muted",
						children: item.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-1",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-2",
						children: item.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold tabular-nums",
							children: formatNaira(item.price)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceDots, { level: item.spice })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold tracking-label text-ink",
							children: "Ingredients. "
						}), item.ingredients.join(" · ")]
					}),
					item.customizable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-6 pb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-2 block",
								children: "Protein"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: PROTEINS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: protein === p.id,
									onClick: () => setProtein(p.id),
									label: p.price ? `${p.label} +${formatNaira(p.price)}` : p.label
								}, p.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-2 block",
								children: "Extras"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: EXTRAS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: extras.includes(e.id),
									onClick: () => toggleExtra(e.id),
									label: `${e.label} +${formatNaira(e.price)}`
								}, e.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-2 block",
								children: "Spice level"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: SPICE_CHOICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: spice === s.id,
									onClick: () => setSpice(s.id),
									label: s.label
								}, s.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "notes",
								className: "mb-2 block",
								children: "Special instructions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								placeholder: "No onions. Extra napkins. You know."
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 border-t border-line bg-cream p-4 md:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qty, {
						value: qty,
						onChange: setQty
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Favourite",
						onClick: () => toggle(item.id),
						className: "grid size-11 place-items-center border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", fav && "fill-brand text-brand") })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					className: "mt-3 w-full",
					disabled: !item.available,
					onClick: () => {
						add({
							menuItemId: item.id,
							name: item.name,
							image: item.image,
							unitPrice: unit,
							quantity: qty,
							protein: item.customizable ? protein : void 0,
							extras: item.customizable ? extras : [],
							spice: item.customizable ? spice : void 0,
							notes: notes || void 0
						});
						toast("Added to your order.");
						close();
						setCart(true);
					},
					children: ["Add to cart · ", formatNaira(total)]
				})]
			})]
		})]
	});
}
function Chip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("h-10 px-3 text-[11px] font-semibold tracking-label border transition-colors", active ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink hover:border-ink"),
		children: label
	});
}
function AppProviders({ children }) {
	(0, import_react.useEffect)(() => {
		const result = useMimi.persist.rehydrate();
		Promise.resolve(result).finally(() => {
			useMimi.getState().flushPendingAdds();
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodModal, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			toastOptions: { className: "!bg-ink !text-cream !border-0 !rounded-none !font-sans !text-sm" }
		})
	] });
}
var styles_default = "/assets/styles-Ctc2-nKU.css";
var Route$28 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DreamTable — Come hungry. Leave talking." },
			{
				name: "description",
				content: "Bold Nigerian flavours, made fresh and delivered with love. Order, reserve, and track from DreamTable, Victoria Island, Lagos."
			},
			{
				name: "theme-color",
				content: "#D71920"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-cream font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProviders, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-cream px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/mark.png",
				alt: "",
				className: "mx-auto h-24 w-auto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-brand text-4xl tracking-tight text-ink",
				children: "Dream Table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl",
				children: "Nothing matched that craving."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Try our Signature Jollof, or head back home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex h-12 items-center bg-brand px-6 text-[11px] font-semibold tracking-label text-white",
				children: "Back to the table"
			})
		] })
	})
});
var $$splitComponentImporter$26 = () => import("./routes-CDL8qMPs.mjs");
var Route$27 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./account-D4JielIE.mjs");
var Route$26 = createFileRoute("/account")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./admin-C6iRHT_n.mjs");
var Route$25 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./build-CggLa8_a.mjs");
var Route$24 = createFileRoute("/build")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./catering-BePCfCeK.mjs");
var Route$23 = createFileRoute("/catering")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./checkout-fARWnjbO.mjs");
var Route$22 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./contact-47sRlclW.mjs");
var Route$21 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./faq-mCgH5l8z.mjs");
var Route$20 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./gallery-BEBOi9zh.mjs");
var Route$19 = createFileRoute("/gallery")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./legal-BPOUXSI2.mjs");
var Route$18 = createFileRoute("/legal")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./login-Dx2KaICm.mjs");
var Route$17 = createFileRoute("/login")({
	validateSearch: (search) => ({ next: typeof search.next === "string" ? search.next : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./loyalty-D4iR__Jl.mjs");
var Route$16 = createFileRoute("/loyalty")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./menu-D8xHfNxJ.mjs");
var Route$15 = createFileRoute("/menu")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./order-D7n8MsOR.mjs");
var Route$14 = createFileRoute("/order")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./pass-C3AKapJR.mjs");
var Route$13 = createFileRoute("/pass")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./reservations-DNDKSB_9.mjs");
var Route$12 = createFileRoute("/reservations")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./story-CeDCyFdP.mjs");
var Route$11 = createFileRoute("/story")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./track-CPxOIekD.mjs");
var Route$10 = createFileRoute("/track")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin-C5h1HkKJ.mjs");
var Route$9 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./analytics-Dp5Slwme.mjs");
var Route$8 = createFileRoute("/admin/analytics")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./customers-DWtghbrm.mjs");
var Route$7 = createFileRoute("/admin/customers")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./menu-DYRX2nub.mjs");
var Route$6 = createFileRoute("/admin/menu")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./reservations-kzKlVQYN.mjs");
var Route$5 = createFileRoute("/admin/reservations")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./staff-Cf0M7eT7.mjs");
var Route$4 = createFileRoute("/admin/staff")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./confirmation._orderId-CTcWUY1t.mjs");
var Route$3 = createFileRoute("/confirmation/$orderId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./track.index-CpCnn_sx.mjs");
var Route$2 = createFileRoute("/track/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./track._orderId-DFVfrBz6.mjs");
var Route$1 = createFileRoute("/track/$orderId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var AccountRoute = Route$26.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$28
});
var AdminRoute = Route$25.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$28
});
var BuildRoute = Route$24.update({
	id: "/build",
	path: "/build",
	getParentRoute: () => Route$28
});
var CateringRoute = Route$23.update({
	id: "/catering",
	path: "/catering",
	getParentRoute: () => Route$28
});
var CheckoutRoute = Route$22.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$28
});
var ContactRoute = Route$21.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$28
});
var FaqRoute = Route$20.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$28
});
var GalleryRoute = Route$19.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$28
});
var LegalRoute = Route$18.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$28
});
var LoginRoute = Route$17.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$28
});
var LoyaltyRoute = Route$16.update({
	id: "/loyalty",
	path: "/loyalty",
	getParentRoute: () => Route$28
});
var MenuRoute = Route$15.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$28
});
var OrderRoute = Route$14.update({
	id: "/order",
	path: "/order",
	getParentRoute: () => Route$28
});
var PassRoute = Route$13.update({
	id: "/pass",
	path: "/pass",
	getParentRoute: () => Route$28
});
var ReservationsRoute = Route$12.update({
	id: "/reservations",
	path: "/reservations",
	getParentRoute: () => Route$28
});
var StoryRoute = Route$11.update({
	id: "/story",
	path: "/story",
	getParentRoute: () => Route$28
});
var TrackRoute = Route$10.update({
	id: "/track",
	path: "/track",
	getParentRoute: () => Route$28
});
var AdminIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminAnalyticsRoute = Route$8.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$7.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminMenuRoute = Route$6.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => AdminRoute
});
var AdminReservationsRoute = Route$5.update({
	id: "/reservations",
	path: "/reservations",
	getParentRoute: () => AdminRoute
});
var AdminStaffRoute = Route$4.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => AdminRoute
});
var ConfirmationOrderIdRoute = Route$3.update({
	id: "/confirmation/$orderId",
	path: "/confirmation/$orderId",
	getParentRoute: () => Route$28
});
var TrackIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => TrackRoute
});
var TrackOrderIdRoute = Route$1.update({
	id: "/$orderId",
	path: "/$orderId",
	getParentRoute: () => TrackRoute
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$28
});
var AdminRouteChildren = {
	AdminAnalyticsRoute,
	AdminCustomersRoute,
	AdminMenuRoute,
	AdminReservationsRoute,
	AdminStaffRoute,
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var TrackRouteChildren = {
	TrackOrderIdRoute,
	TrackIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AccountRoute,
	AdminRoute: AdminRouteWithChildren,
	BuildRoute,
	CateringRoute,
	CheckoutRoute,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	LegalRoute,
	LoginRoute,
	LoyaltyRoute,
	MenuRoute,
	OrderRoute,
	PassRoute,
	ReservationsRoute,
	StoryRoute,
	TrackRoute: TrackRoute._addFileChildren(TrackRouteChildren),
	ConfirmationOrderIdRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { FREE_DELIVERY_OVER as A, SIGNATURES as B, useActivePromo as C, CATEGORIES as D, useUi as E, PLATE_PROTEINS as F, PLATE_SAUCES as I, RESTAURANT_ADDRESS as L, OCCASIONS as M, ORDER_STATUS_LABELS as N, CATEGORY_LABELS as O, PLATE_BASES as P, RESTAURANT_PHONE as R, lineTotal as S, useMimi as T, cn as V, Button as _, SpiceDots as a, deliveryFeeFor as b, Dialog as c, DialogHeader as d, DialogTitle as f, Input as g, formatTime as h, Route$17 as i, KITCHEN_CLOSES as j, EXTRAS as k, DialogContent as l, formatNaira as m, Route$1 as n, Textarea as o, formatDate as p, Route$3 as r, Label as s, router_exports as t, DialogDescription as u, applyPromo as v, useCartCount as w, extraCost as x, cartSubtotal as y, REWARDS as z };
