function Ternary() {
  let a = true;
  let b = false;
  return (
    <div>
      <p>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </p>
      <p>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </p>
    </div>
  );
}
export default Ternary;
