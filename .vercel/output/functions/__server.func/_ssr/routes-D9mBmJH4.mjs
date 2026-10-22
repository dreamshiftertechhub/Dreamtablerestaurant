import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as ArrowDown, h as Heart, s as ShoppingBag, u as Plus, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as FREE_DELIVERY_OVER, B as REVIEWS, E as useUi, H as cn, T as useMimi, V as SIGNATURES, _ as Button, a as SpiceDots, j as KITCHEN_CLOSES, m as formatNaira } from "./router-B3gA6S6q.mjs";
import { t as SiteShell } from "./site-shell-BCA8kksh.mjs";
import { t as FoodCard } from "./food-card-CTz9mzln.mjs";
import { n as PassLink, t as PassBoard } from "./pass-board-C33d6R6S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9mBmJH4.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		overlayNav: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signatures, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassTeaser, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlateTeaser, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryTeaser, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoyaltyTeaser, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CateringTeaser, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveTeaser, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] overflow-hidden bg-ink text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/food/hero.jpg",
				alt: "Jollof rice and fire-grilled chicken on a dark table at DreamTable, Victoria Island",
				className: "hero-zoom absolute inset-0 h-full w-full object-cover object-[72%_42%] md:object-[64%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25 md:bg-gradient-to-r md:from-ink/90 md:via-ink/55 md:to-transparent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-steam",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-steam hero-steam-b",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 pb-24 pt-28 text-center md:items-start md:px-8 md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm",
						style: { animationDelay: "0ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 rounded-full bg-ok",
							"aria-hidden": true
						}), "Open now · Delivering in Lagos"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "reveal mt-6 max-w-xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white",
						style: { animationDelay: "100ms" },
						children: [
							"Come hungry.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Leave talking."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal mt-5 max-w-md text-lg leading-snug text-white md:text-xl",
						style: { animationDelay: "200ms" },
						children: "Bold Nigerian flavours, made fresh and delivered with love."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row md:w-auto",
						style: { animationDelay: "300ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/order",
							className: "inline-flex h-12 w-full items-center justify-center gap-2 bg-brand px-7 text-[11px] font-semibold tracking-label text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_32px_-10px_rgba(215,25,32,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-4",
								"aria-hidden": true
							}), "Order now"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "inline-flex h-12 w-full items-center justify-center border border-white bg-transparent px-7 text-[11px] font-semibold tracking-label text-white transition duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
							children: "Explore menu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "reveal mt-8 flex max-w-md flex-col items-center gap-2 text-sm text-white/90 md:max-w-none md:flex-row md:gap-0",
						style: { animationDelay: "400ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Free delivery over ", formatNaira(FREE_DELIVERY_OVER)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mx-3 hidden text-white/40 md:inline",
								"aria-hidden": true,
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Freshly cooked daily" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mx-3 hidden text-white/40 md:inline",
								"aria-hidden": true,
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4.8 ★ from 1,200+ reviews" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "sr-only",
						children: ["Kitchen closes ", KITCHEN_CLOSES]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#signatures",
				className: "absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] tracking-label text-white/80",
				children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
					className: "size-4",
					"aria-hidden": true
				})]
			})
		]
	});
}
function PassTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-8 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Only at this table"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-5xl",
					children: "The pass"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-muted",
					children: "The kitchen calls a plate as it leaves the window. Order it in one tap — not a specials PDF from last week."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassLink, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassBoard, { limit: 3 })
		})]
	});
}
function Signatures() {
	const featured = SIGNATURES[0];
	const open = useUi((s) => s.openFood);
	const fav = useMimi((s) => s.favouriteIds.includes(featured?.id ?? ""));
	const toggle = useMimi((s) => s.toggleFavourite);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "signatures",
		className: "mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-label text-brand",
				children: "The kitchen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-2xl font-display text-4xl leading-tight md:text-6xl",
				children: "The ones you'll think about tomorrow."
			}),
			featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 hidden grid-cols-12 gap-10 md:grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => open(featured.id),
					className: "group relative col-span-7 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: featured.image,
						alt: featured.name,
						className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-6 top-6 font-display text-5xl text-white",
						children: "01"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-5 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-label text-muted",
							children: "Signature"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-4xl",
							children: featured.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: featured.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums",
								children: formatNaira(featured.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiceDots, { level: featured.spice })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => open(featured.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Favourite",
								onClick: () => toggle(featured.id),
								className: "grid size-11 place-items-center border border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", fav && "fill-brand text-brand") })
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex snap-x gap-5 overflow-x-auto pb-4 no-scrollbar md:mt-16 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible",
				children: SIGNATURES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: i === 0 ? "md:hidden" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
						item,
						layout: "rail"
					})
				}, item.id))
			})
		]
	});
}
function PlateTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-cream/60",
					children: "Build your plate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "You know how you like it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-cream/75",
					children: "Base, protein, sauce, extras. Watch the price change as you build. Then send it to the kitchen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "cream",
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/build",
						children: ["Build my plate ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/food/jollof.jpg",
				alt: "Jollof rice",
				className: "aspect-[4/3] w-full object-cover"
			})]
		})
	});
}
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-label text-brand",
				children: "From the table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-xl font-display text-4xl md:text-6xl",
				children: "Don't take our word for it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-16",
				children: REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: `grid items-center gap-8 md:grid-cols-12 ${i % 2 === 1 ? "md:text-right" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: r.image,
						alt: "",
						className: `aspect-[4/3] w-full object-cover md:col-span-5 ${i % 2 === 1 ? "md:col-start-8" : ""}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `md:col-span-6 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl leading-snug md:text-5xl",
							children: [
								"“",
								r.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-6 text-sm text-muted",
							children: [
								r.name,
								" · ",
								r.dish
							]
						})]
					})]
				}, r.name))
			})
		]
	});
}
function StoryTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/food/chicken.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-4 py-28 text-center text-white md:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-label",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-6xl",
						children: "Food first. Everything else follows."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-lg text-white/80",
						children: "DreamTable was created around one simple idea — food should bring people together."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "inverse",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/story",
							children: "Read the story"
						})
					})
				]
			})
		]
	});
}
function LoyaltyTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-20 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 border-y border-line py-16 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-navy",
					children: "The Circle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Points for showing up hungry."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-muted",
					children: "Earn on every order. Trade them for sides, drinks, or a main on us."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "navy",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/loyalty",
						children: "See your table"
					})
				})
			})]
		})
	});
}
function CateringTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 border-y border-line py-16 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-brand",
					children: "Private dining"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Birthdays. Boardrooms. The whole street."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-muted",
					children: "Catering from twenty plates. A private room upstairs for twelve."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catering",
						children: "Plan an event"
					})
				})
			})]
		})
	});
}
function ReserveTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pb-8 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-brand px-6 py-14 text-white md:px-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-label text-white/70",
					children: "Tonight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl md:text-6xl",
					children: "Your table is waiting."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-white/80",
					children: "Date night, birthdays, the long overdue catch-up."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "inverse",
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reservations",
						children: "Reserve table"
					})
				})
			]
		})
	});
}
//#endregion
export { Home as component };
