const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const authCtrl = {};

// DEV
authCtrl.getData = async (req, res) => {
    const data = await User.find()
    res.json(data)
}

authCtrl.singUp = async (req, res, next) => {

    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    const token = await jwt.sign({_id: newUser._id}, process.env.SECRET_KEY);

    res.status(200).json({
        message:"User Created",
        token: token
    });
};

authCtrl.singIn = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(401).json({message:"User Not Exist"});
    if(user.password !== password) return res.status(401).json({message:"Wrong Password"});

    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY)

    return res.status(200).json({
        message:"User Logged",
        token: token
    });
};

module.exports = authCtrl;
