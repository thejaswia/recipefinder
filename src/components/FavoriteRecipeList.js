import React, { Component } from 'react'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom'

class FavoriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4 className='link'>
          <Link to='/'>Home</Link>
        </h4>
        <h4> Favorite Recipes List</h4>
        {this.props.favoriteRecipes.map((recipe, index) => {
          return <RecipeItem key={index} recipe={recipe} />
        })}
      </div>
    )
  }
}

export default FavoriteRecipeList
