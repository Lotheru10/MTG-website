import React, { useState } from "react";

function Aktualizacja() {
  let [produkt, setProdukt] = useState({ nazwa: "pomidor", cena: 50 });

  const update = () => {
    setProdukt((prev) => ({
      ...prev,
      cena: 100,
    }));
  };
  return (
    <div>
      <p>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </p>
      <button onClick={update}>Inflacja</button>
    </div>
  );
}
export default Aktualizacja;
