import { connect } from 'react-redux'
import Header from './Header'
import { toggleModal } from 'Modules/modal/actions'

export default connect(state => ({
  isModalOpen: state.modal.isModalOpen,
}),{
  toggleModal,
})(Header)