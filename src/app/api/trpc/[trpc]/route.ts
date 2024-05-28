import { appRouter } from "@/server/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "trpc/api",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
