import { eq } from "drizzle-orm";
import { db } from ".";
import { player, weapons } from "./schema";

const reset = async () => {
  await db
    .update(player)
    .set({
      xp: 0,
      hp: 100,
      gold: 1000,
      weapon: 1,
    })
    .where(eq(player.id, 1));

  await db
    .update(weapons)
    .set({
      inInventory: true,
      inStore: false,
    })
    .where(eq(weapons.id, 1));

  await db
    .update(weapons)
    .set({
      inStore: true,
      inInventory: false,
    })
    .where(eq(weapons.id, 2));
  await db
    .update(weapons)
    .set({
      inStore: true,
      inInventory: false,
    })
    .where(eq(weapons.id, 3));
  await db
    .update(weapons)
    .set({
      inStore: true,
      inInventory: false,
    })
    .where(eq(weapons.id, 4));
};

reset();
console.log("Database reset!");
