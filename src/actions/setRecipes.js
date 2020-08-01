export const SET_RECIPES = 'SET_RECIPES'
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE'
export const setRecipes = payload => ({
  type: SET_RECIPES,
  payload,
})

export const favoriteRecipe = payload => ({
  type: FAVORITE_RECIPE,
  payload,
})
