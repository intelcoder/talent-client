import 'react-hot-loader/patch'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import AppRoot from 'Containers/Root'
import rootSaga from 'Redux/rootSaga'
import configureStore from 'Redux/store/store.dev'



const preloadedState = window.__INITIAL_STATE__
const history = createHistory()
const store = configureStore(history, preloadedState)
store.runSaga(rootSaga)
const domRoot = document.getElementById('root')
const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoot />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    domRoot
  )
}


// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept()
  setImmediate(() => {
    // Preventing the hot reloading error from react-router
    unmountComponentAtNode(domRoot)
    renderApp()

  })
}

renderApp()