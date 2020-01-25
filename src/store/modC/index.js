import {combineReducers} from 'redux'

import {C1Reducer,C2Reducer,C3Reducer,C4Reducer} from './reducers'

const modBReducers = combineReducers({
  C1: C1Reducer,
  C2: C2Reducer,
  C3: C3Reducer,
  C4: C4Reducer
})

export default modBReducers