import * as types from "../types";

export const setModalOpen = bool => {
  return{
    type:types.SET_MODAL_OPEN,
    payload:bool
  }
}
