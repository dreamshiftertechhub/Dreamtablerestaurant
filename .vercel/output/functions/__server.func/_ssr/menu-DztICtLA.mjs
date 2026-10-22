import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as CATEGORIES, O as CATEGORY_LABELS, T as useMimi, _ as Button, c as Dialog, d as DialogHeader, f as DialogTitle, g as Input, l as DialogContent, m as formatNaira, o as Textarea, s as Label, u as DialogDescription } from "./router-B3gA6S6q.mjs";
import { d as setPassCall } from "./house.functions-DsPTHCXb.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DXfW1NoA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-DztICtLA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminMenu() {
	const items = useMimi((s) => s.items);
	const update = useMimi((s) => s.updateMenuItem);
	const remove = useMimi((s) => s.deleteMenuItem);
	const add = useMimi((s) => s.addMenuItem);
	const called = useMimi((s) => s.calledIds ?? []);
	const toggleCall = useMimi((s) => s.toggleCall);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-label text-brand",
				children: "Menu management"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "What we're cooking"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setCreating(true),
				children: "Add item"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 divide-y divide-line border-y border-line",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								CATEGORY_LABELS[item.category],
								" · ",
								formatNaira(item.price),
								!item.available ? " · Unavailable" : "",
								item.popular ? " · Popular" : "",
								item.spice ? " · Spicy" : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setEditing(item),
						children: "Edit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => {
							const on = !called.includes(item.id);
							toggleCall(item.id);
							setPassCall({ data: {
								menuItemId: item.id,
								note: "Called from the pass",
								on
							} }).then((result) => {
								if (!result.ok) toast(result.error ?? "The pass didn't hear that.");
							});
						},
						children: called.includes(item.id) ? "Take off the pass" : "Call to the pass"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => update(item.id, { available: !item.available }),
						children: item.available ? "Mark sold out" : "Make available"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => remove(item.id),
						children: "Remove"
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemDialog, {
			open: !!editing,
			item: editing,
			onOpenChange: (o) => !o && setEditing(null),
			onSave: (patch) => {
				if (editing) update(editing.id, patch);
				setEditing(null);
			}
		}, editing?.id ?? "edit"),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemDialog, {
			open: creating,
			item: null,
			onOpenChange: setCreating,
			onSave: (patch) => {
				add({
					id: `new-${Date.now()}`,
					name: patch.name ?? "New dish",
					description: patch.description ?? "",
					price: patch.price ?? 0,
					category: patch.category ?? "sides",
					image: patch.image ?? "/food/jollof.jpg",
					spice: patch.spice ?? 0,
					popular: patch.popular ?? false,
					vegetarian: patch.vegetarian ?? false,
					available: patch.available ?? true,
					ingredients: patch.ingredients ?? [],
					customizable: patch.customizable ?? true
				});
				setCreating(false);
			}
		}, "create")
	] });
}
function ItemDialog({ open, item, onOpenChange, onSave }) {
	const [name, setName] = (0, import_react.useState)(item?.name ?? "");
	const [description, setDescription] = (0, import_react.useState)(item?.description ?? "");
	const [price, setPrice] = (0, import_react.useState)(item?.price ?? 0);
	const [category, setCategory] = (0, import_react.useState)(item?.category ?? "rice");
	const [spice, setSpice] = (0, import_react.useState)(item?.spice ?? 0);
	const [popular, setPopular] = (0, import_react.useState)(item?.popular ?? false);
	const [vegetarian, setVegetarian] = (0, import_react.useState)(item?.vegetarian ?? false);
	const [available, setAvailable] = (0, import_react.useState)(item?.available ?? true);
	const [image, setImage] = (0, import_react.useState)(item?.image ?? "/food/jollof.jpg");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => {
			if (o && item) {
				setName(item.name);
				setDescription(item.description);
				setPrice(item.price);
				setCategory(item.category);
				setSpice(item.spice);
				setPopular(item.popular);
				setVegetarian(item.vegetarian);
				setAvailable(item.available);
				setImage(item.image);
			}
			onOpenChange(o);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: item ? "Edit dish" : "New dish" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Changes go live on the menu immediately." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					onSave({
						name,
						description,
						price,
						category,
						spice,
						popular,
						vegetarian,
						available,
						image
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "iname",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "iname",
							value: name,
							onChange: (e) => setName(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "idesc",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "idesc",
							value: description,
							onChange: (e) => setDescription(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iprice",
								children: "Price (₦)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iprice",
								type: "number",
								value: price,
								onChange: (e) => setPrice(Number(e.target.value))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: category,
								onValueChange: (v) => setCategory(v),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CATEGORIES.filter((c) => c !== "all").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: c,
									children: CATEGORY_LABELS[c]
								}, c)) })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "iimg",
							children: "Image"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "iimg",
							type: "file",
							accept: "image/*",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (!file) return;
								const reader = new FileReader();
								reader.onload = () => setImage(String(reader.result));
								reader.readAsDataURL(file);
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: popular,
									onChange: (e) => setPopular(e.target.checked)
								}), "Popular"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: vegetarian,
									onChange: (e) => setVegetarian(e.target.checked)
								}), "Vegetarian"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: available,
									onChange: (e) => setAvailable(e.target.checked)
								}), "Available"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: ["Spice", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "border border-line bg-paper px-2 py-1",
									value: spice,
									onChange: (e) => setSpice(Number(e.target.value)),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 0,
											children: "None"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 1,
											children: "Mild"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 2,
											children: "Medium"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 3,
											children: "Hot"
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save dish"
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminMenu as component };
