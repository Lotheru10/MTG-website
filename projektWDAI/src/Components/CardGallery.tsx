import React from "react";
import Card from "./Card";

export interface CardDetails {
  id: string;
  name: string;
  imageUrl: string;
}

interface CardGalleryProps {
  decks: {
    name: string;
    cards: { id: string; name: string; imageUrl: string; count: number }[];
  }[];
  addCardToDeck: (deckName: string, card: CardDetails) => void;
}

function CardGallery({ decks, addCardToDeck }: CardGalleryProps) {
  const cards = [
    {
      id: "1",
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482754&type=card",
    },
    {
      id: "2",
      name: "Tresspasser",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580642&type=card",
    },
    {
      id: "3",
      name: "Goblin",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580670&type=card",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          name={card.name}
          decks={decks} // Przekazujemy cały obiekt decks
          addCardToDeck={(deckName) => addCardToDeck(deckName, card)}
        />
      ))}
    </div>
  );
}

export default CardGallery;
