import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Decks from "./Components/Decks";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App: React.FC = () => {
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <MainLayout
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          setIsLoggedIn={setIsLoggedIn}
          decks={decks}
          addDeck={addDeck}
          addCardToDeck={addCardToDeck}
        />
      </div>
    </Router>
  );
};

const MainLayout: React.FC<{
  isLoggedIn: boolean;
  handleLogout: () => void;
  setIsLoggedIn: (value: boolean) => void;
  decks: { name: string; cards: string[] }[];
  addDeck: (name: string) => void;
  addCardToDeck: (deckName: string, cardName: string) => void;
}> = ({
  isLoggedIn,
  handleLogout,
  setIsLoggedIn,
  decks,
  addDeck,
  addCardToDeck,
}) => {
  const location = useLocation();

  // Sprawdź, czy aktualna trasa to "/login" lub "/register"
  const isAuthRoute =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!isAuthRoute && (
        <nav style={navStyle}>
          <Link to="/home" style={linkStyle}>
            Strona główna
          </Link>
          <Link to="/decks" style={linkStyle}>
            Talie
          </Link>
          <Link to="/form" style={linkStyle}>
            Formularz
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              style={{
                ...linkStyle,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Wyloguj się
            </button>
          ) : (
            <Link to="/" style={linkStyle}>
              Logowanie
            </Link>
          )}
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home decks={decks} addCardToDeck={addCardToDeck} />
            ) : (
              <RedirectToLogin />
            )
          }
        />
        <Route
          path="/decks"
          element={
            isLoggedIn ? (
              <Decks decks={decks} addDeck={addDeck} />
            ) : (
              <RedirectToLogin />
            )
          }
        />
        <Route
          path="/form"
          element={isLoggedIn ? <Form /> : <RedirectToLogin />}
        />
      </Routes>
    </>
  );
};

const RedirectToLogin: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
};

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
