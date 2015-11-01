'use strict'
const onStartSocket = (devices, socket) => {
  socket.on('text', (message) => {
    devices.lcd.clear().print(message)
  })

  socket.on('color', (rgbColor) => {
    devices.lcd.bgColor(rgbColor.r, rgbColor.g, rgbColor.b)
  })
}

module.exports = onStartSocket
