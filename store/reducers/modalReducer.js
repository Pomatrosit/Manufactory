import * as types from "../types";

const initialState={
  isModalOpen:false,
  modalType:null
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type){

    case types.SET_MODAL_OPEN : {
      return {...state, isModalOpen:action.payload}
    }

    default:return state
  }
}
