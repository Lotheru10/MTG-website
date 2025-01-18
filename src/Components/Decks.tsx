import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Decks() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("Musisz się zalogować, aby uzyskać dostęp do tej strony.");
      navigate("/");
    }
  }, [navigate]);
  return <h1>Talie</h1>;
}

export default Decks;
