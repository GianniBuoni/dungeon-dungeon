import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const player = sqliteTable("player", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  xp: integer("xp").notNull().default(0),
  hp: integer("hp").notNull().default(100),
  gold: integer("gold").notNull().default(50),
  weapon: integer("weapon")
    .notNull()
    .default(1)
    .references(() => weapons.id),
});

export const weapons = sqliteTable("weapons", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name", { length: 50 }).notNull(),
  power: integer("power").notNull(),
  inStore: integer("in_store", { mode: "boolean" }).notNull().default(true),
});
