import { playerRouter } from "./routers/player/playerRouter";
import { createCallerFactory, router } from "./trpc";

export const appRouter = router({
  player: playerRouter,
});

const createCaller = createCallerFactory(appRouter);
export const caller = createCaller(appRouter)
export type AppRouter = typeof appRouter;
