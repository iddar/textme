'use strict'
const Five = require('johnny-five')
const board = new Five.Board({repl: false})

function setup (callback) {
  board.on('ready', () => {
    let devices = {}
    devices.lcd = new Five.LCD({
      controller: 'JHD1313M1'
    })
    callback(null, devices)
  })
}

module.exports = setup
