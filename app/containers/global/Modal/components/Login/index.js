import React, { Component } from 'react'
import css from './styles.css'


class Login extends Component {
  render() {
    return(
      <div className={css.login}>
        <div>
          <div>
            <div>Id</div>
            <input type="text" />
          </div>
          <div>
            <div>Password</div>
            <input type="text" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login