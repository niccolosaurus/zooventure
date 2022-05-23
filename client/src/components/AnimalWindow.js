import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import AnimalItem from "./AnimalItem";

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

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
      {/* <div style={divStyle}>
        <img src={animal.img} alt={animal.name}></img>
        <h1>{animal.name}</h1> */}
      {/*  */}
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
