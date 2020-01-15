# Redux Saga demo

This project demos redux saga possibilities. Saga uses ES6 generator functions to be able to execute chain of operations in specific order. It enables cancelling en roll-back implementation in case of errors.

The yield in SAGA works only with promise based async calls. DO NOT USE TIMEOUT as this is not promise based (it is callback based).

## Saga effects

- blocking effects
  - CALL: params (fn, ...args)
  - TAKE
  - RACE
  - CANCELLED

- non-blocking effects
  - PUT: equvivalent to dispatch(action)
  - FORK
  - SPAWN
  - CANCEL
  - ACTIONCHANNEL

## Saga helpers

- TAKE: will only call generator function ONCE
- TAKE EVERY: catches every action dispatch and handles it
- TAKE LAST: catches every action dispatch BUT handles only last one (debounce effect). What is the delay here?

## Setup

```bash
# install redux libs
npm i -s redux react-redux redux-saga

```
