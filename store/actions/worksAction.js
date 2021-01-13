import * as types from "../types";

export const setActiveCategory = category => {
  return{
    type:types.SET_WORKS_CATEGORY,
    payload:category
  }
}
