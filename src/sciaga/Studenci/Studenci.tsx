interface StudenciPros {
  name: string;
  surname: string;
  year: number;
}
const student1: StudenciPros = {
  name: "Błazej",
  surname: "Brud",
  year: 2,
};
const student2: StudenciPros = {
  name: "Mario",
  surname: "Krasnal",
  year: 2,
};
const student3: StudenciPros = {
  name: "Harnas",
  surname: "Piwo",
  year: 100,
};

function Studenci() {
  const Students: StudenciPros[] = [student1, student2, student3];

  return (
    <div>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Studenci;
