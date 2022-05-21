import React from "react";
import { InfoWindow } from "@react-google-maps/api";

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

// const AnimalWindow = ({ animal, onCloseClick }) => {
const AnimalWindow = ({ animal }) => {
  const position = {
    lat: animal.Lat,
    lng: animal.Lon,
  };
  return (
    // <InfoWindow position={position} onCloseClick={onCloseClick}>
    <InfoWindow position={position}>
      <div style={divStyle}>
        <img src={animal.img} alt={animal.name}></img>
        <h1>{animal.name}</h1>
      </div>
    </InfoWindow>
  );
};

export default AnimalWindow;
