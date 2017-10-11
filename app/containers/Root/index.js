import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import {
  Home,
  Course,
} from 'Pages'

class Root extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/course" component={Course}/>   
      </Switch>

      </div>
    )
  }
}

export default Root