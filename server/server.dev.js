import Express from 'express'
import http from 'http'
import { renderDom } from './html'
import { DEV_IP, DEV_PORT } from './config'


// const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('../webpack/webpack')
const compiler = webpack(webpackConfig)

const app = new Express()

const server = new http.Server(app)
const publicPath = 'http://'+DEV_IP+':'+DEV_PORT+webpackConfig.output.publicPath

console.log(publicPath)

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204)
})

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: publicPath,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log, //false
  path: "/__webpack_hmr",
  heartbeat: 10 * 1000
}))

app.use('/static', Express.static(path.join(__dirname, '/../static/')))
app.use('/dist', Express.static(path.join(__dirname, '/../dist/')))

app.get(/.*/, (req, res) => {
  const domain = req.get('host').replace(/\:.*/, '')
  res.end(renderDom('', DEV_PORT, domain))
})

// app.use(handleRender)
server.listen(DEV_PORT, DEV_IP, () => {
  const host = server.address().address
  console.log('Node Express Server is running on http://%s:%s', (DEV_IP !== '') ? DEV_IP : 'app.localhost', DEV_PORT)
})