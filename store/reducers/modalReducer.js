import * as types from "../types";

const initialState={
  isModalOpen:false,
  modalType:null
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type){

    case types.OPEN_MODAL : {
      return {...state, isModalOpen:true}
    }

    case types.CLOSE_MODAL : {
      return {...state, isModalOpen:false}
    }

    default:return state
  }
}
