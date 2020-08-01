import React, { Component } from 'react'
import axios from 'axios'
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions/setRecipes'

class SearchRecipes extends Component {
  constructor() {
    super()

    this.state = {
      ingredents: '',
      dish: '',
    }
  }

  search = () => {
    let { ingredents, dish } = this.state
    const url = `http://www.recipepuppy.com/api/?i=${ingredents}&g=${dish}`
    axios
      .get('https://cors-anywhere.herokuapp.com/' + url, {})
      .then(response => response?.data)
      .then(json => this.props.setRecipes(json?.results))
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredents List</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='garlic, chicken'
            onChange={event =>
              this.setState({ ingredents: event.target.value })
            }
          ></FormControl>
        </FormGroup>{' '}
        <FormGroup>
          <FormLabel>DIsh</FormLabel>{' '}
          <FormControl
            type='text'
            placeholder='adobo'
            onChange={event => this.setState({ dish: event.target.value })}
          ></FormControl>
        </FormGroup>{' '}
        <Button onClick={this.search}>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { setRecipes })(SearchRecipes)
