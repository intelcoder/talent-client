import Express from 'express'
import handleRender from './handleRender'
import { PROD_PORT } from './api.config'

const path = require('path')
const app = new Express()

app.use('/static', Express.static(path.join(__dirname, '/../static/')))
app.use('/dist', Express.static(path.join(__dirname, '/../dist/')))

app.use(handleRender)
app.listen(PROD_PORT, (error) => {
  if (error) console.error(error)
  else console.info(`App: listening on port ${PROD_PORT}. Open up https://localhost:${PROD_PORT}/ in your browser.`)
})
