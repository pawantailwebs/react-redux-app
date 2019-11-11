import * as actionTypes from './actionsTypes';

import axios from '../../axios-orders';


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};


export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredient = () => {
    return { type: actionTypes.FETCH_INGREDIENT_FAILED };
}


export const initIngredient = () => {
    return dispatch => {
        axios.get('https://react-my-burger-f95a5.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredient(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredient())
            });
    };
}