'use strict'
const Board = require('./lib/board')
const Server = require('./lib/server')
const socketServer = require('./lib/socket')
const onStartSocket = require('./events')

Board((err, devices) => {
  if (err) return console.error(err)
  const server = Server({PORT: 3000})
  socketServer(server, onStartSocket.bind(null, devices))
})
