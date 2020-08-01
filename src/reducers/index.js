import { SET_RECIPES, FAVORITE_RECIPE } from '../actions/setRecipes'
import { combineReducers } from 'redux'

const initialState = []

function recipes(state = initialState, { type, payload }) {
  switch (type) {
    case SET_RECIPES:
      return payload

    default:
      return state
  }
}

function favoriteRecipes(state = initialState, { type, payload }) {
  switch (type) {
    case FAVORITE_RECIPE:
      return [...state, payload]

    default:
      return state
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes })
export default rootReducer
