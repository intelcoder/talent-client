import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import {
  Home,
  Course,
  NotFound,
} from 'Pages'
import css from './styles.css'

class Root extends Component {
  render() {
    return (
      <div className={css.mainBody}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/course" component={Course}/>   
          <Route path="*" component={NotFound}/>   
        </Switch>
      </div>
    )
  }
}

export default Root