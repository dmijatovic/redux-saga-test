import {createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

//reducers
// import modAReducers from './modA'
import modBReducers from './modB'

//sagas
import {modAsaga} from './modA/sagas'
import modBsaga from './modB/sagas'

// combine reducer modules
const reducers = combineReducers({
  // modA:modAReducers,
  modB:modBReducers
})

const mwSaga = createSagaMiddleware()

const reduxStore = createStore(
  reducers,
  applyMiddleware(mwSaga)
)

mwSaga.run(modAsaga)
mwSaga.run(modBsaga)

export default reduxStore