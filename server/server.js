const ENV = process.env.NODE_ENV
const fs = require('fs')
const path = require('path')
var CWD = process.cwd()
console.log(CWD)
const config = JSON.parse(fs.readFileSync(CWD + '/.babelrc'))

console.log(ENV)
if(ENV === 'development') {
  require('babel-core/register')(config)
  require('./server.dev')
} else if(ENV === 'production') {
  require('css-modules-require-hook')({
    generateScopedName: '[hash:base64:5]',
  })
  require('babel-core/register')(config)
  require('./server.prod')
}

console.log('===[ '+ENV.toUpperCase()+' SERVER STARTED ]===')