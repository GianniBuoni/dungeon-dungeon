"use client";

import StatsRibbon from "./StatsRibbon";
import Button from "./Button";
import { caller } from "@/server/trpc";
import { trpc } from "@/server/trpc/client";

interface Props {
  initStats: Awaited<ReturnType<typeof caller.player.stats>>
}

const ActionsHub = ( {initStats} : Props) => {
  const getData = trpc.player.stats.useQuery(undefined, {
    initialData: initStats,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  const stats = getData.data;
  return (
    <>
      <StatsRibbon stats={stats} />
      <Button hp={stats.hp} gold={stats.gold} />
    </>
  );
};

export default ActionsHub;
