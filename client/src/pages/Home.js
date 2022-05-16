import { Link } from "react-router-dom";
import { useState } from "react";
import ZooMap from "../components/ZooMap";

// var animalData = require();

const Home = () => {
  // const [animal, setAnimal] = useState(animalData);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="image-container">
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/ZooMap.jpg`} alt="Map of the Zoo"></img> */}
        <ZooMap />
      </div>
      <div className="animal_list"></div>
    </div>
  );
};

export default Home;
