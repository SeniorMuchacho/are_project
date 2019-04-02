
const apiControlleur = require('./apiControlleur/libs.js');
const express = require('express');
var router = express.Router();

router.post('/selectapi', apiControlleur.send);
router.post('/wichapi', apiControlleur.wichapi);

router.post('/connectapi', apiControlleur.connectapi);

router.post('/selectapiTwo', apiControlleur.sendTwo);
router.post('/wichapiTwo', apiControlleur.wichapiTwo);
router.post('/emailapiTwo', apiControlleur.emailapiTwo);
router.post('/timeapiOne', apiControlleur.timeapiOne);
router.post('/getCurrentapi', apiControlleur.getCurrentapi);
router.post('/erase', apiControlleur.erase);

module.exports = router ;

