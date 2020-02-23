const { Router } = require("express");
const router = Router();
const authCtrl = require('../controllers/auth.controller')

//router.route('/').get(authCtrl.sayHello)

router.post('/singup', authCtrl.singUp)
router.post('/singin', authCtrl.singIn)
module.exports = router;