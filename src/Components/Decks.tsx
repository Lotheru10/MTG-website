import React, { useState } from "react";

interface DecksProps {
  decks: { name: string; cards: string[] }[];
  addDeck: (name: string) => void;
}

const Decks: React.FC<DecksProps> = ({ decks, addDeck }) => {
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
              {selectedDeckCards.map((card, index) => (
                <img src={card}></img>
              ))}
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
