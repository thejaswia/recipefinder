import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FavoriteRecipeList from './components/FavoriteRecipeList'

const store = createStore(rootReducer)

store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/favorite' component={FavoriteRecipeList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
