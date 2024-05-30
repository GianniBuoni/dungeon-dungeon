import { trpc } from "@/server/trpc/client";
import toast from "react-hot-toast";
import Alert from "./Alert";
import { ReactNode } from "react";
import { UpdateInput } from "@/server/trpc/routers/player/zod";
import { myButton } from "@/styles/classNames";

interface Props {
  input: UpdateInput;
  currentGold: number;
  reqGold: number;
  children: ReactNode;
  alertMessage?: string;
}

const StoreButton = ({
  input,
  currentGold,
  reqGold,
  children,
  alertMessage,
}: Props) => {
  const utils = trpc.useUtils();
  const { mutate } = trpc.player.update.useMutation({
    onSettled: async () => {
      await utils.invalidate();
    },
  });

  const handleClick = () => {
    if (currentGold < reqGold) {
      toast.custom(<Alert>{alertMessage}</Alert>);
      return;
    } else {
      mutate(input);
    }
  };

  return (
    <button className={myButton} onClick={handleClick}>
      {children}
    </button>
  );
};

export default StoreButton;
