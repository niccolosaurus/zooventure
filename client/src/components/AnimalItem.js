import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { ADD_ANIMAL, REMOVE_ANIMAL } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function AnimalItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    
  } = item;

  const { list } = state

  const addToList = () => {
    const itemInCart = list.find((animalItem) => animalItem._id === _id)
   if(data) {
      dispatch({
        type: ADD_ANIMAL,
        animal: { ...item, }
      });
      idbPromise('animals', 'put', { ...item,  });
   }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/animals/${_id}`}>
        <img
          alt={name}
          src={`//${image}`}
        />
        <p>{name}</p>
      </Link>
    
      <button onClick={addToList}>Add to Your list</button>
    </div>
  );
}

export default AnimalItem;