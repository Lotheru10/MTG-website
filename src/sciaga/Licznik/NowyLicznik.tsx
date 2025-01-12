import React, { useState } from "react";
import Przycisk from "./Przycisk";
function NowyLicznik() {
  let [licznik, setLicznik] = useState(0);
  const dodaj = () => {
    setLicznik(licznik + 1);
  };
  return (
    <div>
      <p>{licznik}</p>
      <Przycisk onClick={dodaj} />
    </div>
  );
}
export default NowyLicznik;
