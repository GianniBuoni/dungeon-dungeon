import { myCard } from "@/styles/classNames";
import { caller } from "@/server/trpc";
import ActionsHub from "./_components/ActionsHub";

const HomePage = async () => {
  const initStats = await caller.player.stats();
  return (
    <div className={`${myCard} border-slate-600 space-y-2`}>
      <ActionsHub initStats={initStats} />
    </div>
  );
};

export default HomePage;
