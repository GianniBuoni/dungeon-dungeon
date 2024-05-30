import { trpc } from "@/server/trpc/client";
import { Player } from "@/server/trpc/routers/player/zod";

export const getStats = (i: Player) => {
  const getStatsData = trpc.player.stats.useQuery(undefined, {
    initialData: i,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return getStatsData.data;
};
