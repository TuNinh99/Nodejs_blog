// http://localhost:3000/

/*
 * install lib nodemon => khi file thay doi, tu dong chay lai server va chay debug
 * local: npm install --save-dev nodemon 
 */

/*
 * morgan:  logger HTTP request - in ra cac log xem require duoc gui len server chua
 */

/*
 * Template Engine - handlebars
 *  
 */

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes/index')

/*
  * Config read static file
  * Ex: http://localhost:3000/img/logo.png
*/
app.use(express.static(path.join(__dirname, 'public')))

//Use middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

//Template Engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})