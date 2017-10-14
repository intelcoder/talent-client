import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { SIGN_UP_MODAL, LOGIN_MODAL } from 'Data/modal'
import css from './styles.css'

class Modal extends Component {


  renderModal = (type) => {
    console.log(type)
    switch(type) {
      case SIGN_UP_MODAL: 
        return <SignUp />
      case LOGIN_MODAL:
        return <Login />
    }
  }

  render() {
    const { isModalOpen, toggleModal, modalType } = this.props
    const modalStyle = isModalOpen ? css.showModal : css.modal
    
    console.log(modalType)
    return(
      <div className={modalStyle}>
       
        <div className={css.modalBody}>
          <div 
            onClick={toggleModal}
            className={css.close}
          >Close</div>
          {
            this.renderModal(modalType)
          }

        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  isModalOpen: PropTypes.bool,
}

export default Modal