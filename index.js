//console.log('hello')
const express = require('express');
const { mwfn1 } = require('./middilWare/middileWare');
const app = express();
require('dotenv').config()

app.use(mwfn1)

app.post('/route/:name/:surname',(req,res)=>{
    console.log(req.params.name)
    console.log(req.params.surname)
    res.json({
            "msg":"hello everyone how are you",
            "name":req.params.name,
            "surname":req.params.surname

    })
})


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`this is port number is ${PORT}`)
})