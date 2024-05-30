"use client";
import { capName } from "../_lib/utils";
import { myCard } from "@/styles/classNames";
import { Player } from "@/server/trpc/routers/player/zod";
import { getStats } from "../_lib/getStats";

interface Props {
  initStats: Player;
}

const StatsRibbon = ({ initStats }: Props) => {
  const stats = getStats(initStats);
  const statsMap: { label: string; value: number | string }[] = [
    { label: "XP", value: stats.xp },
    { label: "HP", value: stats.hp },
    { label: "Gold", value: stats.gold },
    { label: "Weapon", value: capName(stats.weapon) },
  ];

  return (
    <ul className={`${myCard} flex-row space-x-5 bg-base-200 px-5 py-3`}>
      {statsMap.map((stat) => (
        <li key={stat.label}>
          <strong>{stat.label}: </strong>
          {stat.value}
        </li>
      ))}
    </ul>
  );
};

export default StatsRibbon;
