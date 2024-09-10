const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 4000
mongoDB();


app.get('/', (req, res) => {
  res.send('anil lala')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})