
export const textStore={
  app:{
    title:'Redux Saga demo',
    body:`
    This page demos basic effect of redux saga. There are 4 options:
    <ul>
      <li>takeEvery: will perfom fake Promise resolve on each click</li>
      <li>takeLatest: will perfom fake Promise resolve on last click in a row (debounce)</li>
      <li>takeLeading: will perfom fake Promise resolve on each click</li>
      <li>takeEvery: will perfom fake Promise resolve on each click</li>
    </ul>
    Note! randomPromiseResolve will randomly resolve or reject call
    (based on random number generated in the function).    
    `
  }
}