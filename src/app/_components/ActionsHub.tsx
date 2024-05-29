"use client";

import StatsRibbon from "./StatsRibbon";
import StoreButton from "./StoreButton";
import { caller } from "@/server/trpc";
import { trpc } from "@/server/trpc/client";

export type Player = Awaited<ReturnType<typeof caller.player.stats>>;

interface Props {
  initStats: Player;
}

const ActionsHub = ({ initStats }: Props) => {
  const getStatsData = trpc.player.stats.useQuery(undefined, {
    initialData: initStats,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  const getNextWeapon = trpc.player.nextWeapon.useQuery();
  const nextWeapon = getNextWeapon.data;
  const stats = getStatsData.data;
  return (
    <>
      <StatsRibbon stats={stats} />
      <div className="flex justify-between space-x-2">
        <StoreButton
          input={{ hp: stats.hp + 30, gold: stats.gold - 10 }}
          currentGold={stats.gold}
          reqGold={10}
          alertMessage="You don't have enough gold to buy health!"
        >
          Buy Health (10 gold)
        </StoreButton>
        {nextWeapon && (
          <StoreButton
            input={{
              gold: stats.gold - 30,
              nextWeaponId: nextWeapon?.id,
              inStore: false,
              inInventory: true,
            }}
            currentGold={stats.gold}
            reqGold={30}
            alertMessage="You don't have enough gold to buy a weapon!"
          >
            Buy a weapon (30 gold)
          </StoreButton>
        )}
      </div>
    </>
  );
};

export default ActionsHub;
