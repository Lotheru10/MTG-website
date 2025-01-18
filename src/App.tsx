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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik jest zalogowany na podstawie localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Usuń zalogowanego użytkownika
    setIsLoggedIn(false); // Zaktualizuj stan zalogowania
  };

  return (
    <Router>
      <MainLayout
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        setIsLoggedIn={setIsLoggedIn}
      />
    </Router>
  );
};

const MainLayout: React.FC<{
  isLoggedIn: boolean;
  handleLogout: () => void;
  setIsLoggedIn: (value: boolean) => void;
}> = ({ isLoggedIn, handleLogout, setIsLoggedIn }) => {
  const location = useLocation();

  // Sprawdź, czy aktualna trasa to "/login" lub "/register"
  const isAuthRoute =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {/* Menu jest ukrywane na stronach logowania/rejestracji */}
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
          path="/decks"
          element={isLoggedIn ? <Decks /> : <RedirectToLogin />}
        />
        <Route
          path="/form"
          element={isLoggedIn ? <Form /> : <RedirectToLogin />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <RedirectToLogin />}
        />
        <Route
          path="/register"
          element={
            <Register
              setIsLoggedIn={function (value: boolean): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
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
