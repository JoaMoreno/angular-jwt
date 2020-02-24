const jwt = require('jsonwebtoken');
const coreCtrl = {};

coreCtrl.verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Not authorized" })
    }

    /* por convencion los token llevan la palabra 'Bearer '
    con esto se optiene el token solamente */
    // const token = req.headers.authorization.split('')[1];
    const token = req.headers.authorization;
    // console.log(" * Token: "+token)
    
    if(token === 'null'){
        return res.status(401).json({ message: "Not authorized" })
    }

    const payload = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload)
}

module.exports = coreCtrl;