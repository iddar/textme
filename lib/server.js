'use strict'
const express = require('express')
const app = express()
const http = require('http').Server(app)

const path = require('path')

function server (config) {
  const PORT = process.env.PORT || config.PORT
  const pub = path.resolve(__dirname, '..', 'public')
  app.use(express.static(pub))

  http.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
  })

  return http
}

module.exports = server
