import { createStore, applyMiddleware, compose} from 'redux'
import React from 'react'
import { createLogger } from 'redux-logger'
import {routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../rootReducer'



export default function configureStore(history = {}, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        //createLogger()
      )
    )
  ) 

  if(module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer').default
      store.replaceReducer(nextRootReducer)
    })

  
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store

}