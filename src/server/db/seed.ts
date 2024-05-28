import { db } from ".";
import { player, weapons } from "./schema";

const seed = async () => {
  await db.insert(weapons).values([
    { name: "stick", power: 5, inStore: false, inInventory: true },
    { name: "dagger", power: 10 },
    { name: "claw hammer", power: 20 },
    { name: "sword", power: 30 },
  ]);
  await db.insert(player).values({
    id: 1,
  });
};

seed();
console.log("Database seeded!");
