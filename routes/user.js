
const express = require('express')

const router = express.Router()

const {signup,login,Getusers, AddExpenses, GetUserById} = require('../controller/user')

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',Getusers)
router.get('/add' ,AddExpenses)
router.get('/userbyid:id',GetUserById)

module.exports = {router}