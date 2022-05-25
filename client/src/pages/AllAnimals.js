import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import { QUERY_ANIMALS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import background from "../paws.jpeg";

const AllAnimals = () => {
  const { data, loading, error } = useQuery(QUERY_ANIMALS);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div
      className="Container"
      style={{
        backgroundImage: `url(${background})`,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {data.animals.map((animal) => (
        <AnimalCard
          _id={animal._id}
          img={animal.img}
          name={animal.name}
          description={animal.description}
          funFact={animal.funFact}
          animal={animal}
        />
      ))}
    </div>
  );
};
export default AllAnimals;
