import { actionType } from './actions'
import Status from '../utils/status'

/**
  * Default module B state
  */
export const defaultState={
  B1:{
    name:'takeEvery',
    action:{
      type: actionType.ACTION_INIT_EVERY,
      src:'B1',
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  B2:{
    name:'takeLatest',
    action:{
      type: actionType.ACTION_INIT_LAST,
      src:'B2'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  B3:{
    name:'takeLeading',
    action:{
      type: actionType.ACTION_INIT_FIRST,
      src:'B3'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  },
  B4:{
    name:'take (once)',
    action:{
      type: actionType.ACTION_INIT_ONCE,
      src:'B4'
    },
    clicks:0,
    attempts:0,
    status:Status.IDLE,
    resp:null
  }
}

function reduceIt(state,action){
  switch(action.type){
  case actionType.ACTION_INIT_EVERY:
  case actionType.ACTION_INIT_ONCE:
  case actionType.ACTION_INIT_FIRST:
  case actionType.ACTION_INIT_LAST:
    return {
      ...state,
      clicks: state.clicks+1,
      status: Status.IDLE
    }
  case actionType.ACTION_WAITING:
    return {
      ...state,
      status:Status.WAITING,
    }
  case actionType.ACTION_DONE:
    return {
      ...state,
      attempts: state.attempts+1,
      status:Status.COMPLETED,
      resp:{
        ...action.payload
      }
    }
  case actionType.ACTION_ERR:
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
export const B1Reducer = (state=defaultState.B1,action)=>{
  if (action.src &&
    action.src==='B1'){
    // we only react on src===B1 data
    console.log('B1Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const B2Reducer = (state=defaultState.B2,action)=>{
  if (action.src &&
    action.src==='B2'){
    // we only react on src===B1 data
    console.log('B2Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const B3Reducer = (state=defaultState.B3,action)=>{
  if (action.src &&
    action.src==='B3'){
    // we only react on src===B3 data
    console.log('B3Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}

export const B4Reducer = (state=defaultState.B4,action)=>{
  if (action.src &&
    action.src==='B4'){
    // we only react on src===B3 data
    console.log('B4Reducer...', action)
    return reduceIt(state,action)
  } else {
    return state
  }
}