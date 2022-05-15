import React, { useEffect } from 'react';

import { idbPromise } from '../../utils/helpers';

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_ANIMAL} from '../../utils/actions';
import ''
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import AnimalItem from './AnimalItem';



const AnimalList = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getList() {
      const animal = await idbPromise('aniamls', 'get');
      dispatch({ type: ADD_ANIMAL, products: [...animal] });
    }

    if (!state.animal.length) {
      getList();
    }
  }, [state.animal.length, dispatch]);

  
  return (
    <div className="animalList">
      
      <h2>My animals</h2>
      {state.animals.length ? (
        <div>
           
          {state.animals.map((animal) => (
            <AnimalItem key={animal._id} animal={animal} />
          ))}

        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added any Animals!
        </h3>
      )}
    </div>
  );
};

export default AnimalList;
