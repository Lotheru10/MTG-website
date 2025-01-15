import React, { useState } from "react";
import Card from "./Card";
import "../assets/dragon.png";
interface CardGalleryProps {
  onAddToDeck: (cardName: string) => void;
}
function CardGallery({ onAddToDeck }: CardGalleryProps) {
  const cards = [
    {
      id: 1,
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482754&type=card",
    },
    {
      id: 2,
      name: "Tresspasser",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580642&type=card",
    },
    {
      id: 3,
      name: "Goblin",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580670&type=card",
    },
    {
      id: 4,
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482754&type=card",
    },
    {
      id: 5,
      name: "Tresspasser",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580642&type=card",
    },
    {
      id: 6,
      name: "Goblin",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580670&type=card",
    },
    {
      id: 7,
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482754&type=card",
    },
    {
      id: 8,
      name: "Tresspasser",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580642&type=card",
    },
    {
      id: 9,
      name: "Goblin",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580670&type=card",
    },
  ];

  const handleAddToDeck = (cardName: string) => {
    alert(`${cardName} dodano do talii!`);
  };

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          name={card.name}
          onAddToDeck={handleAddToDeck}
        />
      ))}
    </div>
  );
}

export default CardGallery;
