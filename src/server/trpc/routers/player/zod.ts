import { z } from "zod";

export const updateInput = z.object({
  hp: z.optional(z.number()),
  gold: z.number(),
  nextWeaponId: z.optional(z.number()),
  inStore: z.optional(z.boolean()),
});

export type UpdateInput = z.infer<typeof updateInput>;
