import { myCard } from "@/styles/classNames";
import { caller } from "@/server/trpc";
import { Toaster } from "react-hot-toast";
import StatsRibbon from "./_components/StatsRibbon";
import Store from "./_components/Store";

const HomePage = async () => {
  const initStats = await caller.player.stats();
  return (
    <div className={`${myCard} border-slate-600 space-y-2 w-7/12`}>
      <StatsRibbon initStats={initStats} />
      <Store initStats={initStats} />
      <Toaster />
    </div>
  );
};

export default HomePage;
