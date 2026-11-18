import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as Button, g as Input, s as Label } from "./router-Cg2LEUbK.mjs";
import { l as listStaff, t as addStaff, u as removeStaff } from "./house.functions-BuOthy0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-Cf0M7eT7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		id: "kitchen",
		label: "Kitchen — orders and the pass"
	},
	{
		id: "host",
		label: "Host — reservations"
	},
	{
		id: "floor",
		label: "Floor — service tickets"
	}
];
function StaffPage() {
	const [staff, setStaff] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("kitchen");
	const [error, setError] = (0, import_react.useState)("");
	function refresh() {
		listStaff().then((result) => {
			if (result.ok) setStaff(result.staff);
			else setError(result.error);
		});
	}
	(0, import_react.useEffect)(() => {
		refresh();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 md:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "The house"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: "Staff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Add a person with their own login. Share the password once — they sign in on the same door as guests, then open the kitchen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: staff.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: person.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								person.email,
								" · ",
								person.role
							]
						})] }), person.role !== "owner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => {
								removeStaff({ data: { userId: person.userId } }).then(() => refresh());
							},
							children: "Remove"
						})]
					}, person.userId))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4 md:col-span-7",
			onSubmit: (e) => {
				e.preventDefault();
				setError("");
				addStaff({ data: {
					name,
					email,
					password,
					role
				} }).then((result) => {
					if (!result.ok) {
						setError(result.error);
						return;
					}
					toast(`${name} can sign in now.`);
					setName("");
					setEmail("");
					setPassword("");
					refresh();
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "staff-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "staff-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "staff-email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "staff-email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "staff-password",
						children: "Starting password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "staff-password",
						type: "text",
						minLength: 8,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium",
						children: "Role"
					}), ROLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "role",
							checked: role === item.id,
							onChange: () => setRole(item.id)
						}), item.label]
					}, item.id))]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-brand",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add staff"
				})
			]
		})]
	});
}
//#endregion
export { StaffPage as component };
