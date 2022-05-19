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
            planOpen: true,
            plan: [...state.plan, action.aninal]
        }
        case REMOVE_ANIMAL:
            let newState = state.plan.filter((animal) => {
                return animal._id !== action._id;
              }); 
        return {
            ...state,
            planOpen: newState.length > 0,
            plan: newState,
        }
    }
}


export function useAnimalReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  
