import React, { useState } from "react";
import Dodawanie from "./Dodawanie";

// Interfejs definiujący strukturę obiektu studenta
export interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function StudentManager() {
  const [students, setStudents] = useState<Student[]>([
    { imie: "Blazej", nazwisko: "Brud", rocznik: 2 },
    { imie: "Mariusz", nazwisko: "Klaun", rocznik: 2 },
    { imie: "Harnas", nazwisko: "Piwo", rocznik: 100 },
  ]);

  const addStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <h1>Lista Studentów</h1>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Komponent Dodawanie */}
      <Dodawanie onAdd={addStudent} />
    </div>
  );
}

export default StudentManager;
