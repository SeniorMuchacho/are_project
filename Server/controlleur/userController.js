const account = require('./account/lib.js');
const express = require('express');
var router = express.Router();

router.post('/login', account.login);
router.post('/signup',account.signup);
router.post("/sociallogin", account.sociallogin);

module.exports = router ;

