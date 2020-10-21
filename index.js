const express = require('express')

const app = new express()

app.use(express.static('dist'))

app.listen(2187)
console.log('http://localhost:2187')
