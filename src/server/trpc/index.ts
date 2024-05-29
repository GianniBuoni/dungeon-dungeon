import { playerRouter } from "./routers/player/playerRouter";
import { weaponRouter } from "./routers/weapons/weaponsRouter";
import { createCallerFactory, router } from "./trpc";

export const appRouter = router({
  player: playerRouter,
  weapon: weaponRouter,
});

const createCaller = createCallerFactory(appRouter);
export const caller = createCaller(appRouter);
export type AppRouter = typeof appRouter;
