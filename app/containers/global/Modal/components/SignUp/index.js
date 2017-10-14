import React from 'react'
import css from './styles.css'


const SignUp = () => {
  return(
    <div className={css.SignUp}>
      <div>
        <div>
          <div>Email</div>
          <input type="text" />
        </div>
        <div>
          <div>Password</div>
          <input type="text" />
        </div>
        <div>
          <button>Facebook</button>
          <button>Google</button>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp