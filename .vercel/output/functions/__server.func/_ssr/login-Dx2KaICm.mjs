import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as GROK_PROVIDERS } from "./server-ByPMY43R.mjs";
import { _ as Button, g as Input, i as Route$17, s as Label } from "./router-Cg2LEUbK.mjs";
import { r as signIn, t as authClient } from "./client-CKm3B32O.mjs";
import { t as Logo } from "./logo-BdXbkEur.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dx2KaICm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BEARER_KEY = "grok-auth.bearer-token";
/** Preview iframes can't read the session cookie, so keep the token the client already uses. */
function rememberSessionToken(token) {
	if (typeof window === "undefined" || !token) return;
	try {
		window.sessionStorage.setItem(BEARER_KEY, token);
	} catch {}
}
function LoginPage() {
	const next = Route$17.useSearch().next ?? "/account";
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setError("");
		setPending(true);
		try {
			const res = await fetch(mode === "up" ? "/api/auth/sign-up/email" : "/api/auth/sign-in/email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify(mode === "up" ? {
					name,
					email,
					password
				} : {
					email,
					password
				})
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.message ?? "Those details didn't match.");
			rememberSessionToken(res.headers.get("set-auth-token") ?? data?.token);
			await authClient.getSession();
			navigate({ to: next === "/admin" ? "/admin" : "/account" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Sign-in failed.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-cream px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "DreamTable home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "lg" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-5xl",
					children: mode === "in" ? "Welcome back." : "Take a seat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Guests keep their orders and favourites. The owner and staff use the same door for the kitchen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 space-y-4",
						onSubmit,
						children: [
							mode === "up" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: name,
									onChange: (e) => setName(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									minLength: 8,
									value: password,
									onChange: (e) => setPassword(e.target.value),
									required: true
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brand",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full",
								disabled: pending,
								children: pending ? "One moment…" : mode === "in" ? "Sign in" : "Create account"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-4 text-sm text-muted underline-offset-4 hover:underline",
						onClick: () => {
							setMode(mode === "in" ? "up" : "in");
							setError("");
						},
						children: mode === "in" ? "New here? Create an account" : "Already have a seat? Sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-2",
						children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "h-12 w-full border border-line bg-paper text-[11px] font-semibold tracking-label",
							onClick: () => void signIn(p.providerId, { callbackURL: next === "/admin" ? "/admin" : "/account" }),
							children: ["Continue with ", p.label]
						}, p.providerId))
					})
				] })
			]
		})
	});
}
//#endregion
export { LoginPage as component };
