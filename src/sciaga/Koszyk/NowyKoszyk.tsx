import Produkt from "./Produkt";
function NowyKoszyk() {
  const Produkty: string[] = [
    "Gruszka",
    "jabłko",
    "ziemniak",
    "banan",
    "mango",
  ];

  return (
    <div>
      {Produkty.map((obiekt) => (
        <Produkt key={obiekt} nazwa={obiekt} />
      ))}
    </div>
  );
}
export default NowyKoszyk;
