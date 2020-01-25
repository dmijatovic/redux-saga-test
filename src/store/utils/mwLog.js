
const mwLog = store => next => action =>{
  console.log('mwLog.dispathing...', action)
  next(action)
}

export default mwLog