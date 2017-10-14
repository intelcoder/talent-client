
import { actionCreator } from 'Redux/helpers'

export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const toggleModal = (modalType, modalData = {}) => actionCreator(TOGGLE_MODAL, { modalType, modalData })