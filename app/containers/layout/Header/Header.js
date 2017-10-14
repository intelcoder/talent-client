import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SIGN_UP_MODAL, LOGIN_MODAL } from 'Data/modal'

import css from './styles.css'

class Header extends Component {

  onLoginClick = () => {
    this.props.toggleModal(LOGIN_MODAL)
  }

  onSignUpClick = () => {
    this.props.toggleModal(SIGN_UP_MODAL)
  }

  render() {
    const { isAuthenticated, toggleModal } = this.props
    return (
      <div className={css.header}>
        <div className={css.leftMenus}>
          <div className={css.logo}>
            <Link to='/'>Logo </Link>
          </div>
          <div>
            <Link to='/course'>Courses </Link>
          </div>
          <div>Become tutor</div>
          <div>Service</div>
        </div>
        <div className={css.menus}>
          <div onClick={this.onSignUpClick}>Sign Up</div>
          {
            !isAuthenticated && <div onClick={this.onLoginClick}>Login</div>
          }
          <div>My page</div>
        </div>
      </div>
    )
  }
}

export default Header