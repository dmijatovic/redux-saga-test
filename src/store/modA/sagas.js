/**
 * Module A sagas
 */

import {take, put, call} from 'redux-saga/effects'

import {actionType} from './actions'
import { randomPromiseResolver } from '../utils/asyncSym'


function * sagaA1(params){
  console.log('sagaA1...params', params)
  try{
    const resp = yield(randomPromiseResolver())
    yield put({type:actionType.ACTION_A1_DONE, payload:resp})
  } catch(e){
    yield put({type:actionType.ACTION_A1_ERR, payload: e})
  }
}

function * sagaA2(params){
  console.log('sagaA2...params', params)
  //do A1 with promise resolver
  try{
    const resp = yield(randomPromiseResolver())
    yield put({type:actionType.ACTION_A2_DONE, payload:resp})
  } catch(e){
    yield put({type:actionType.ACTION_A2_ERR, payload: e})
  }
}

export function * modAsaga(){
  // 1 sequence of mod A
  yield take(actionType.ACTION_A1_INIT)
  console.log('modAsaga...sagaA1')
  yield call(sagaA1)

  yield take(actionType.ACTION_A2_INIT)
  console.log('modAsaga...sagaA2')
  yield call(sagaA2)
}




