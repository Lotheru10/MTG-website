import React, { useState } from "react";
import "./css/Decks.css";

interface Card {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
}

interface Deck {
  name: string;
  cards: Card[];
}

interface DecksProps {
  decks: Deck[];
  addDeck: (name: string) => void;
  updateCardCount: (deckName: string, cardId: string, count: number) => void;
  removeCardFromDeck: (deckName: string, cardId: string) => void;
}

const Decks: React.FC<DecksProps> = ({
  decks,
  addDeck,
  updateCardCount,
  removeCardFromDeck,
}) => {
  const [newDeckName, setNewDeckName] = useState("");
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null);

  const handleCreateDeck = () => {
    if (newDeckName.trim()) {
      addDeck(newDeckName.trim());
      setNewDeckName("");
    } else {
      alert("Nazwa talii nie może być pusta!");
    }
  };

  const handleSelectDeck = (deckName: string) => {
    setSelectedDeck(deckName === selectedDeck ? null : deckName);
  };

  const selectedDeckCards =
    selectedDeck && decks.find((deck) => deck.name === selectedDeck)?.cards;

  return (
    <div>
      <h1>Twoje talie</h1>
      <ul>
        {decks.map((deck) => (
          <li key={deck.name}>
            <button onClick={() => handleSelectDeck(deck.name)}>
              {deck.name} ({deck.cards.length} kart)
            </button>
          </li>
        ))}
      </ul>
      {selectedDeck && (
        <div>
          <h2>Karty w talii: {selectedDeck}</h2>
          {selectedDeckCards && selectedDeckCards.length > 0 ? (
            <ul>
              <div className="deck-container">
                {selectedDeckCards.map((card) => (
                  <li key={card.id}>
                    <img src={card.imageUrl} alt={card.name} width={50} />
                    <p>{card.name}</p>
                    <p>Liczba: {card.count}</p>
                    <button
                      onClick={() =>
                        updateCardCount(selectedDeck, card.id, card.count - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateCardCount(selectedDeck, card.id, card.count + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeCardFromDeck(selectedDeck, card.id)}
                    >
                      Usuń
                    </button>
                  </li>
                ))}
              </div>
            </ul>
          ) : (
            <p>Talia jest pusta.</p>
          )}
        </div>
      )}
      <div>
        <h3>Dodaj nową talię</h3>
        <input
          type="text"
          placeholder="Nazwa nowej talii"
          value={newDeckName}
          onChange={(e) => setNewDeckName(e.target.value)}
        />
        <button onClick={handleCreateDeck}>Stwórz talię</button>
      </div>
    </div>
  );
};

export default Decks;
