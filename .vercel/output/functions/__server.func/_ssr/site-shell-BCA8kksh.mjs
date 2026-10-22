import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as Search, l as Receipt, m as House, n as UtensilsCrossed, p as Menu, r as User, s as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
import { E as useUi, H as cn, L as RESTAURANT_ADDRESS, R as RESTAURANT_PHONE, w as useCartCount } from "./router-B3gA6S6q.mjs";
import { n as useCurrentUserState } from "./use-current-user-Bl-mknHK.mjs";
import { t as Logo } from "./logo-D2chpiXU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BCA8kksh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/order",
		label: "Order"
	},
	{
		to: "/reservations",
		label: "Reservations"
	},
	{
		to: "/catering",
		label: "Catering"
	},
	{
		to: "/story",
		label: "Our Story"
	}
];
function Navbar({ overlay = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const count = useCartCount();
	const pulse = useUi((s) => s.cartPulse);
	const setCart = useUi((s) => s.setCartOpen);
	const setSearch = useUi((s) => s.setSearchOpen);
	const mobileOpen = useUi((s) => s.mobileMenuOpen);
	const setMobile = useUi((s) => s.setMobileMenuOpen);
	const { user, isPending } = useCurrentUserState();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMobile(false);
	}, [pathname, setMobile]);
	const darkBar = overlay && !mobileOpen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,color,border-color,backdrop-filter] duration-300", darkBar && scrolled && "border-b border-white/10 bg-ink/85 text-white backdrop-blur-md", darkBar && !scrolled && "border-b border-transparent bg-transparent text-white", !darkBar && "border-b border-line bg-cream/95 text-ink"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-4 md:h-[4.75rem] md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					"aria-label": "DreamTable home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { onDark: darkBar })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("text-[13px] font-semibold tracking-[0.18em] uppercase underline-offset-8 transition-colors hover:underline hover:decoration-brand", pathname === l.to && "underline decoration-brand"),
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							label: "Search",
							onClick: () => setSearch(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-[18px]" })
						}),
						!isPending && !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "px-2 text-[11px] font-semibold tracking-label",
							children: "Sign in"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							"aria-label": "Account",
							className: "grid size-11 place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hidden px-2 text-[11px] font-semibold tracking-label sm:inline",
							children: "Kitchen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": `Cart, ${count} items`,
							onClick: () => setCart(true),
							className: "relative grid size-11 place-items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: cn("size-[18px]", pulse > 0 && "origin-center") }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-1.5 top-1.5 grid size-4 place-items-center bg-brand text-[9px] font-bold text-white",
								children: count
							}, pulse)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center lg:hidden",
							"aria-label": mobileOpen ? "Close menu" : "Open menu",
							onClick: () => setMobile(!mobileOpen),
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-[18px]" })
						})
					]
				})
			]
		})
	}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 flex flex-col bg-cream px-6 pt-24 text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-col gap-2",
			"aria-label": "Mobile",
			children: [
				LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "border-b border-line py-4 font-display text-4xl",
					children: l.label
				}, l.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pass",
					className: "border-b border-line py-4 font-display text-4xl",
					children: "The pass"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "border-b border-line py-4 font-display text-4xl",
					children: "Kitchen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: user ? "/account" : "/login",
					className: "border-b border-line py-4 font-display text-4xl",
					children: user ? "Account" : "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/build",
					className: "py-4 font-display text-4xl text-brand",
					children: "Build your plate"
				})
			]
		})
	})] });
}
function IconBtn({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid size-11 place-items-center",
		children
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-line bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						size: "footer",
						onDark: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-cream/70",
						children: "Bold Nigerian flavours, made fresh and delivered with love. Victoria Island, Lagos."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold tracking-label text-cream/50",
							children: "Visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed",
							children: RESTAURANT_ADDRESS
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: RESTAURANT_PHONE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-cream/70",
							children: "Kitchen closes 10:30 PM"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-label text-cream/50",
						children: "Kitchen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								className: "hover:text-brand",
								children: "Menu"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/build",
								className: "hover:text-brand",
								children: "Build your plate"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reservations",
								className: "hover:text-brand",
								children: "Reservations"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catering",
								className: "hover:text-brand",
								children: "Catering"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/story",
								className: "hover:text-brand",
								children: "Our story"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-label text-cream/50",
						children: "House"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pass",
								className: "hover:text-brand",
								children: "The pass"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "hover:text-brand",
								children: "Sign in"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/loyalty",
								className: "hover:text-brand",
								children: "The Circle"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "hover:text-brand",
								children: "Gallery"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "hover:text-brand",
								children: "Questions"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-brand",
								children: "Visit & contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/2342013301840",
								className: "hover:text-brand",
								children: "WhatsApp"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								className: "hover:text-brand",
								children: "Terms & privacy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin",
								className: "hover:text-brand",
								children: "Order board"
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 px-4 py-6 text-center text-[11px] tracking-label text-cream/40",
			children: "DreamTable · Victoria Island, Lagos"
		})]
	});
}
var ITEMS = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/menu",
		label: "Menu",
		icon: UtensilsCrossed
	},
	{
		to: "/account",
		label: "Orders",
		icon: Receipt,
		hash: "orders"
	},
	{
		to: "/account",
		label: "Account",
		icon: User
	}
];
function MobileNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (pathname.startsWith("/admin")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 pb-[env(safe-area-inset-bottom)] md:hidden",
		"aria-label": "Mobile tabs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-4",
			children: ITEMS.map((item) => {
				const active = item.label === "Home" ? pathname === "/" : item.label === "Menu" ? pathname.startsWith("/menu") || pathname.startsWith("/order") : item.label === "Orders" ? pathname.startsWith("/track") || pathname.startsWith("/confirmation") : pathname.startsWith("/account") || pathname.startsWith("/loyalty");
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: cn("flex h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-label", active ? "text-brand" : "text-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
				}) }, item.label);
			})
		})
	});
}
function SiteShell({ children, overlayNav = false, footer = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream pb-16 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { overlay: overlayNav }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {})
		]
	});
}
//#endregion
export { SiteShell as t };
