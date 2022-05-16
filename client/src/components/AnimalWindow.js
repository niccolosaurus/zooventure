import React from "react";
import { InfoWindow } from "@react-google-maps/api";

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const AnimalWindow = ({ animal, onCloseClick }) => {
  const position = {
    lat: animal.Lat,
    lng: animal.Lng,
  };
  return (
    <InfoWindow position={position} onCloseClick={onCloseClick}>
      <div style={divStyle}>
        <h1>{animal.name}</h1>
      </div>
    </InfoWindow>
  );
};

export default AnimalWindow;
