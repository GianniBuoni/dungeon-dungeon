"use client";
import { trpc } from "@/server/trpc/client";
import { BuyHealthInput } from "@/server/trpc/routers/player/zod";
import { useRouter } from "next/navigation";

const Button = ({ hp, gold }: BuyHealthInput) => {
  const buyHealth = trpc.player.buyHealth.useMutation();
  const router = useRouter();

  const handleClick = () => {
    if (gold < 10) {
      alert("You do not have enough gold to buy health!");
    } else {
      buyHealth.mutate({
        hp: hp + 30,
        gold: gold - 10,
      });
      router.refresh();
    }
  };

  return (
    <button className="btn btn-primary rounded-md" onClick={handleClick}>
      Buy Health!
    </button>
  );
};

export default Button;
