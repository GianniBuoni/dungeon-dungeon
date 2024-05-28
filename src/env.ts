import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import "dotenv/config"

export const env = createEnv({
  server: {
    DB_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_TRPC_API: z.string().url(),
  },
  runtimeEnv: {
    DB_URL: process.env.DB_URL,
    NEXT_PUBLIC_TRPC_API: process.env.NEXT_PUBLIC_API_URL,
  },
});
