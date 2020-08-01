import React from 'react'
import './App.css'
import SearchRecipes from './components/SearchRecipes'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <div className='App'>
      <h2>Recipe Finder App</h2>
      <SearchRecipes />
      <RecipeList />
    </div>
  )
}

export default App
