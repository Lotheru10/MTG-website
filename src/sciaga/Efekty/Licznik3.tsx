import React, { useState, useEffect } from "react";

function Licznik3() {
  const [licznik, setLicznik] = useState<number>(() => {
    const savedCount = localStorage.getItem("licznik");
    return savedCount ? parseInt(savedCount) : 0;
  });

  const dodaj = () => {
    setLicznik((prevLicznik) => {
      const newLicznik = prevLicznik + 1;
      localStorage.setItem("licznik", newLicznik.toString());
      return newLicznik;
    });
  };

  return (
    <div>
      <p>{licznik}</p>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
}

export default Licznik3;
