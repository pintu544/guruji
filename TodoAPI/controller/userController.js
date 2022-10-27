const User  =  require('../models/User')
const jwt = require('jsonwebtoken');

// create user
exports.signup = async(req,res) =>{
    try {
        const user = await User.findOne({email: req.body.email})

        if(user){
            return res.status(400).json({message: 'user already exist.'});
        }
        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        if(!newUser){
            return res.status(400).json({message: 'User creation error.'});
        }

        return res.status(200).json({ message: 'User added successful.'});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

// sign in user
exports.signin = async(req,res) =>{
    try {
        const user = await User.findOne({email: req.body.email})

        if(!user){
            return res.status(400).json({message: 'Invalid user/email'});
        }

        if(req.body.password !== user.password){
            return res.status(400).json({message: 'Invalid password'});
        }

        const {_id, email} = user
        var jwtToken = jwt.sign({_id, email}, req.app.get('secretKey'), {expiresIn: '1800'});

        return res.status(200).json({token:jwtToken, message: 'SignIn successful.'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}