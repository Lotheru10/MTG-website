import React, { useState } from "react";
import "./css/Card.css";
interface CardProps {
  imageUrl: string;
  name: string;
  decks: { name: string; cards: string[] }[];
  addCardToDeck: (deckName: string, cardName: string) => void;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  decks,
  addCardToDeck,
  onCardClick,
}) => {
  const [showDecks, setShowDecks] = useState(false);

  return (
    <div className="card" onClick={onCardClick}>
      <img src={imageUrl} alt={name} className="card-image" />
      <button onClick={() => setShowDecks((prev) => !prev)}>
        Dodaj do talii
      </button>
      {showDecks && (
        <div className="deck-list">
          {decks.length > 0 ? (
            decks.map((deck) => (
              <button
                key={deck.name}
                onClick={() => {
                  addCardToDeck(deck.name, imageUrl);
                  setShowDecks(false);
                }}
              >
                {deck.name}
              </button>
            ))
          ) : (
            <p>Brak talii. Stwórz nową talię!</p>
          )}
        </div>
      )}
      <p className="card-name">{name}</p>
    </div>
  );
};

export default Card;
