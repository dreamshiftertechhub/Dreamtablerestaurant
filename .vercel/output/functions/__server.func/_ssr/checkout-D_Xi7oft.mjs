import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as useActivePromo, H as cn, S as lineTotal, T as useMimi, _ as Button, b as deliveryFeeFor, g as Input, m as formatNaira, o as Textarea, s as Label, v as applyPromo, y as cartSubtotal } from "./router-B3gA6S6q.mjs";
import { n as useCurrentUserState } from "./use-current-user-Bl-mknHK.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
import { l as saveHouseOrder } from "./house.functions-DsPTHCXb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-D_Xi7oft.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const cart = useMimi((s) => s.cart);
	const profile = useMimi((s) => s.profile);
	const addresses = useMimi((s) => s.addresses);
	const credit = useMimi((s) => s.discountCredit);
	const promo = useActivePromo();
	const place = useMimi((s) => s.placeOrder);
	const navigate = useNavigate();
	const { user } = useCurrentUserState();
	const [step, setStep] = (0, import_react.useState)(1);
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [phone, setPhone] = (0, import_react.useState)(profile.phone);
	const [address, setAddress] = (0, import_react.useState)(addresses[0]?.line ?? "");
	const [apartment, setApartment] = (0, import_react.useState)(addresses[0]?.apartment ?? "");
	const [instructions, setInstructions] = (0, import_react.useState)("Call when outside.");
	const [fulfillment, setFulfillment] = (0, import_react.useState)("delivery");
	const [payment, setPayment] = (0, import_react.useState)("card");
	const [cardName, setCardName] = (0, import_react.useState)(profile.name);
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvv, setCvv] = (0, import_react.useState)("");
	const subtotal = cartSubtotal(cart);
	const discount = applyPromo(subtotal, promo) + credit;
	const delivery = deliveryFeeFor(subtotal, fulfillment);
	const total = Math.max(0, subtotal + delivery - discount);
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Your table is waiting."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Add something delicious first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					children: "Explore menu"
				})
			})
		]
	}) });
	function next() {
		if (step < 4) setStep(step + 1);
		else {
			const order = place({
				fulfillment,
				payment,
				customer: {
					name,
					phone,
					address,
					apartment,
					instructions
				}
			});
			if (user && !user.isDevFallback) saveHouseOrder({ data: { order } }).catch(() => {});
			navigate({
				to: "/confirmation/$orderId",
				params: { orderId: order.id }
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 md:grid-cols-12 md:px-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Checkout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "Almost there."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 flex gap-4 text-[11px] tracking-label",
					children: [
						"Delivery",
						"Method",
						"Payment",
						"Review"
					].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn(step === i + 1 ? "text-brand" : "text-subtle"),
						children: [
							"0",
							i + 1,
							" ",
							l
						]
					}, l))
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							htmlFor: "name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone number",
							htmlFor: "phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Delivery address",
							htmlFor: "address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "address",
								value: address,
								onChange: (e) => setAddress(e.target.value),
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Apartment / house number",
							htmlFor: "apt",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "apt",
								value: apartment,
								onChange: (e) => setApartment(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Delivery instructions",
							htmlFor: "inst",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "inst",
								value: instructions,
								onChange: (e) => setInstructions(e.target.value),
								placeholder: "Call when outside. Leave with reception."
							})
						})
					]
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						on: fulfillment === "delivery",
						title: "Delivery",
						copy: "28 minutes · Victoria Island kitchen to your door.",
						onClick: () => setFulfillment("delivery")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						on: fulfillment === "pickup",
						title: "Pickup",
						copy: "Ready in about 18 minutes at 14 Adeola Odeku Street.",
						onClick: () => setFulfillment("pickup")
					})]
				}),
				step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							on: payment === "card",
							title: "Card",
							copy: "Visa, Mastercard, Verve.",
							onClick: () => setPayment("card")
						}),
						payment === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 border border-line bg-paper p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name on card",
									htmlFor: "card-name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "card-name",
										value: cardName,
										onChange: (e) => setCardName(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Card number",
									htmlFor: "card-n",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "card-n",
										inputMode: "numeric",
										autoComplete: "cc-number",
										placeholder: "5399 1234 5678 9010",
										value: cardNumber,
										onChange: (e) => setCardNumber(e.target.value.replace(/[^\d ]/g, "").slice(0, 19))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expiry",
										htmlFor: "exp",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "exp",
											placeholder: "MM/YY",
											value: expiry,
											onChange: (e) => setExpiry(e.target.value.slice(0, 5))
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "CVV",
										htmlFor: "cvv",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "cvv",
											inputMode: "numeric",
											placeholder: "123",
											value: cvv,
											onChange: (e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							on: payment === "transfer",
							title: "Bank transfer",
							copy: "Account details on the next screen.",
							onClick: () => setPayment("transfer")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							on: payment === "cash",
							title: "Cash on delivery",
							copy: "Exact change is a kindness.",
							onClick: () => setPayment("cash")
						})
					]
				}),
				step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							name,
							" · ",
							phone
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: fulfillment === "delivery" ? `${address}${apartment ? `, ${apartment}` : ""}` : "Pickup at DreamTable, Victoria Island"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted",
							children: [
								"Paying by ",
								payment === "card" ? "card" : payment === "transfer" ? "transfer" : "cash",
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex gap-3",
					children: [step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setStep(step - 1),
						children: "Back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: next,
						disabled: step === 1 && (!name || !phone || !address) || step === 3 && payment === "card" && (cardNumber.replace(/\s/g, "").length < 12 || !expiry || cvv.length < 3),
						children: step === 4 ? "Place order" : "Continue"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "md:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-paper p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-label text-muted",
						children: "Your bag"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: cart.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								l.quantity,
								"× ",
								l.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatNaira(lineTotal(l))
							})]
						}, l.lineId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-1.5 border-t border-line pt-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatNaira(subtotal)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: fulfillment === "pickup" ? "Pickup" : "Delivery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: delivery === 0 ? "—" : formatNaira(delivery)
								})]
							}),
							discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-ok",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "tabular-nums",
									children: ["−", formatNaira(discount)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between pt-2 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatNaira(total)
								})]
							})
						]
					})
				]
			})
		})]
	}) });
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Choice({ on, title, copy, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("w-full border p-5 text-left", on ? "border-ink bg-paper" : "border-line"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: copy
		})]
	});
}
//#endregion
export { CheckoutPage as component };
