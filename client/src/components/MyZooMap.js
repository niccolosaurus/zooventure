import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

import AnimalWindow from "./AnimalWindow";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const containerStyle = {
  width: "90%",
  height: "70vh",
};
//32.736025, -117.151387
const center = {
  lat: 32.736025,
  lng: -117.151387,
};

function MyZooMap() {
  const { loading, data, error } = useQuery(QUERY_USER);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const [showAnimalWindow, setShowAnimalWindow] = useState(false);
  const [singleAnimal, setSingleAnimal] = useState({});

  const closeAnimalWindow = () => {
    setShowAnimalWindow(false);
    setSingleAnimal({});
  };

  const onLoad = React.useCallback(function callback(map) {
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

  if (loading) return "Loading..";
  if (error) return <pre>{error.message}</pre>;

  

  if (data && isLoaded) {
    return (
      <GoogleMap
        id="gmap-map"
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={17}
        options={{ mapId: "830da1546c37eea8" }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {data &&
            data?.user?.plans[0]?.animals?.map((animal) => {
              const position = {
                lng: animal.Lon,
                lat: animal.Lat,
              };
             
              return (
                <Marker
                  // key={animal._id}
                  key={Math.random()}
                  position={position}
                  onClick={() => getAnimalData(animal)}
                  icon={process.env.PUBLIC_URL + "/assets/images/paw_icon.png"}
                >
                  {showAnimalWindow && singleAnimal.name === animal.name && (
                    <AnimalWindow
                      animal={singleAnimal}
                      onCloseClick={closeAnimalWindow}
                    />
                  )}
                </Marker>
              );
            })}

          {/*  */}
        </>
      </GoogleMap>
    );
  }
}

export default MyZooMap;
