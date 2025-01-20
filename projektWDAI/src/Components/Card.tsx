import React, { useState } from "react";

interface CardProps {
  imageUrl: string;
  name: string;
  decks: {
    name: string;
    cards: { id: string; name: string; imageUrl: string; count: number }[];
  }[]; // Typ pełnego obiektu decks
  addCardToDeck: (deckName: string) => void;
  openModal: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  decks,
  addCardToDeck,
  openModal,
}) => {
  const [showDecks, setShowDecks] = useState(false);

  return (
    <div className="card" onClick={openModal}>
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
                  addCardToDeck(deck.name);
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
