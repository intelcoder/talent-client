// import request from 'superagent-bluebird-promise'
import React from 'react'
import Helmet from 'react-helmet'
import createHistory from 'history/createMemoryHistory'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'Redux/store/configureStore'
import rootSaga from '../react/redux/rootSaga'

import AppRoot from '../react/containers/root/AppRoot'

import { renderDom } from './html'
import {
  DEV_PORT,
  PROD_PORT
} from './api.config'

const handleRender = (req, res) => {
  const port = (process.env.NODE_ENV === 'production') ? PROD_PORT : DEV_PORT
  const urlPath = req.url
  const status = res.status
  const host = req.get('host').replace(/\:.*/, '')
  const history = createHistory()


  const head = Helmet.rewind();
        head.url = `https://${host}${urlPath}`

  const store = configureStore(history, {})
  const context = {}

  const htmlRoot =  <Provider store={store}>
                      <StaticRouter location={urlPath} context={context}>
                        <AppRoot />
                      </StaticRouter>
                    </Provider>



  store.runSaga(rootSaga).done.then(() => {
    console.log('::[ SAGAS COMPLETE ]::')

    res.status(200).send(
      renderDom(renderToString(htmlRoot), port, host, store.getState(), head)
    )
  }).catch((e) => {
    console.log(e.message)
    res.status(500).send(e.message)
  })

  renderToString(htmlRoot)
  store.close()
}


export default handleRender