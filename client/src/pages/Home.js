import { Link } from 'react-router-dom';
import { useState } from '@apollo/client';

var animals = require()

const Home = () => {

  const [animal, setAnimal] = useState(animals);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className='image-container'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/ZooMap.jpg`} ></img>
      </div>
      <div className='Animal List'>
      
      </div>
    </div>
  );
};

export default Home;
