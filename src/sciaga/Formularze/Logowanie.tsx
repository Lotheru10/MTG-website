import React, { useState } from "react";

function Logowanie() {
  let [name1, name1Setter] = useState("");
  let [name2, name2Setter] = useState("");
  let [name3, name3Setter] = useState("");
  const update1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    name1Setter(e.target.value);
  };
  const update2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    name2Setter(e.target.value);
  };
  const update3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    name3Setter(e.target.value);
  };
  const showBadAlert = () => {
    alert("Hasła nie zgadzaja sie");
  };
  const showGoodAlert = () => {
    alert("Zalogowano poprawnie");
  };
  return (
    <div>
      <p>Nazwa uzytkownika</p>
      <input onChange={update3} type="text"></input>
      <br></br>
      <p>Haslo</p>
      <input onChange={update1} type="text"></input>
      <br></br>
      <p>Powtorz Haslo</p>
      <input onChange={update2} type="text"></input>
      <br></br>
      <br></br>
      {name1 == "" || name2 == "" || name3 == "" ? (
        <button type="button" disabled>
          Logowanie
        </button>
      ) : name1 != name2 ? (
        <button type="button" onClick={showBadAlert}>
          Logowanie
        </button>
      ) : (
        <button type="button" onClick={showGoodAlert}>
          Logowanie
        </button>
      )}
    </div>
  );
}
export default Logowanie;
