import { player, weapons } from "@/server/db/schema";
import { procedure, router } from "../../trpc";
import { db } from "@/server/db";
import { eq, ne } from "drizzle-orm";

export const weaponRouter = router({
  toBuy: procedure.query(async () => {
    const res = await db
      .select()
      .from(weapons)
      .where(eq(weapons.inStore, true))
      .limit(1);
    return res;
  }),
  toSell: procedure.query(async () => {
    const res = await db
      .select()
      .from(weapons)
      .where(eq(weapons.inStore, false) && ne(weapons.id, player.weapon))
      .limit(1);
    return res;
  }),
});
