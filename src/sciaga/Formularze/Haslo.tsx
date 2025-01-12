import React, { useState } from "react";

function Haslo() {
  let [name1, name1Setter] = useState("");
  let [name2, name2Setter] = useState("");
  const update1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    name1Setter(e.target.value);
  };
  const update2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    name2Setter(e.target.value);
  };
  return (
    <div>
      <p>Haslo</p>
      <input onChange={update1} type="text"></input>
      <br></br>
      <p>Powtorz Haslo</p>
      <input onChange={update2} type="text"></input>
      <br></br>
      <br></br>
      {name1 == "" && name2 == ""
        ? "Prosze wprowadzic haslo"
        : name1 != name2
        ? "Hasła nie sa zgodne"
        : ""}
    </div>
  );
}
export default Haslo;
