import { Card } from "@/types";
import React, { useState } from "react";
import { initCards } from "@/constants";
import CardComp from "../components/CardComp";

const CardListWithState = () => {
  // initCards comes from a constant file
  const [cards, setCards] = useState<Card[]>(initCards);

  const handleLikeToggle = (id: string) => {
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, liked: !card.liked } : card
    );

    setCards(newCards);
  };

  return (
    <div>
      <h1 className="text-3xl text-slate-700 mb-5">
        useState (Regular React Hook)
      </h1>

      <div className="flex gap-8 flex-wrap">
        {cards.map((card) => (
          <CardComp
            state={card}
            key={card.id}
            handleLikeToggle={handleLikeToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardListWithState;
