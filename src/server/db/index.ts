import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/env";

const client = createClient({
  url: env.DB_URL,
});

export const db = drizzle(client);
