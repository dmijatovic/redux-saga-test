import {take,takeEvery, put, call, all } from 'redux-saga/effects'

import {actionType} from './actions'
import { randomPromiseResolver} from '../utils/asyncSym'


function * performRandomPromise(action){
  console.log('performRadomPromise...action', action)
  try{
    yield put({
      type:actionType.MOD3_WAITING,
      src: action.src,
      payload:{
        ...action.payload
      }
    })
    const resp = yield(randomPromiseResolver())
    yield put({
      type: actionType.MOD3_DONE,
      src: action.src,
      payload:{
        ...resp
      }
    })
  } catch(e){
    yield put({
      type:actionType.MOD3_ERR,
      src: action.src,
      payload:{
        ...e
      }
    })
  }
}

function * afterFewClicks(n=3){
  let action=null
  for (let i=0; i<n; i++){
    action = yield take(actionType.MOD3_INIT_EVERY)
    console.log('afterFewClicks...run...', i)
  }
  yield call(performRandomPromise,action)
}

function * firstLoginThanLogout(){
  let action=null
  action = yield take(actionType.MOD3_LOGIN)
  yield call(performRandomPromise,action)

  action = yield take(actionType.MOD3_LOGOUT)
  yield call(performRandomPromise,action)
}


function * onceInitSaga(){
  const action = yield take(actionType.MOD3_INIT_ONCE)
  yield put({
    type: actionType.MOD3_RADOM_PROMISE,
    src: action.src,
    payload:{
      ...action.payload
    }
  })
}

function * onRandomPromise(){
  yield takeEvery(actionType.MOD3_RADOM_PROMISE,performRandomPromise)
}


/**
 * Initialize all sagas. DO NOT FORGET TO CALL THEM ()
 */
export default function* modCSaga(){
  yield all([
    afterFewClicks(3),
    firstLoginThanLogout(),
    onceInitSaga(),
    onRandomPromise()
  ])
}

