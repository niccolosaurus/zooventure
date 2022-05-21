import { useState } from "react";
import DayPlanner from "../components/DayPlanner";
import ZooMap from "../components/ZooMap";

const Map = () => {

  return (
    <div className="card bg-white card-rounded ">
      <div className="image-container">
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/ZooMap.jpg`} alt="Map of the Zoo"></img> */}
        <ZooMap />
      </div>
      <div className="animal_list"></div>
   
    </div>
  );
};

export default Map;
