import { weapons } from "@/server/db/schema";
import { procedure, router } from "../../trpc";
import { db } from "@/server/db";
import { and, eq, ne } from "drizzle-orm";
import { z } from "zod";

export const weaponRouter = router({
  toBuy: procedure.query(async () => {
    const res = await db
      .select()
      .from(weapons)
      .where(eq(weapons.inStore, true))
      .limit(1);
    return res;
  }),
  toSell: procedure.input(z.number()).query(async (opts) => {
    const res = await db
      .select()
      .from(weapons)
      .where(and(eq(weapons.inStore, false), ne(weapons.id, opts.input)))
      .limit(1);
    return res;
  }),
});
