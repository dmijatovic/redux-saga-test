import {takeLeading, takeEvery, takeLatest, take, put, call, all } from 'redux-saga/effects'

import {actionType} from './actions'
import { randomPromiseResolver} from '../utils/asyncSym'


function * performRandomPromise(action){
  console.log('performRadomPromise...action', action)
  try{
    yield put({
      type:actionType.ACTION_WAITING,
      src: action.src,
      payload:{
        ...action.payload
      }
    })
    const resp = yield(randomPromiseResolver())
    yield put({
      type: actionType.ACTION_DONE,
      src: action.src,
      payload:{
        ...resp
      }
    })
  } catch(e){
    yield put({
      type:actionType.ACTION_ERR,
      src: action.src,
      payload:{
        ...e
      }
    })
  }
}

function* everyInitSaga(){
  yield takeEvery(actionType.ACTION_INIT_EVERY, performRandomPromise)
}

function* latestInitSaga(){
  yield takeLatest(actionType.ACTION_INIT_LAST, performRandomPromise)
}

function* leadingInitSaga(){
  yield takeLeading(actionType.ACTION_INIT_FIRST, performRandomPromise)
  // yield call(performRandomPromise)
}

function* onceInitSaga(){
  // console.log('onceInitSaga...')
  // take returns action taken
  const action = yield take(actionType.ACTION_INIT_ONCE)
  // console.log('onceInitSaga...action', action)
  // we call and pass action as argument
  yield call(performRandomPromise,action)
}

/**
 * Initialize all sagas. DO NOT FORGET TO CALL THEM ()
 */
export default function* modBSaga(){
  yield all([
    everyInitSaga(),
    latestInitSaga(),
    leadingInitSaga(),
    onceInitSaga()
  ])
}

