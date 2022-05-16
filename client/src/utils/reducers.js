import { useReducer } from 'react';
import {
  ADD_ANIMAL,
  REMOVE_ANIMAL,
} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ANIMAL:
        return {
            ...state,
            animals: [...state.aniamls, action.aniaml]
        }
        case REMOVE_ANIMAL:
            let newState = state.cart.filter((product) => {
                return product._id !== action._id;
              }); 
        return {
            ...state,
            animals: newState,
        }
    }
}
