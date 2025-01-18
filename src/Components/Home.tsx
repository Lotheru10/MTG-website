import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardGallery from "./CardGallery";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("Musisz się zalogować, aby uzyskać dostęp do tej strony.");
      navigate("/");
    }
  }, [navigate]);

  const [deck, setDeck] = useState<string[]>([]);

  const handleAddToDeck = (cardName: string) => {
    setDeck((prevDeck) => [...prevDeck, cardName]);
    alert(`${cardName} dodano do talii!`);
  };

  return (
    <div>
      <h1>Magic the Gathering</h1>
      <CardGallery onAddToDeck={handleAddToDeck} />
    </div>
  );
}

export default Home;
