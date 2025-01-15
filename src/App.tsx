import React from "react";
import Koszyk from "./sciaga/Koszyk/Koszyk";
import Card from "./Components/Card";
import Button1 from "./Components/Button1";
import Przycisk from "./sciaga/Licznik/Przycisk";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Decks from "./Components/Decks";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
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
        <Link to="/login" style={linkStyle}>
          Logowanie
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
