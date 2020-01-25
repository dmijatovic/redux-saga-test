import { actionType } from './actions'
import Status from '../utils/status'

/**
  * Default module B state
  */
export const defaultState={
  C1:{
    name:'Data after 3 clicks',
    action:{
      type: actionType.MOD3_INIT_EVERY,
      src:'C1',
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  C2:{
    name:'Login first',
    action:{
      type: actionType.MOD3_LOGIN,
      src:'C2'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  C3:{
    name:'Logout after login',
    action:{
      type: actionType.MOD3_LOGOUT,
      src:'C3'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  C4:{
    name:'take (once)',
    action:{
      type: actionType.MOD3_INIT_ONCE,
      src:'C4'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  }
}

function reduceIt(state,action){
  switch(action.type){
  case actionType.MOD3_INIT_EVERY:
  case actionType.MOD3_INIT_ONCE:
  case actionType.MOD3_LOGIN:
  case actionType.MOD3_LOGOUT:
    //increase counter only when IDLE
    if (state.status === Status.IDLE){
      return {
        ...state,
        clicks: state.clicks+1,
      }
    }
    return state
  case actionType.MOD3_WAITING:
    return {
      ...state,
      status:Status.WAITING,
    }
  case actionType.MOD3_DONE:
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.COMPLETED,
      resp:{
        ...action.payload
      }
    }
  case actionType.MOD3_ERR:
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.FAILED,
      resp:{
        ...action.payload
      }
    }
  default:
    return state
  }
}


/**
 * Module A reducer
 * @param {Object} state
 * @param {Object} action
 */
export const C1Reducer = (state=defaultState.C1,action)=>{
  if (action.src &&
    action.src==='C1'){
    // we only react on src===C1 data
    console.log('C1Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const C2Reducer = (state=defaultState.C2,action)=>{
  if (action.src &&
    action.src==='C2'){
    // we only react on src===C2 data
    console.log('C2Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const C3Reducer = (state=defaultState.C3,action)=>{
  if (action.src &&
    action.src==='C3'){
    // we only react on src===C3 data
    console.log('C3Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const C4Reducer = (state=defaultState.C4,action)=>{
  if (action.src &&
    action.src==='C4'){
    // we only react on src===C3 data
    console.log('C4Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}