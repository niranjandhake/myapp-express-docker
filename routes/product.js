const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, description, price from product`
    connection.query(statement, (error, data) => {
        connection.end()
        if(error==null)
        {
            response.send(JSON.stringify(data));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
        
    })
})

router.post('/', (request, response) => {
    const {title,description,price} = request.body  
    const connection = db.connect()
    const statement = `insert into product (title, description, price) values ('${title}', '${description}', '${price}')`
    connection.query(statement, (error, data) => {
        connection.end()
        if(error==null)
        {
            response.send(JSON.stringify(data));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})

module.exports =router