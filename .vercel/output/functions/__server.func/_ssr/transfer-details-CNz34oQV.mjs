import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as formatNaira } from "./router-Cg2LEUbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transfer-details-CNz34oQV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRANSFER = {
	bank: "Moniepoint",
	name: "Dreamtable",
	number: "9015828778"
};
function TransferDetails({ total }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-paper p-5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Bank transfer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Bank",
						value: TRANSFER.bank
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Account name",
						value: TRANSFER.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Account number",
						value: TRANSFER.number,
						strong: true
					})
				]
			}),
			typeof total === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-medium",
				children: ["Send ", formatNaira(total)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-[11px] font-semibold tracking-label text-brand",
				onClick: () => {
					navigator.clipboard?.writeText(TRANSFER.number).then(() => {
						setCopied(true);
						window.setTimeout(() => setCopied(false), 1600);
					});
				},
				children: copied ? "Copied" : "Copy account number"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Use the name on your order as the transfer narration. The kitchen starts the ticket once the payment shows."
			})
		]
	});
}
function Row({ label, value, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: strong ? "font-semibold tabular-nums" : "tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { TransferDetails as t };
