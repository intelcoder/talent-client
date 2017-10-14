
import { connect } from 'react-redux'
import { toggleModal } from 'Modules/modal/actions'

import Modal from './Modal'

export default connect(state => {
  return {
    isModalOpen: state.modal.isModalOpen,
    modalType: state.modal.modalType,
    modalData: state.modal.modalData,
  }
}, {
  toggleModal,
})(Modal)