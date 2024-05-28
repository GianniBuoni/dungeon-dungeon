import { trpc } from "@/server/trpc/client";
import { BuyHealthInput } from "@/server/trpc/routers/player/zod";

const Button = ({ hp, gold }: BuyHealthInput) => {
  const utils = trpc.useUtils();
  const { mutate } = trpc.player.buyHealth.useMutation({
    onSuccess: async () => {
      await utils.player.stats.invalidate();
    },
  });

  const handleClick = () => {
    if (gold < 10) {
      alert("You do not have enough gold to buy health!");
    } else {
      mutate({
        hp: hp + 30,
        gold: gold - 10,
      });
    }
  };

  return (
    <button className="btn btn-primary rounded-md" onClick={handleClick}>
      Buy Health!
    </button>
  );
};

export default Button;
