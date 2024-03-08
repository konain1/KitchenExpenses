

const express = require('express')
const cors = require('cors')

const app = express();

const {router}  = require('./routes/user')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/',router)

app.listen(3001,()=>console.log('server 3001'))