import React, { useState } from 'react'
import axios from 'axios'
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap'
import RecipeList from './RecipeList'

const SearchRecipes = () => {
  const [ingredents, setIngredents] = useState('')
  const [dish, setDish] = useState('')
  const [list, setList] = useState([])

  const search = () => {
    const url = `http://www.recipepuppy.com/api/?i=${ingredents}&g=${dish}`
    axios
      .get('https://cors-anywhere.herokuapp.com/' + url, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then(response => response?.data)
      .then(json => setList(json?.results))
      .catch(error => console.error('Error:', error))
  }

  return (
    <>
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredents List</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='garlic, chicken'
            onChange={e => setIngredents(e.target.value)}
          ></FormControl>
        </FormGroup>{' '}
        <FormGroup>
          <FormLabel>DIsh</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='adobo'
            onChange={e => setDish(e.target.value)}
          ></FormControl>
        </FormGroup>{' '}
        <Button onClick={search}>Submit</Button>
      </Form>

      <div>
        <RecipeList lists={list} />
      </div>
    </>
  )
}

export default SearchRecipes
