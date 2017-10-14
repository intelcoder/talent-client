import {
  TOGGLE_MODAL,
} from './actions'


const initialState = {
  isModalOpen: false,
  modalType: null,
  modalData: null,
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalType: action.modalType,
        modalData: action.modalData,
      }
  }
  return state
}

export default modalReducer