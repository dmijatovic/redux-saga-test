
/**
 * Simulate async promise call. Default waits for 1s and returns fake data with
 * status,statusText and data properties.
 * @param {*} waitFor
 * @param {*} fakeData
 */
export function randomPromiseResolver(waitFor=1000,
  fakeData={data:'this is default fake data'}){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      const rand = Math.round(Math.random() * 1000)
      if (rand < 500){
        console.log('randomPromiseResolver...OK')
        res({
          ...fakeData,
          status: 200,
          statusText: `OK, random number was ${rand}`
        })
      }else{
        console.log('randomPromiseResolver...ERROR')
        rej({
          status:500,
          statusText:`Error! Because random number was ${rand}`
        })
      }
    },waitFor)
  })
}


export function delayedAction(ms=1000,
  fakeData={data:'this is default fake data'}){
  setTimeout(()=>{
    console.log('Return fake data...', fakeData)
    return fakeData
  },ms)
}