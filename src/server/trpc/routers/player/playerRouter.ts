import { db } from "@/server/db";
import { procedure, router } from "@/server/trpc/trpc";
import { player, weapons } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { updateInput } from "./zod";

export const playerRouter = router({
  stats: procedure.query(async () => {
    const res = await db
      .select({
        id: player.id,
        xp: player.xp,
        hp: player.hp,
        gold: player.gold,
        weapon: weapons.name,
      })
      .from(player)
      .innerJoin(weapons, eq(player.weapon, weapons.id));
    return res[0];
  }),
  nextWeapon: procedure.query(async () => {
    const res = await db
      .select()
      .from(weapons)
      .where(eq(weapons.inStore, true))
      .limit(1);
    return res[0];
  }),
  update: procedure.input(updateInput).mutation(async (opts) => {
    await db
      .update(player)
      .set({
        hp: opts.input.hp,
        gold: opts.input.gold,
      })
      .where(eq(player.id, 1));
    if (opts.input.nextWeaponId) {
      await db
        .update(weapons)
        .set({
          inStore: opts.input.inStore,
          inInventory: opts.input.inInventory,
        })
        .where(eq(weapons.id, opts.input.nextWeaponId));
    }
    return true;
  }),
});
