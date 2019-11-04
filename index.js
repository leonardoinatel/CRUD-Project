const express = require('express')
const path = require('path')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.port || 3000

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'8785491',
    database: 'cadastro'
})
const dependencies = {
    connection
}

const pessoas = require('./routes/pessoas')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static('public'))

app.get('/',(req,res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

//view engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

connection.connect(() => {
    app.listen(port, () => {
        console.log('CRUD listening on port: '+port)
    })
})
