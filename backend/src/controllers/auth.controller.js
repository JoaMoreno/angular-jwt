const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const authCtrl = {};

authCtrl.singUp = async (req, res, next) => {

    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, process.env.SECRET_KEY)

    res.status(200).json({
        messagge:"User Created",
        token: token
    });
};

authCtrl.singIn = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(401).json({messagge:"User Not Exist"});
    if(user.password !== password) return res.status(401).json({messagge:"Wrong Password"});

    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY)

    return res.status(200).json({
        messagge:"User Logged",
        token: token
    });
};

module.exports = authCtrl;