import { createStore, applyMiddleware, compose} from 'redux'
import React from 'react'
import { createLogger } from 'redux-logger'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware, { END } from 'redux-saga'
import { combineReducers } from 'redux'

import rootReducer from '../rootReducer'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


export default function configureStore(history = {}, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      rootReducer,
    }),
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