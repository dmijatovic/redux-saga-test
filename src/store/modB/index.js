import {combineReducers} from 'redux'

import {B1Reducer,B2Reducer,B3Reducer,B4Reducer} from './reducers'

const modBReducers = combineReducers({
  B1: B1Reducer,
  B2: B2Reducer,
  B3: B3Reducer,
  B4: B4Reducer
})

export default modBReducers