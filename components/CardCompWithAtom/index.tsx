import React from "react";
import { Card } from "@/types";
import { PrimitiveAtom, useAtom } from "jotai";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const CardCompWithAtom = ({ atom }: { atom: PrimitiveAtom<Card> }) => {
  const [cardInfo, setCardInfo] = useAtom(atom);

  return (
    <div className="w-full max-w-56  border  rounded-lg shadow bg-gray-100 ">
      <a href="#">
        <img
          className="p-4 rounded-t-lg h-[150px] w-full object-cover"
          src={cardInfo?.image}
          alt="product image"
        />
      </a>
      <div className="px-4 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800 mb-3">
            {cardInfo?.title}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-slate-800 ">$599</span>
          <button
            className="text-red-400"
            onClick={() => {
              setCardInfo((prev) => ({
                ...prev,
                liked: !prev.liked,
              }));
            }}
          >
            {cardInfo?.liked ? (
              <IconHeartFilled color="ff837b" />
            ) : (
              <IconHeart stroke={2} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCompWithAtom;
