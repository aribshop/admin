"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LinesContext } from "../../../contexts/linesContext";
import { ConfirmOrder } from "../../../repository/server";

type Props = {
  orderId: string;
  lineId: string;
  nextLineId: string;
};

export function VerificationConfirmation(props: Props) {
  const router = useRouter();

  const { invalidateLine } = useContext(LinesContext);

  async function confirm() {
    await ConfirmOrder(props.orderId, {
      type: "verification",
      date: new Date(),
      id: "dsdsd",
      line: props.lineId,
      order: props.orderId,
    });

    invalidateLine(props.lineId);
    invalidateLine(props.nextLineId);

    router.replace("/lines");
  }

  return (
    <div className="flex items-center justify-between">
      <Link
        href="/lines"
        className=" px-4 font-medium text-white border rounded-md"
      >
        Cancel
      </Link>
      <button
        onClick={confirm}
        className=" px-4 font-medium text-white bg-green-500 rounded-md"
      >
        Confirm
      </button>
    </div>
  );
}
