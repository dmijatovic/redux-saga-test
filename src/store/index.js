import {createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

//reducers
import modAReducers from './modA'
import modBReducers from './modB'
import modCReducers from './modC'

//sagas
import {modAsaga} from './modA/sagas'
import modBsaga from './modB/sagas'
import modCsaga from './modC/sagas'

//other middleware
import mwLog from './utils/mwLog'

// combine reducer modules
const reducers = combineReducers({
  modC:modCReducers,
  modB:modBReducers,
  modA:modAReducers
})

const mwSaga = createSagaMiddleware()

const reduxStore = createStore(
  reducers,
  applyMiddleware(mwSaga, mwLog)
)

mwSaga.run(modAsaga)
mwSaga.run(modBsaga)
mwSaga.run(modCsaga)

export default reduxStore