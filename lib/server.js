'use strict'
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000
const path = require('path')
const pub = path.resolve(__dirname, '..', 'public')

app.use(express.static(pub))

http.listen(PORT, () => {
  console.log('http://localhost:' + PORT)
})

function socketServer (callback) {
  io.on('connection', (socket) => {
    console.log('Socket.io Ok')
    callback(socket)
  })
}

module.exports = socketServer
