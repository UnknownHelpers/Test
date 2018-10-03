import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import store from './store'
import { Provider } from 'react-redux'
import {Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './icons'
import * as bs from 'bootstrap/dist/css/bootstrap.css'

const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
