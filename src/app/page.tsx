import { myCard } from "@/styles/classNames";
import { caller } from "@/server/trpc";
import ActionsHub from "./_components/ActionsHub";
import { Toaster } from "react-hot-toast";

const HomePage = async () => {
  const initStats = await caller.player.stats();
  return (
    <div className={`${myCard} border-slate-600 space-y-2 w-7/12`}>
      <ActionsHub initStats={initStats} />
      <Toaster />
    </div>
  );
};

export default HomePage;
