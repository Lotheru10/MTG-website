import React, { useState } from "react";
//Chcemy zeby licznik miał stan, wiec uzywamy hooka, mamy tylko jeden parametr, wiec nie
function Licznik() {
  let [licznik, setLicznik] = useState(0);
  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <p>{licznik}</p>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
}
export default Licznik;
