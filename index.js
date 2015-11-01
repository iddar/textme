'use strict'
const Board = require('./lib/board')
const socketServer = require('./lib/server')

Board((err, devices) => {
  if (err) return console.error(err)
  devices.lcd.bgColor(152, 213, 5)
  socketServer((socket) => {
    socket.on('text', (message) => {
      console.log(message)
      devices.lcd.clear().print(message)
    })

    socket.on('color', (rgbColor) => {
      console.log(rgbColor)
      devices.lcd.bgColor(rgbColor.r, rgbColor.g, rgbColor.b)
    })
  })
})
