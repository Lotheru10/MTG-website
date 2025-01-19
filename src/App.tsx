import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Decks from "./Components/Decks";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [decks, setDecks] = useState<{ name: string; cards: string[] }[]>([]);

  const addDeck = (name: string) => {
    setDecks((prevDecks) => [...prevDecks, { name, cards: [] }]);
  };

  const addCardToDeck = (deckName: string, cardName: string) => {
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.name === deckName
          ? { ...deck, cards: [...deck.cards, cardName] }
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
        <Link to="/form" style={linkStyle}>
          Formularz
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home decks={decks} addCardToDeck={addCardToDeck} />}
        />
        <Route
          path="/decks"
          element={<Decks decks={decks} addDeck={addDeck} />}
        />
        <Route path="/form" element={<Form />} />
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
