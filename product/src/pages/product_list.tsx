import React, { useContext, useEffect, useState } from "react";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";
import ConfigContext from "../contexts/configContext";

type ICharacter = {
  id: string;
  image: string;
  name: string;
  status: string;
};

const ProductList: React.FC = () => {
  const config = useContext(ConfigContext);
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  console.log("Config from Context", config);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((c) => {
        setCharacters(c.results);
      });
  }, []);

  return (
    <Container>
      {characters.map((character) => (
        <ProductCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
        />
      ))}
    </Container>
  );
};

export default ProductList;
