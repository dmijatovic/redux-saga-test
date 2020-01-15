import { actionType } from "../actions"
import Status from '../utils/status'

/**
 * Module A reducers
 */


 /**
  * Default module A state
  */
export const defaultState={
  A1:{
    status:Status.IDLE,
    data:null
  },
  A2:{
    status:Status.IDLE,
    data:null
  },
  A3:{
    status:Status.IDLE,
    data:null
  }
}

/**
 * Module A reducer
 * @param {Object} state
 * @param {Object} action
 */
export const modAReducer = (state,action)=>{
  switch(action.type){
    case actionType.ACTION_A1:
      return {
        ...state,
        A1:{
          status:Status.COMPLETED,
          data: action.payload
        }
      }
    case actionType.ACTION_A2:
      return {
        ...state,
        A2:{
          status:Status.COMPLETED,
          data: action.payload
        }
      }
    case actionType.ACTION_A3:
      return {
        ...state,
        A3:{
          status:Status.COMPLETED,
          data: action.payload
        }
      }
    default:
      return state
  }
}