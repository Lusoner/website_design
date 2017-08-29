import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import MainPage from './components/MainPage/index'

export default class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="index" component={MainPage}/>
        </Route>
      </Router>
    )
  }
}
