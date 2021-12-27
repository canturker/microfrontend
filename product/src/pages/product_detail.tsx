import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailView from "../components/productDetail/productDetail";

type ICharacter = {
  id: string;
  image: string;
  name: string;
  gender: string;
  species: string;
  status: string;
};

type IDetailParams = {
  id: string;
};

const ProductDetail: React.FC = () => {
  let { id } = useParams<IDetailParams>();
  const [character, setCharacter] = useState<ICharacter>({
    id: "",
    image: "",
    name: "",
    gender: "",
    species: "",
    status: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((c) => {
        setCharacter(c);
      });
  }, []);

  return (
    <div style={{ margin: "100px" }}>
      <ProductDetailView
        id={character.id}
        name={character.name}
        image={character.image}
        status={character.status}
        species={character.species}
        gender={character.gender}
      />
    </div>
  );
};

export default ProductDetail;
