import React from "react";
import Card from "./Card";
import "./css/CardGallery.css";

interface CardGalleryProps {
  decks: { name: string; cards: string[] }[];
  addCardToDeck: (deckName: string, cardName: string) => void;
  onCardClick: (card: CardDetails) => void;
}

export interface CardDetails {
  id: number;
  name: string;
  imageUrl: string;
  rarity: string;
  type: string;
  color: string;
  price: string;
}

function CardGallery({ decks, addCardToDeck, onCardClick }: CardGalleryProps) {
  const cards = [
    {
      id: 1,
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482754&type=card",
      rarity: "Rare",
      type: "Creature",
      color: "Green",
      price: "$2.50",
    },
    {
      id: 2,
      name: "Tresspasser",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580642&type=card",
      rarity: "Uncommon",
      type: "Sorcery",
      color: "Black",
      price: "$1.20",
    },
    {
      id: 3,
      name: "Goblin",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580670&type=card",
      rarity: "Common",
      type: "Creature",
      color: "Red",
      price: "$0.50",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          name={card.name}
          decks={decks}
          addCardToDeck={addCardToDeck}
          onCardClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}

export default CardGallery;
