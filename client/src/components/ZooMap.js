import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import AnimalCoord from "../data/animalCoord.json";
import AnimalWindow from "./AnimalWindow";

console.log(AnimalCoord);

// require("dotenv").config();

const containerStyle = {
  width: "90%",
  height: "70vh",
};
//32.736025, -117.151387
const center = {
  lat: 32.736025,
  lng: -117.151387,
};

// const onLoad = (marker) => {
//   console.log("marker: ", marker);
// };

function ZooMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [showAnimalWindow, setShowAnimalWindow] = useState(false);
  const [singleAnimal, setSingleAnimal] = useState({
    _id: 1,
    name: "Flamingos",
    coord: "32.735107, -117.149889",
    Lat: 32.735107,
    Lng: -117.149889,
    description:
      "With their pink and crimson plumage, long legs and necks, and strongly hooked bills, flamingos cannot be mistaken for any other type of bird. The flamingo’s pink or reddish color comes from the rich sources of carotenoid pigments (like the pigments of carrots) in the algae and small crustaceans the birds eat.",
    img: "https://animals.sandiegozoo.org/sites/default/files/2017-07/animals-flamingo-feeding.jpg",
    funFact:
      "These hardy little penguins can hold their breath over 2 minutes and dive over 400 feet deep!",
  });

  console.log({ showAnimalWindow });

  const closeAnimalWindow = () => {
    setShowAnimalWindow(false);
  };

  console.log(singleAnimal);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getAnimalData = (animal) => {
    console.log(animal);
    setSingleAnimal(animal);
    setShowAnimalWindow(true);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={17}
      options={{ mapId: "830da1546c37eea8" }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {AnimalCoord.map((animal) => {
          const position = {
            lat: animal.Lat,
            lng: animal.Lng,
          };
          return (
            <Marker
              // onLoad={onLoad}
              key={animal._id}
              position={position}
              onClick={() => getAnimalData(animal)}
              icon={process.env.PUBLIC_URL + '/assets/images/paw_icon.png'}
            />
          );
        })}
        {showAnimalWindow && (
          <AnimalWindow
            animal={singleAnimal}
            onCloseClick={closeAnimalWindow}
          />
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(ZooMap);
