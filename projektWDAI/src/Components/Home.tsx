import { useState } from "react";
import React from "react";
import CardGallery from "./CardGallery";
import CardDetailsModal from "./CardDetailsModal";

interface Card {
  id: string;
  name: string;
  imageUrl: string;
}

interface HomeProps {
  decks: {
    name: string;
    cards: { id: string; name: string; imageUrl: string; count: number }[];
  }[];
  addCardToDeck: (deckName: string, card: Card) => void;
}

function Home({ decks, addCardToDeck }: HomeProps) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null); // Przechowujemy wybraną kartę
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan modalny

  const openModal = (card: Card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
  return (
    <div>
      <h1>Magic the Gathering</h1>
      <CardGallery
        decks={decks}
        addCardToDeck={addCardToDeck}
        openModal={openModal} // Przekazujemy funkcję do otwierania modala
      />

      {isModalOpen && selectedCard && (
        <CardDetailsModal card={selectedCard} onClose={closeModal} />
      )}
    </div>
  );
}

export default Home;
