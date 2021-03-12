const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.post('/register', async (req, res)=>{
    const {first_name, last_name, email, password} = req.body
    const user = new User({first_name, last_name, email})
    await User.register(user, password)

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router


/*
const register = async (req, res, next) =>{
    const {first_name, last_name, email, password} = req.body
    const user = new User({ first_name, last_name, email})
    await User.register(user, password)

    res.send('User created successfully. Now you can log in.')
}

*/