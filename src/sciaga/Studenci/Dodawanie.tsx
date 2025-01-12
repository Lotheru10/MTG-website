import React, { useState } from "react";
import StudentManager from "./StudentManager";
interface StudenciPros {
  imie: string;
  nazwisko: string;
  rocznik: number;
}
interface DodawanieProps {
  onAdd: (student: StudenciPros) => void;
}

function Dodawanie({ onAdd }: DodawanieProps) {
  // Stany dla danych formularza
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");

  // Funkcja obsługująca dodanie studenta
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Walidacja danych
    if (!imie || !nazwisko || !rocznik) {
      alert("Wszystkie pola muszą być wypełnione!");
      return;
    }
    if (isNaN(Number(rocznik))) {
      alert("Rocznik musi być liczbą!");
      return;
    }

    // Tworzenie nowego obiektu studenta
    const newStudent: StudenciPros = {
      imie,
      nazwisko,
      rocznik: Number(rocznik),
    };

    // Dodanie studenta i wyczyszczenie formularza
    onAdd(newStudent);
    setImie("");
    setNazwisko("");
    setRocznik("");
  };

  return (
    <div>
      <h2>Dodaj Studenta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię:
            <input
              type="text"
              value={imie}
              onChange={(e) => setImie(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Nazwisko:
            <input
              type="text"
              value={nazwisko}
              onChange={(e) => setNazwisko(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Rocznik:
            <input
              type="text"
              value={rocznik}
              onChange={(e) => setRocznik(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
export default Dodawanie;
