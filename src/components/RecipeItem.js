import React, { Component } from 'react'
import { connect } from 'react-redux'
import { favoriteRecipe } from '../actions/setRecipes'

class RecipeItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }
  }

  favoriteRecipe = recipe => {
    this.props.favoriteRecipe(recipe)
    this.setState({
      favorited: true,
    })
  }

  render() {
    let { recipe } = this.props

    return (
      <div className='recipe-item'>
        {this.state.favorited ? (
          <div className='star'> &#9733;</div>
        ) : (
          <div className='star' onClick={() => this.favoriteRecipe(recipe)}>
            &#9734;
          </div>
        )}

        <div className='recipe-text'>
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className='recipe-img'
        ></img>
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem)
