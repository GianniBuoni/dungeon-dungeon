"use client";
import { trpc } from "@/server/trpc/client";
import { Player } from "@/server/trpc/routers/player/zod";
import { myButton } from "@/styles/classNames";
import StoreButton from "./StoreButton";
import { getStats } from "../_lib/getStats";

interface Props {
  initStats: Player;
}

const Store = ({ initStats }: Props) => {
  const stats = getStats(initStats);

  const getNextWeapon = trpc.weapon.toBuy.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  const nextWeapon = getNextWeapon.data;

  const getToSellWeapon = trpc.weapon.toSell.useQuery(stats.id);
  const toSellWeapon = getToSellWeapon.data;
  return (
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
          <span className="capitalize">Buy {nextWeapon[0].name} (30 gold)</span>
        </StoreButton>
      ) : (
        <button className={`${myButton}`} disabled>
          No more weapons to buy!
        </button>
      )}
      {toSellWeapon?.length ? (
        <StoreButton
          input={{
            gold: stats.gold + 30,
            nextWeaponId: toSellWeapon[0].id,
            inStore: true,
          }}
          currentGold={stats.gold}
          reqGold={0}
        >
          <span className="capitalize">
            Sell {toSellWeapon[0].name} (15 gold)
          </span>
        </StoreButton>
      ) : (
        <button className={myButton} disabled>
          You can&apos;t sell your only weapon!
        </button>
      )}
    </div>
  );
};

export default Store;
