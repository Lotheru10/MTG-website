import React, { useState, useEffect } from "react";

function Tytul() {
  let [name, nameSetter] = useState("");
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameSetter(e.target.value);
  };
  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <div>
      <input onChange={update} type="text"></input>
    </div>
  );
}
export default Tytul;
