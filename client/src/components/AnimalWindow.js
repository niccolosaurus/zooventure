import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import AnimalItem from "./AnimalItem";

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const AnimalWindow = ({ animal, onCloseClick }) => {
  if (animal !== {}) {
    const position = {
      lat: animal.Lat || 32.735107,
      lng: animal.Lon || -117.14988,
    };
    return (
      <InfoWindow position={position} onCloseClick={onCloseClick}>
        <AnimalItem
          _id={animal._id}
          img={animal.img}
          name={animal.name}
          description={animal.description}
          funFact={animal.funFact}
        />
      </InfoWindow>
    );
  }
};

export default AnimalWindow;
