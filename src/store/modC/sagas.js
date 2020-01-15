/**
 * Module A sagas
 */

import {take, put, call} from 'redux-saga/effects'

import {actionType} from './actions'
import { randomPromiseResover, callbackAction} from '../utils/asyncSym'

function * sagaA1(params){
  console.log("sagaA1...params", params)
  //do A1 with promise resolver
  const resp1 = yield(randomPromiseResover())
  put(actionType.ACTION_A1, resp1)
}

export function * sequenceA(){
  yield take(actionType.ACTION_A1)

}




