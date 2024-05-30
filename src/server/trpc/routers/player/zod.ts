import { z } from "zod";
import { caller } from "@/server/trpc";

export type Player = Awaited<ReturnType<typeof caller.player.stats>>;

export const updateInput = z.object({
  hp: z.optional(z.number()),
  gold: z.number(),
  nextWeaponId: z.optional(z.number()),
  inStore: z.optional(z.boolean()),
});

export type UpdateInput = z.infer<typeof updateInput>;
