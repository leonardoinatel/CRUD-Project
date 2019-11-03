const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'8785491',
    database: 'cadastro'
})

connection.connect(() => console.log('conected'))

app.use(express.static('public'))

app.get('/',(req,res) => res.render('home'))

//view engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

connection.connect(() => {
    app.listen(port, () => {
        console.log('CRUD listening on port: '+port)
    })
})
