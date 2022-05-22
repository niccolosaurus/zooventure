import { useReducer } from 'react';
import {
    CREATE_ANIMAL,
    UPDATE_ANIMAL,
    ADD_ANIMAL,
    REMOVE_ANIMAL,
    DELETE_ANIMAL,
} from './actions';


export const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_ANIMAL:
            return {
                ...state,
                animals: [...state.animals, action.payload]
            }
        case UPDATE_ANIMAL:
            return {
                ...state,
                animals: [...action.animals],
            };
        case ADD_ANIMAL:
            return {
                ...state,
                planOpen: true,
                plan: [...state.plan, action.animal]
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
        case DELETE_ANIMAL: {
            return {
                ...state,
                animals: [...state.animals].filter((animal) => animal !== action.payload),
            };
        }
        default:
            return state;
    }
}


export function useAnimalReducer(initialState) {
    return useReducer(reducer, initialState);
}