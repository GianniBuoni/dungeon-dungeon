import { caller } from "@/server/trpc";
import StoreActions from "./StoreActions";
import AdventureText from "../AdventureText";

const Store = async () => {
  const initStats = await caller.player.stats();
  return (
    <>
      <StoreActions initStats={initStats} />
      <AdventureText>
        You are in a store filled with gear needed for your adventure. The
        merchant greets you cordially.
      </AdventureText>
    </>
  );
};

export default Store;
