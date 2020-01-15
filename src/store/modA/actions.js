/**
 * Module A actions
 */

export const actionType = {
  ACTION_A1_INIT:Symbol(),
  ACTION_A1_DONE:Symbol(),
  ACTION_A1_ERR:Symbol(),

  ACTION_A2_INIT:Symbol(),
  ACTION_A2_DONE:Symbol(),
  ACTION_A2_ERR:Symbol(),

  ACTION_A3_INIT:Symbol(),
  ACTION_A3_DONE:Symbol(),
  ACTION_A3_ERR:Symbol(),

  ACTION_INIT:Symbol(),
  ACTION_WAITING:Symbol(),
  ACTION_DONE:Symbol(),
  ACTION_ERR:Symbol(),
}

// define action creators
export const actionA1=(payload)=>{
  return {
    type: actionType.ACTION_A1_INIT,
    payload
  }
}

export const actionA2=(payload)=>{
  return {
    type: actionType.ACTION_A2_INIT,
    payload
  }
}

export const actionA3=(payload)=>{
  return {
    type: actionType.ACTION_A3_INIT,
    payload
  }
}


