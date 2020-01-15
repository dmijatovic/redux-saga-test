import {combineReducers} from 'redux'

import {A1Reducer,A2Reducer,A3Reducer} from './reducers'

const modAReducers = combineReducers({
  A1: A1Reducer,
  A2: A2Reducer,
  A3: A3Reducer
})

export default modAReducers
