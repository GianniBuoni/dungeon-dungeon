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
  const getNextWeapon = trpc.weapon.toBuy.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
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
        {nextWeapon?.length ? (
          <StoreButton
            input={{
              gold: stats.gold - 30,
              nextWeaponId: nextWeapon[0].id,
              inStore: false,
            }}
            currentGold={stats.gold}
            reqGold={30}
            alertMessage="You don't have enough gold to buy a weapon!"
          >
            <span className="capitalize">Buy {nextWeapon[0].name}</span>
          </StoreButton>
        ) : (
          <button className="btn btn-disabled rounded-md grow" disabled>
            No more weapons to buy!
          </button>
        )}
      </div>
    </>
  );
};

export default ActionsHub;
