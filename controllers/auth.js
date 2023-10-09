const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async(req, res)=> {
    try {
        //checkUser 
        const { name, password } = req.body

        var user = await User.findOne({ name })
        if(user){
            return res.send('มี User อยู่แล้ว').status(400)
        }
        //Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            name,
            password
        })
        user.password = await bcrypt.hash(password,salt)

        await user.save()
        res.send('Save')

        






        res.send(req.body)
        
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}

exports.login = async(req, res)=> {
    try {
        //check User
        const { name, password } = req.body
        var user = await User.findOneAndUpdate({ name },{ new: true })
        console.log(user)
        if(user) {
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).send('Password ผิด')
            }
            //Payload
            var payload = {
                user:{
                    name:user.name
                }
            }
            //Gen
            jwt.sign(payload,'jwtsecret', { expiresIn:10},(err,token)=>{
                if(err) throw err;
                res.json({ token, payload })
            })

        }else {
            return res.status(400).send('User not found!!')
        }
        
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}