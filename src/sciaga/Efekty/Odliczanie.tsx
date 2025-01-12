import React, { useState, useEffect } from "react";

function Odliczanie() {
  const [licznik, setLicznik] = useState(15.0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: number | null = null;
    if (running && licznik > 0) {
      interval = window.setInterval(() => {
        setLicznik((prev) => Math.max(prev - 0.1, 0));
      }, 100);
    }

    return () => {
      if (interval !== null) {
        window.clearInterval(interval);
      }
    };
  }, [running, licznik]);

  const toggleRunning = () => {
    setRunning((prev) => !prev);
  };

  return (
    <div>
      <h1>Odliczanie</h1>
      <div>
        <p>Czas: {licznik.toFixed(1)} sekundy</p>
      </div>
      <button onClick={toggleRunning} disabled={licznik === 0}>
        {licznik === 0 ? "Odliczanie zakończone" : running ? "STOP" : "START"}
      </button>
    </div>
  );
}

export default Odliczanie;
