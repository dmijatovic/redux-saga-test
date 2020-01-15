/**
 * Module A actions
 */

export const actionType = {
  ACTION_INIT_EVERY:'@ACTION_INIT_EVERY',
  ACTION_INIT_FIRST:'@ACTION_INIT_FIRST',
  ACTION_INIT_LAST:'@ACTION_INIT_LAST',
  ACTION_INIT_ONCE:'@ACTION_INIT_ONCE',
  ACTION_WAITING:'@ACTION_WAITING',
  ACTION_DONE:'@ACTION_DONE',
  ACTION_ERR:'@ACTION_ERR',

}

// define action creators
export const actionB1=(payload)=>{
  return {
    type: actionType.ACTION_INIT_EVERY,
    payload
  }
}

export const actionB2=(payload)=>{
  return {
    type: actionType.ACTION_INIT_LAST,
    payload
  }
}

export const actionB3=(payload)=>{
  return {
    type: actionType.ACTION_INIT_ONCE,
    payload
  }
}


