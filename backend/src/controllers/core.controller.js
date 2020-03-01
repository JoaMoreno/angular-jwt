const jwt = require('jsonwebtoken');
const coreCtrl = {};

coreCtrl.verifyToken = async (req, res, next) => {
    try {
        //console.log(req.headers)
        if (!req.headers['authorization']) {
            return res.status(401).json({
                auth: false,
                message:'Unauhtorized Request headers null'})
        }

        /* por convencion los token llevan la palabra 'Bearer '
        con esto se optiene el token solamente */
        const token = req.headers['authorization'].split(' '/* < Need 2 spaces */)[1];
        // const token = req.headers['authorization'];
        // console.log(" * Token: "+token)

        if (token === 'null') {
            return res.status(401).json({
                auth: false,
                message:'Unauhtorized Request token null'})
        }

        const payload = await jwt.verify(token, process.env.SECRET_KEY);

        if (!payload) {
            return res.status(401).json({
                auth: false,
                message:'Unauhtorized Request payload null'})
        }
        //console.log(payload)
        req.userId = payload._id;
        req.auth = true
        next();
        
    } catch(e){
        //console.log(e)
		return res.status(401).json({
            auth: false,
            message: e.message})
    }
}

module.exports = coreCtrl;