import React, { useState } from 'react'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom'

const RecipeList = ({ lists }) => {
  console.log('this.props', lists)

  return (
    <div>
      <h4 className='link'>
        <Link to='/favorite'>Favorites</Link>
      </h4>
      {lists.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipeList
