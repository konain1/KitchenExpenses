
const express = require('express')

const router = express.Router()

const {signup,login,Getusers} = require('../controller/user')

router.post('/signup',signup)
router.post('/login',login)
router.get('/users',Getusers)

module.exports = {router}