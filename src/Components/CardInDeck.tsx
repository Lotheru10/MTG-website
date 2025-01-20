import React from "react";
import "./css/CardInDeck.css";

interface CardInDeckProps {
  name: string;
  count: number;
  updateCardCount: (count: number) => void;
  removeCard: () => void;
}

const CardInDeck: React.FC<CardInDeckProps> = ({
  name,
  count,
  updateCardCount,
  removeCard,
}) => {
  return (
    <div className="card-in-deck">
      <p>{name}</p>
      <div className="controls">
        <button onClick={() => updateCardCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => updateCardCount(count + 1)}>+</button>
      </div>
      <button onClick={removeCard} className="remove-button">
        Usuń kartę
      </button>
    </div>
  );
};

export default CardInDeck;
