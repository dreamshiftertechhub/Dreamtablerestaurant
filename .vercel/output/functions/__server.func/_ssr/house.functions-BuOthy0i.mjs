import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-PpubCLc8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house.functions-BuOthy0i.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getMySeat = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("eeabd46252a53ee76d320f409619bfaa23c7bbf18480fc585df5f92201e3c2b2"));
var claimHouse = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("6381f83f0ce2202f5aa85a83a6e75394a4689592e7535045b204fb75ca15172f"));
var listStaff = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("60cdfa6234c9666800380b6fe381131b95670243d81d9fe97f1f0e6a9308a192"));
var addStaff = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("c2eb1e4609f219a45a60972fbc7ebabcb4023abd88a41c2fdeed460fdd5c5166"));
var removeStaff = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("32ae221cc0abce89319d8fb5a8f572b01227c0c3fe77e75a4fc7ad7c325a39b3"));
var resetKitchen = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("e1d3526cc039327a6cafafe86b151f0b54439910a1cec3fa379b1ecc56a9fd14"));
var fileKitchenOrder = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("5bab000e38c415289bf59f32b0b20bbb2e8c6061e07d71e7607448dbd7cb2bea"));
var saveHouseOrder = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("4ccb6fc1addf5ae192997246738110549c4a68717894426b4a8df4f98f890aad"));
var getKitchenOrder = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("f6a03062ec9246c47b4f45681d8900951cc08240a28829147306539f3a4e6ca8"));
var listMyOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("ee9b6e32ddd38efb436e9a0e5f57af496b259599fa4e50260b0ea3aea66dd065"));
var listHouseOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("f30969d1d62b594dcecc78dee15155f2a67fc86feef204041a680a99944eeebb"));
var setHouseOrderStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("83cc12bcc23e4c891715bfc206c7d527e5d6a859e1facbdecacedb0e38f59703"));
var listPassCalls = createServerFn({ method: "GET" }).handler(createSsrRpc("04c788ab4083b781b0c10b4b3e42530994cc7239787925c2ca436c881cf14d4c"));
var setPassCall = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("2102d7ecf4f704752bad2be36be4e1afb86eb60d99f49d835b0d7bb11b41cae6"));
//#endregion
export { getMySeat as a, listPassCalls as c, resetKitchen as d, saveHouseOrder as f, getKitchenOrder as i, listStaff as l, setPassCall as m, claimHouse as n, listHouseOrders as o, setHouseOrderStatus as p, fileKitchenOrder as r, listMyOrders as s, addStaff as t, removeStaff as u };
