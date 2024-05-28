import { myCard } from "@/styles/classNames";
import StatsRibbon from "./_components/StatsRibbon";
import { caller } from "@/server/trpc";
import Button from "./_components/Button";

const HomePage = async () => {
  const initStats = await caller.player.stats();
  return (
    <div className={`${myCard} border-white`}>
      <StatsRibbon initStats={initStats} />
      <Button hp={initStats.hp} gold={initStats.gold} />
    </div>
  );
};

export default HomePage;
