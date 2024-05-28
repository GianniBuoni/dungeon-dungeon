import { caller } from "@/server/trpc";
import { capName } from "../_lib/utils";
import { myCard } from "@/styles/classNames";

interface Props {
  initStats: Awaited<ReturnType<typeof caller.player.stats>>;
}

const StatsRibbon = ({ initStats }: Props) => {
  const statsMap: { label: string, value: number | string }[] = [
    { label: "XP", value: initStats.xp },
    { label: "HP", value: initStats.hp },
    { label: "Gold", value: initStats.gold},
    { label: "Weapon", value: capName(initStats.weapon)},
  ]

  return (
    <ul className={`${myCard} flex-row space-x-5 bg-base-200 px-5 py-3`}>
      {statsMap.map(stat => (
        <li key={stat.label}><strong>{stat.label}: </strong>{stat.value}</li>
      ))}
    </ul>
  );
};

export default StatsRibbon;
