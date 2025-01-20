import React from "react";
import Card from "./Card";
import "./css/CardGallery.css";

interface CardGalleryProps {
  decks: { name: string; cards: string[] }[];
  addCardToDeck: (deckName: string, cardName: string) => void;
  onCardClick: (card: CardDetails) => void;
  searchTerm: string; // Przekazywany searchTerm
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

function CardGallery({
  decks,
  addCardToDeck,
  onCardClick,
  searchTerm,
}: CardGalleryProps) {
  const cards = [
    {
      id: 1,
      name: "Vizier",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196507&type=card",
      rarity: "Rare",
      type: "Creature",
      color: "Green",
      price: "$2.50",
    },
    {
      id: 2,
      name: "Serra Angel",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428431&type=card",
      rarity: "Uncommon",
      type: "Creature",
      color: "White",
      price: "$3.00",
    },
    {
      id: 3,
      name: "Dark Ritual",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423715&type=card",
      rarity: "Uncommon",
      type: "Sorcery",
      color: "Black",
      price: "$1.20",
    },
    {
      id: 4,
      name: "Lightning Bolt",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452334&type=card",
      rarity: "Common",
      type: "Instant",
      color: "Red",
      price: "$0.50",
    },
    {
      id: 5,
      name: "Tarmogoyf",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387260&type=card",
      rarity: "Mythic",
      type: "Creature",
      color: "Green",
      price: "$60.00",
    },
    {
      id: 6,
      name: "Birds of Paradise",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387260&type=card",

      rarity: "Rare",
      type: "Creature",
      color: "Green",
      price: "$3.80",
    },
    {
      id: 7,
      name: "Brainstorm",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420352&type=card",
      rarity: "Uncommon",
      type: "Instant",
      color: "Blue",
      price: "$1.50",
    },
    {
      id: 8,
      name: "Shivan Dragon",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=411671&type=card",
      rarity: "Rare",
      type: "Creature",
      color: "Red",
      price: "$10.00",
    },
    {
      id: 9,
      name: "Counterspell",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429440&type=card",
      rarity: "Uncommon",
      type: "Instant",
      color: "Blue",
      price: "$2.00",
    },
    {
      id: 10,
      name: "Swords to Plowshares",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417725&type=card",
      rarity: "Rare",
      type: "Instant",
      color: "White",
      price: "$3.50",
    },
    {
      id: 11,
      name: "Llanowar Elves",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463837&type=card",
      rarity: "Common",
      type: "Creature",
      color: "Green",
      price: "$1.00",
    },
    {
      id: 12,
      name: "Jace, the Mind Sculptor",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196507&type=card",
      rarity: "Mythic",
      type: "Planeswalker",
      color: "Blue",
      price: "$100.00",
    },
    {
      id: 13,
      name: "Black Lotus",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387260&type=card",
      rarity: "Mythic",
      type: "Artifact",
      color: "Colorless",
      price: "$2000.00",
    },
    {
      id: 14,
      name: "Snapcaster Mage",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=431199&type=card",
      rarity: "Mythic",
      type: "Creature",
      color: "Blue",
      price: "$40.00",
    },
    {
      id: 15,
      name: "Avacyn, Angel of Hope",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405489&type=card",
      rarity: "Mythic",
      type: "Creature",
      color: "White",
      price: "$15.00",
    },
    {
      id: 16,
      name: "Thoughtseize",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=432592&type=card",
      rarity: "Rare",
      type: "Sorcery",
      color: "Black",
      price: "$10.00",
    },
    {
      id: 17,
      name: "Chandra, Torch of Defiance",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=411513&type=card",
      rarity: "Mythic",
      type: "Planeswalker",
      color: "Red",
      price: "$25.00",
    },
    {
      id: 18,
      name: "Time Walk",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429440&type=card",
      rarity: "Mythic",
      type: "Sorcery",
      color: "Blue",
      price: "$4000.00",
    },
    {
      id: 19,
      name: "Mox Jet",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387260&type=card",
      rarity: "Mythic",
      type: "Artifact",
      color: "Colorless",
      price: "$2000.00",
    },
    {
      id: 20,
      name: "Imperial Seal",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428431&type=card",
      rarity: "Mythic",
      type: "Sorcery",
      color: "Black",
      price: "$1000.00",
    },
  ];

  const filteredCards = cards.filter(
    (card) => card.name.toLowerCase().includes(searchTerm) // Filtrujemy karty po nazwie
  );

  return (
    <div className="cards-container">
      {filteredCards.map((card) => (
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
