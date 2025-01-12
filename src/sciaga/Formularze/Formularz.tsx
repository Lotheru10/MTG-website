import React, { useState } from "react";

function Formularz() {
  let [name, nameSetter] = useState("");
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameSetter(e.target.value);
  };
  return (
    <div>
      <input onChange={update} type="text"></input>
      <p>{name}</p>
    </div>
  );
}
export default Formularz;
