import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { ADD_ANIMAL, REMOVE_ANIMAL } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
function AnimalItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    Lat,
    Lon,
    coord,
    description,
    funFact
    
  } = item;

  const { list } = state

  const addToList = () => {
    const itemInList = list.find((animalItem) => animalItem._id === _id)
   if(!itemInList) {
      dispatch({
        type: ADD_ANIMAL,
        animal: { ...item, }
      });
      idbPromise('animals', 'put', { ...item  });
   } else {
       return console.error('Animal aready in databse');
   }
  }

  return (
    <div className="card">
        <Card>
      <Link to={`/animals/${_id}`}>
        <img
          alt={name}
          src={`//${image}`}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{funFact}</Card.Text>
      </Link>
    
      <button onClick={addToList}>Add to Your list</button>

      </Card>
    </div>
  );
}

export default AnimalItem;