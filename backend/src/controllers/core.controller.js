const jwt = require('jsonwebtoken');
const coreCtrl = {};

coreCtrl.verifyToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauhtorized Request')
        }

        /* por convencion los token llevan la palabra 'Bearer '
        con esto se optiene el token solamente */
        const token = req.headers.authorization.split(' '/* < Need 2 spaces */)[1];
        //const token = req.headers.authorization;
        // console.log(" * Token: "+token)

        if (token === 'null') {
            return res.status(401).send('Unauhtorized Request')
        }

        const payload = await jwt.verify(token, process.env.SECRET_KEY);

        if (!payload) {
            return res.status(401).send('Unauhtorized Request')
        }

        req.userId = payload._id;
        next();
        
    } catch(e){
        //console.log(e)
		return res.status(401).send(`401 ${e.message}`);
    }
}

module.exports = coreCtrl;