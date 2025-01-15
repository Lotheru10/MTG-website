import React, { useState } from "react";
import CardGallery from "./CardGallery";

function Home() {
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
