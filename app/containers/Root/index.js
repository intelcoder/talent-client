import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Router from './routes'
import './styles.css'

import { Header, Footer } from 'Layout'
import Modal from 'Global/Modal'

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
        <Modal />
      </div>
    )
  }
}

export default Root