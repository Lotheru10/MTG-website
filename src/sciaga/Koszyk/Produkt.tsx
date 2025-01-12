type ProduktProps = {
  nazwa: string;
};

function Produkt({ nazwa }: ProduktProps) {
  return <p>{nazwa}</p>;
}

export default Produkt;
