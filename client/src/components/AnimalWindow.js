import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import AnimalItem from "./AnimalItem";

const AnimalWindow = ({ animal, onCloseClick }) => {
  const position = {
    lat: animal.Lat,
    lng: animal.Lon,
  };
  return (
    <InfoWindow
      options={{ maxWidth: 400 }}
      position={position}
      onCloseClick={onCloseClick}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <AnimalItem
        _id={animal._id}
        img={animal.img}
        name={animal.name}
        description={animal.description}
        funFact={animal.funFact}
        animal={animal}
      />
    </InfoWindow>
  );
};

export default AnimalWindow;
