import React, { useState } from "react";
import CardGallery, {
  CardDetails as CardGalleryCardDetails,
} from "./CardGallery";
import CardDetailsModal from "./CardDetailsModal";

type CardDetails = CardGalleryCardDetails;

interface HomeProps {
  decks: { name: string; cards: string[] }[];
  addCardToDeck: (deckName: string, cardName: string) => void;
}

function Home({ decks, addCardToDeck }: HomeProps) {
  const [selectedCard, setSelectedCard] = useState<CardDetails | null>(null);

  const handleCardClick = (card: CardDetails) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };
  return (
    <div>
      <h1>Magic the Gathering</h1>
      <CardGallery
        decks={decks}
        addCardToDeck={addCardToDeck}
        onCardClick={handleCardClick}
      />
      <CardDetailsModal card={selectedCard} onClose={handleCloseModal} />
    </div>
  );
}

export default Home;
