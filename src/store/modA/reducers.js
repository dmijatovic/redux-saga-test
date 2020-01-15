import { actionType } from './actions'
import Status from '../utils/status'

/**
  * Default module A state
  */
export const defaultState={
  A1:{
    name:'Cell A1',
    status:Status.IDLE,
    attempts:0,
    completed:0,
    data:null,
    action: {
      type:actionType.ACTION_A1_INIT
    }
  },
  A2:{
    name:'Cell A2',
    status:Status.IDLE,
    attempts:0,
    completed:0,
    data:null,
    action: {
      type:actionType.ACTION_A2_INIT
    }
  },
  A3:{
    name:'Cell A3',
    status:Status.IDLE,
    attempts:0,
    completed:0,
    data:null,
    action: {
      type:actionType.ACTION_A3_INIT
    }
  }
}

/**
 * Module A reducer
 * @param {Object} state
 * @param {Object} action
 */
export const A1Reducer = (state=defaultState.A1,action)=>{
  switch(action.type){
  case actionType.ACTION_A1_INIT:
    console.log('A1Reducer...INIT', action)
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.WAITING,
      data: 'empty'
    }
  case actionType.ACTION_A1_DONE:
    console.log('A1Reducer...DONE', action)
    return {
      ...state,
      completed: state.completed+1,
      status:Status.COMPLETED,
      data: action.payload
    }
  case actionType.ACTION_A1_ERR:
    console.log('A1Reducer...ERR', action)
    return {
      ...state,
      completed: state.completed+1,
      status:Status.FAILED,
      data: null,
      error: action.payload
    }
  default:
    return state
  }
}

export const A2Reducer = (state=defaultState.A2,action)=>{
  switch(action.type){
  case actionType.ACTION_A2_INIT:
    console.log('A2Reducer...INIT', action)
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.WAITING,
      data: action.payload
    }
  case actionType.ACTION_A2_DONE:
    console.log('A2Reducer...DONE', action)
    return {
      ...state,
      completed: state.completed+1,
      status:Status.COMPLETED,
      data: action.payload
    }
  case actionType.ACTION_A2_ERR:
    console.log('A2Reducer...ERR', action)
    return {
      ...state,
      status:Status.FAILED,
      completed: state.completed+1,
      data: null,
      error: action.payload
    }
  default:
    return state
  }
}

export const A3Reducer = (state=defaultState.A3,action)=>{
  switch(action.type){
  case actionType.ACTION_A3_INIT:
    console.log('A3Reducer...INIT', action)
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.WAITING,
      data: action.payload
    }
  case actionType.ACTION_A3_DONE:
    return {
      ...state,
      completed: state.completed+1,
      status:Status.COMPLETED,
      data: action.payload
    }
  case actionType.ACTION_A3_ERR:
    return {
      ...state,
      completed: state.completed+1,
      status:Status.FAILED,
      data: null,
      error: action.payload
    }
  default:
    return state
  }
}