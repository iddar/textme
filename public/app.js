'use strict'
/* global _, io, window, hexToRgb */
const socket = io.connect(window.location.origin)
const inputs = document.getElementsByTagName('input')
const text = inputs[0]
const color = inputs[1]

const debounceInput = _.debounce((event) => {
  const value = event.target.value
  socket.emit('text', _.deburr(value))
  console.log(value)
}, 150)

const debounceColor = _.debounce((event) => {
  const value = event.target.value
  socket.emit('color', hexToRgb(value))
  console.log(hexToRgb(value))
}, 25)

text.focus()
text.addEventListener('input', debounceInput)
color.addEventListener('input', debounceColor)
