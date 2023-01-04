// http://localhost:3000/

/*
 * install nodemon => khi file thay doi, tu dong chay lai server va chay debug
 * local: npm install --save-dev nodemon 
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  var a = 1 
  var b = 2
  var c = a + b
  res.send('Hello World!, UET')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})