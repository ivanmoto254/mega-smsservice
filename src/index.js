const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ all: 'ok' })
})
app.listen(process.env.PORT || 8080, () => {
  console.log('Server started')
})
const hy = require('hy-core')()
// console.log('hys', Object.keys(hy))
hy.log('shit', 'asdajj')
