import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { c as getSql, i as auth } from "./server-ByPMY43R.mjs";
import { t as authMiddleware } from "./middleware-PpubCLc8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house.functions-CFdzhJNW.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ROLES = [
	"owner",
	"kitchen",
	"host",
	"floor"
];
async function identity(sql, userId) {
	return (await sql`
    select id, email, name from "user" where id = ${userId} limit 1
  `)[0] ?? null;
}
async function seatOf(sql, userId) {
	const row = (await sql`
    select user_id, email, name, role from house_members where user_id = ${userId} limit 1
  `)[0];
	if (!row || !ROLES.includes(row.role)) return null;
	return {
		userId: row.user_id,
		email: row.email,
		name: row.name,
		role: row.role
	};
}
var getMySeat_createServerFn_handler = createServerRpc({
	id: "eeabd46252a53ee76d320f409619bfaa23c7bbf18480fc585df5f92201e3c2b2",
	name: "getMySeat",
	filename: "src/lib/house.functions.ts"
}, (opts) => getMySeat.__executeServer(opts));
var getMySeat = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getMySeat_createServerFn_handler, async ({ context }) => {
	return seatOf(await getSql(), context.userId);
});
var claimHouse_createServerFn_handler = createServerRpc({
	id: "6381f83f0ce2202f5aa85a83a6e75394a4689592e7535045b204fb75ca15172f",
	name: "claimHouse",
	filename: "src/lib/house.functions.ts"
}, (opts) => claimHouse.__executeServer(opts));
var claimHouse = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(claimHouse_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	const existing = await seatOf(sql, context.userId);
	if (existing) return {
		ok: true,
		seat: existing
	};
	if (((await sql`select count(*)::int as n from house_members where role = 'owner'`)[0]?.n ?? 0) > 0) return {
		ok: false,
		error: "This house already has an owner. Ask them for a staff login."
	};
	const who = await identity(sql, context.userId);
	if (!who) return {
		ok: false,
		error: "Sign in again, then take the keys."
	};
	await sql`
      insert into house_members (user_id, email, name, role)
      values (${who.id}, ${who.email}, ${who.name}, 'owner')
    `;
	return {
		ok: true,
		seat: {
			userId: who.id,
			email: who.email,
			name: who.name,
			role: "owner"
		}
	};
});
var listStaff_createServerFn_handler = createServerRpc({
	id: "60cdfa6234c9666800380b6fe381131b95670243d81d9fe97f1f0e6a9308a192",
	name: "listStaff",
	filename: "src/lib/house.functions.ts"
}, (opts) => listStaff.__executeServer(opts));
var listStaff = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listStaff_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	if ((await seatOf(sql, context.userId))?.role !== "owner") return {
		ok: false,
		error: "Only the owner sees the staff list.",
		staff: []
	};
	return {
		ok: true,
		staff: (await sql`
      select user_id, email, name, role from house_members order by created_at asc
    `).filter((r) => ROLES.includes(r.role)).map((r) => ({
			userId: r.user_id,
			email: r.email,
			name: r.name,
			role: r.role
		}))
	};
});
var addStaff_createServerFn_handler = createServerRpc({
	id: "c2eb1e4609f219a45a60972fbc7ebabcb4023abd88a41c2fdeed460fdd5c5166",
	name: "addStaff",
	filename: "src/lib/house.functions.ts"
}, (opts) => addStaff.__executeServer(opts));
var addStaff = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(addStaff_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	if ((await seatOf(sql, context.userId))?.role !== "owner") return {
		ok: false,
		error: "Only the owner can add staff."
	};
	const role = data.role;
	if (role !== "kitchen" && role !== "host" && role !== "floor") return {
		ok: false,
		error: "Pick kitchen, host, or floor."
	};
	const email = data.email.trim().toLowerCase();
	const name = data.name.trim();
	if (!name || !email.includes("@") || data.password.length < 8) return {
		ok: false,
		error: "Name, a real email, and a password of 8+ characters."
	};
	try {
		const id = (await auth.api.signUpEmail({ body: {
			email,
			password: data.password,
			name
		} }))?.user?.id;
		if (!id) return {
			ok: false,
			error: "That account was not created."
		};
		await sql`
        insert into house_members (user_id, email, name, role)
        values (${id}, ${email}, ${name}, ${role})
      `;
		return { ok: true };
	} catch (error) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : "Could not add them."
		};
	}
});
var removeStaff_createServerFn_handler = createServerRpc({
	id: "32ae221cc0abce89319d8fb5a8f572b01227c0c3fe77e75a4fc7ad7c325a39b3",
	name: "removeStaff",
	filename: "src/lib/house.functions.ts"
}, (opts) => removeStaff.__executeServer(opts));
var removeStaff = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(removeStaff_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	if ((await seatOf(sql, context.userId))?.role !== "owner") return {
		ok: false,
		error: "Only the owner can remove staff."
	};
	if (data.userId === context.userId) return {
		ok: false,
		error: "You can't remove yourself."
	};
	await sql`delete from house_members where user_id = ${data.userId} and role <> 'owner'`;
	return { ok: true };
});
var resetKitchen_createServerFn_handler = createServerRpc({
	id: "e1d3526cc039327a6cafafe86b151f0b54439910a1cec3fa379b1ecc56a9fd14",
	name: "resetKitchen",
	filename: "src/lib/house.functions.ts"
}, (opts) => resetKitchen.__executeServer(opts));
var resetKitchen = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(resetKitchen_createServerFn_handler, async () => {
	await (await getSql())`delete from house_members`;
	return { ok: true };
});
var fileKitchenOrder_createServerFn_handler = createServerRpc({
	id: "5bab000e38c415289bf59f32b0b20bbb2e8c6061e07d71e7607448dbd7cb2bea",
	name: "fileKitchenOrder",
	filename: "src/lib/house.functions.ts"
}, (opts) => fileKitchenOrder.__executeServer(opts));
var fileKitchenOrder = createServerFn({ method: "POST" }).validator((data) => data).handler(fileKitchenOrder_createServerFn_handler, async ({ data }) => {
	const order = data.order;
	if (!order?.id || !order.customer?.name || !Array.isArray(order.items) || order.items.length === 0) return {
		ok: false,
		error: "That order is incomplete."
	};
	await (await getSql())`
      insert into house_orders (id, user_id, payload, status)
      values (${order.id}, ${"guest"}, ${JSON.stringify(order)}, ${order.status})
      on conflict (id) do update set payload = excluded.payload, status = excluded.status
    `;
	return { ok: true };
});
var saveHouseOrder_createServerFn_handler = createServerRpc({
	id: "4ccb6fc1addf5ae192997246738110549c4a68717894426b4a8df4f98f890aad",
	name: "saveHouseOrder",
	filename: "src/lib/house.functions.ts"
}, (opts) => saveHouseOrder.__executeServer(opts));
var saveHouseOrder = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(saveHouseOrder_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	const order = data.order;
	await sql`
      insert into house_orders (id, user_id, payload, status)
      values (${order.id}, ${context.userId}, ${JSON.stringify(order)}, ${order.status})
      on conflict (id) do update set payload = excluded.payload, status = excluded.status
    `;
	return { ok: true };
});
var getKitchenOrder_createServerFn_handler = createServerRpc({
	id: "f6a03062ec9246c47b4f45681d8900951cc08240a28829147306539f3a4e6ca8",
	name: "getKitchenOrder",
	filename: "src/lib/house.functions.ts"
}, (opts) => getKitchenOrder.__executeServer(opts));
var getKitchenOrder = createServerFn({ method: "POST" }).validator((data) => data).handler(getKitchenOrder_createServerFn_handler, async ({ data }) => {
	const rows = await (await getSql())`
      select payload from house_orders where lower(id) = lower(${data.id}) limit 1
    `;
	if (!rows[0]) return null;
	return JSON.parse(rows[0].payload);
});
var listMyOrders_createServerFn_handler = createServerRpc({
	id: "ee9b6e32ddd38efb436e9a0e5f57af496b259599fa4e50260b0ea3aea66dd065",
	name: "listMyOrders",
	filename: "src/lib/house.functions.ts"
}, (opts) => listMyOrders.__executeServer(opts));
var listMyOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listMyOrders_createServerFn_handler, async ({ context }) => {
	return (await (await getSql())`
      select payload from house_orders where user_id = ${context.userId} order by created_at desc
    `).map((r) => JSON.parse(r.payload));
});
var listHouseOrders_createServerFn_handler = createServerRpc({
	id: "f30969d1d62b594dcecc78dee15155f2a67fc86feef204041a680a99944eeebb",
	name: "listHouseOrders",
	filename: "src/lib/house.functions.ts"
}, (opts) => listHouseOrders.__executeServer(opts));
var listHouseOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listHouseOrders_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	if (!await seatOf(sql, context.userId)) return [];
	return (await sql`
      select payload from house_orders order by created_at desc limit 80
    `).map((r) => JSON.parse(r.payload));
});
var setHouseOrderStatus_createServerFn_handler = createServerRpc({
	id: "83cc12bcc23e4c891715bfc206c7d527e5d6a859e1facbdecacedb0e38f59703",
	name: "setHouseOrderStatus",
	filename: "src/lib/house.functions.ts"
}, (opts) => setHouseOrderStatus.__executeServer(opts));
var setHouseOrderStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(setHouseOrderStatus_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	if (!await seatOf(sql, context.userId)) return { ok: false };
	const row = (await sql`select payload from house_orders where id = ${data.id} limit 1`)[0];
	if (!row) return { ok: false };
	const order = JSON.parse(row.payload);
	order.status = data.status;
	await sql`
      update house_orders set status = ${data.status}, payload = ${JSON.stringify(order)} where id = ${data.id}
    `;
	return { ok: true };
});
var listPassCalls_createServerFn_handler = createServerRpc({
	id: "04c788ab4083b781b0c10b4b3e42530994cc7239787925c2ca436c881cf14d4c",
	name: "listPassCalls",
	filename: "src/lib/house.functions.ts"
}, (opts) => listPassCalls.__executeServer(opts));
var listPassCalls = createServerFn({ method: "GET" }).handler(listPassCalls_createServerFn_handler, async () => {
	return (await (await getSql())`
    select menu_item_id, note, called_at from pass_calls order by called_at desc
  `).map((r) => ({
		menuItemId: r.menu_item_id,
		note: r.note,
		calledAt: String(r.called_at)
	}));
});
var setPassCall_createServerFn_handler = createServerRpc({
	id: "2102d7ecf4f704752bad2be36be4e1afb86eb60d99f49d835b0d7bb11b41cae6",
	name: "setPassCall",
	filename: "src/lib/house.functions.ts"
}, (opts) => setPassCall.__executeServer(opts));
var setPassCall = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(setPassCall_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	if (!await seatOf(sql, context.userId)) return {
		ok: false,
		error: "The pass is for the house."
	};
	if (!data.on) {
		await sql`delete from pass_calls where menu_item_id = ${data.menuItemId}`;
		return { ok: true };
	}
	const note = data.note.trim().slice(0, 80);
	await sql`
      insert into pass_calls (menu_item_id, note)
      values (${data.menuItemId}, ${note})
      on conflict (menu_item_id) do update set note = excluded.note, called_at = now()
    `;
	return { ok: true };
});
//#endregion
export { addStaff_createServerFn_handler, claimHouse_createServerFn_handler, fileKitchenOrder_createServerFn_handler, getKitchenOrder_createServerFn_handler, getMySeat_createServerFn_handler, listHouseOrders_createServerFn_handler, listMyOrders_createServerFn_handler, listPassCalls_createServerFn_handler, listStaff_createServerFn_handler, removeStaff_createServerFn_handler, resetKitchen_createServerFn_handler, saveHouseOrder_createServerFn_handler, setHouseOrderStatus_createServerFn_handler, setPassCall_createServerFn_handler };
