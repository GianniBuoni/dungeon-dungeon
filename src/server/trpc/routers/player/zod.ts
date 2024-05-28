import { z } from "zod";

export const buyHealthInput = z.object({
  hp: z.number(),
  gold: z.number(),
});

export type BuyHealthInput = z.infer<typeof buyHealthInput>;
