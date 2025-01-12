import React, { useState, useEffect } from "react";

function Licznik2() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello world");
  });
  useEffect(() => {
    console.log(`Licznik zwiększył się do ${counter}`);
  }, [counter]);
  const dodaj = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>Licznik: {counter}</p>
      <button onClick={dodaj}>Zwiększ</button>
    </div>
  );
}
export default Licznik2;
