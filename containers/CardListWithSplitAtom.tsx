import React from "react";
import { Card } from "@/types";
import { initCards } from "@/constants";
import { splitAtom } from "jotai/utils";
import { atom, useAtomValue } from "jotai";
import CardCompWithAtom from "@/components/CardCompWithAtom";

const cardsAtom = atom<Card[]>(initCards);
const splitCardsAtom = splitAtom(cardsAtom);

const CardListWithSplitAtom = () => {
  const cards = useAtomValue(splitCardsAtom);

  return (
    <div>
      <h1 className="text-3xl text-slate-700 mb-5">
        Jotai (split atom version)
      </h1>

      <div className="flex gap-8 flex-wrap ">
        {cards.map((card) => (
          <CardCompWithAtom atom={card} key={card.toString()} />
        ))}
      </div>
    </div>
  );
};

export default CardListWithSplitAtom;
