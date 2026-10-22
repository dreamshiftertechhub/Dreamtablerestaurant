import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as useUi, T as useMimi, _ as Button, m as formatNaira } from "./router-B3gA6S6q.mjs";
import { o as listPassCalls } from "./house.functions-DsPTHCXb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pass-board-C33d6R6S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usePassPlates() {
	const items = useMimi((s) => s.items);
	const orders = useMimi((s) => s.orders);
	const called = useMimi((s) => s.calledIds ?? []);
	const [remote, setRemote] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let live = true;
		listPassCalls().then((rows) => {
			if (live) setRemote(rows);
		}).catch(() => {});
		return () => {
			live = false;
		};
	}, [called.join("|")]);
	const liveTickets = orders.filter((o) => o.status === "preparing" || o.status === "ready").flatMap((o) => o.items.slice(0, 1).map((line) => line.menuItemId));
	return [.../* @__PURE__ */ new Set([
		...remote.map((r) => r.menuItemId),
		...called,
		...liveTickets
	])].map((id) => {
		const item = items.find((i) => i.id === id);
		if (!item) return null;
		return {
			item,
			note: remote.find((r) => r.menuItemId === id)?.note || "Called from the pass"
		};
	}).filter((p) => !!p);
}
function PassBoard({ limit }) {
	const plates = usePassPlates();
	const add = useMimi((s) => s.addToCart);
	const setCart = useUi((s) => s.setCartOpen);
	const shown = limit ? plates.slice(0, limit) : plates;
	if (shown.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "The pass is quiet. When the kitchen calls a plate, it lands here for one tap."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-line border-y border-line",
		children: shown.map(({ item, note }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex flex-wrap items-center gap-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					className: "size-16 object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: note
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular-nums",
					children: formatNaira(item.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => {
						add({
							menuItemId: item.id,
							name: item.name,
							image: item.image,
							unitPrice: item.price,
							quantity: 1,
							extras: [],
							notes: "From the pass"
						});
						toast(`${item.name} is in the bag.`);
						setCart(true);
					},
					children: "I'll have this"
				})
			]
		}, item.id))
	});
}
function PassLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/pass",
		className: "text-[11px] font-semibold tracking-label text-brand",
		children: "See the pass"
	});
}
//#endregion
export { PassLink as n, PassBoard as t };
