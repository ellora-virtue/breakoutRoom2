const path = require('path')
const express = require('express')
const cors = requre('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.resolve('public')))

module.exports = server
