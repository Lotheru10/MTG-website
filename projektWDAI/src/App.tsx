import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Decks from "./Components/Decks";

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

function App() {
  const [decks, setDecks] = useState<Deck[]>([]);

  const addDeck = (name: string) => {
    if (name.trim()) {
      setDecks((prevDecks) => [...prevDecks, { name, cards: [] }]);
    }
  };

  const addCardToDeck = (
    deckName: string,
    card: { id: string; name: string; imageUrl: string }
  ) => {
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.name === deckName
          ? {
              ...deck,
              cards: deck.cards.some((c) => c.id === card.id)
                ? deck.cards.map((c) =>
                    c.id === card.id ? { ...c, count: c.count + 1 } : c
                  )
                : [...deck.cards, { ...card, count: 1 }],
            }
          : deck
      )
    );
  };

  const updateCardCount = (deckName: string, cardId: string, count: number) => {
    if (count < 1) return;
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.name === deckName
          ? {
              ...deck,
              cards: deck.cards.map((card) =>
                card.id === cardId ? { ...card, count } : card
              ),
            }
          : deck
      )
    );
  };

  const removeCardFromDeck = (deckName: string, cardId: string) => {
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.name === deckName
          ? { ...deck, cards: deck.cards.filter((card) => card.id !== cardId) }
          : deck
      )
    );
  };

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Strona główna
        </Link>
        <Link to="/decks" style={linkStyle}>
          Talie
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home decks={decks} addCardToDeck={addCardToDeck} />}
        />
        <Route
          path="/decks"
          element={
            <Decks
              decks={decks}
              addDeck={addDeck}
              updateCardCount={updateCardCount}
              removeCardFromDeck={removeCardFromDeck}
            />
          }
        />
      </Routes>
    </Router>
  );
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
  background: "#333",
  color: "#fff",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  transition: "background-color 0.3s ease",
};

export default App;
