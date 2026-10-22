import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as useUi, H as cn, N as ORDER_STATUS_LABELS, T as useMimi, _ as Button, g as Input, h as formatTime, m as formatNaira, p as formatDate, s as Label } from "./router-B3gA6S6q.mjs";
import { n as useCurrentUserState } from "./use-current-user-Bl-mknHK.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
import { t as FoodCard } from "./food-card-CTz9mzln.mjs";
import { t as UserButton } from "./gates-jyome2l9.mjs";
import { a as listMyOrders } from "./house.functions-DsPTHCXb.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DYNG0OI9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("flex gap-6 border-b border-line", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("relative -mb-px pb-3 text-[11px] font-semibold tracking-label text-muted transition-colors", "data-[state=active]:text-ink data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:bottom-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-brand", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-6 outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function AccountPage() {
	const { user, isPending } = useCurrentUserState();
	const profile = useMimi((s) => s.profile);
	const update = useMimi((s) => s.updateProfile);
	const [remote, setRemote] = (0, import_react.useState)([]);
	const orders = useMimi((s) => s.orders.filter((o) => o.customer.phone === profile.phone || o.customer.name === profile.name));
	const mine = [...remote, ...orders.filter((o) => !remote.some((r) => r.id === o.id))];
	const items = useMimi((s) => s.items);
	const favs = useMimi((s) => s.favouriteIds);
	const favItems = items.filter((i) => favs.includes(i.id));
	const addresses = useMimi((s) => s.addresses);
	const addAddress = useMimi((s) => s.addAddress);
	const removeAddress = useMimi((s) => s.removeAddress);
	const reservations = useMimi((s) => s.reservations.filter((r) => r.email === profile.email || r.name === profile.name));
	const points = useMimi((s) => s.points);
	const add = useMimi((s) => s.addToCart);
	const setCart = useUi((s) => s.setCartOpen);
	const [label, setLabel] = (0, import_react.useState)("New");
	const [line, setLine] = (0, import_react.useState)("");
	const [apt, setApt] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [phone, setPhone] = (0, import_react.useState)(profile.phone);
	const [email, setEmail] = (0, import_react.useState)(profile.email);
	const prefs = useMimi((s) => s.prefs ?? {
		receipts: true,
		sms: true
	});
	const setPref = useMimi((s) => s.setPref);
	(0, import_react.useEffect)(() => {
		if (!user || user.isDevFallback) return;
		if (profile.email === "adaeze@email.com" && user.primaryEmail) {
			const nextName = user.displayName || profile.name;
			update({
				name: nextName,
				email: user.primaryEmail
			});
			setName(nextName);
			setEmail(user.primaryEmail);
		}
		listMyOrders().then(setRemote).catch(() => {});
	}, [user]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 pb-16 pt-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl",
					children: isPending ? "Your table" : user ? `${(user.displayName ?? name).split(" ")[0]}'s table` : "Your table"
				})] }), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {}) : !isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						search: { next: "/account" },
						children: "Sign in"
					})
				})]
			}),
			!user && !isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-lg text-sm text-muted",
				children: "Sign in to keep orders, favourites, and points on this table. Guests can still order without an account."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "orders",
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "orders",
								children: "Orders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "favourites",
								children: "Favourites"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "addresses",
								children: "Addresses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "reservations",
								children: "Reservations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "table",
								children: "The Circle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "profile",
								children: "Profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "settings",
								children: "Settings"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "orders",
						children: mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
							text: "Your first DreamTable order is waiting.",
							to: "/menu",
							cta: "Order now"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-6",
							children: mine.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border border-line p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold",
											children: ["#", o.id]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: [
												formatDate(o.createdAt),
												" · ",
												formatTime(o.createdAt),
												" · ",
												ORDER_STATUS_LABELS[o.status]
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "tabular-nums",
											children: formatNaira(o.total)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: o.items.map((i) => i.name).join(", ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											onClick: () => {
												o.items.forEach((item) => add({
													menuItemId: item.menuItemId,
													name: item.name,
													image: item.image,
													unitPrice: item.unitPrice,
													quantity: item.quantity,
													protein: item.protein,
													extras: item.extras,
													spice: item.spice,
													notes: item.notes
												}));
												toast("Previous order added to your bag.");
												setCart(true);
											},
											children: "Reorder"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											variant: "outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/track/$orderId",
												params: { orderId: o.id },
												children: "Track"
											})
										})]
									})
								]
							}, o.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "favourites",
						children: favItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
							text: "Save a dish. We'll keep it warm.",
							to: "/menu",
							cta: "Browse menu"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 sm:grid-cols-2",
							children: favItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, { item }, item.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "addresses",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start justify-between gap-3 border border-line p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: a.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [a.line, a.apartment ? ` · ${a.apartment}` : ""]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => removeAddress(a.id),
									children: "Remove"
								})]
							}, a.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 grid gap-3 sm:grid-cols-2",
							onSubmit: (e) => {
								e.preventDefault();
								if (!line) return;
								addAddress({
									label,
									line,
									apartment: apt
								});
								setLine("");
								setApt("");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "al",
										children: "Label"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "al",
										value: label,
										onChange: (e) => setLabel(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "aline",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "aline",
										value: line,
										onChange: (e) => setLine(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "aapt",
										children: "Apartment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "aapt",
										value: apt,
										onChange: (e) => setApt(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										children: "Save address"
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "reservations",
						children: reservations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
							text: "No table booked yet.",
							to: "/reservations",
							cta: "Reserve"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: reservations.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border border-line p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: ["#", r.id]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										r.date,
										" · ",
										r.time,
										" · ",
										r.guests,
										" guests · ",
										r.status
									]
								})]
							}, r.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "table",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-6xl tabular-nums",
								children: points.toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: "points in The Circle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/loyalty",
									children: "See rewards"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "profile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "max-w-md space-y-4",
							onSubmit: (e) => {
								e.preventDefault();
								update({
									name,
									phone,
									email
								});
								toast("Profile saved.");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pname",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pname",
										name: "name",
										value: name,
										onChange: (e) => setName(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pphone",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pphone",
										name: "phone",
										value: phone,
										onChange: (e) => setPhone(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pemail",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pemail",
										name: "email",
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Save"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "settings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between gap-4 border-b border-line py-4 text-sm",
									children: ["Email receipts", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: prefs.receipts,
										onChange: (e) => setPref("receipts", e.target.checked)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between gap-4 border-b border-line py-4 text-sm",
									children: ["Kitchen SMS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: prefs.sms,
										onChange: (e) => setPref("sms", e.target.checked)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										prefs.receipts ? "Receipts go to your email." : "Email receipts are off.",
										" ",
										prefs.sms ? "The kitchen can text this phone." : "SMS is off."
									]
								})
							]
						})
					})
				]
			})
		]
	}) });
}
function Empty({ text, to, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl",
			children: text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to,
				children: cta
			})
		})]
	});
}
//#endregion
export { AccountPage as component };
