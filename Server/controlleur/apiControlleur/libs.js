const User = require('../../model/ModelUser.js');
const passwordHash = require("password-hash");
const func = require('./googleapi');


function send(req, res) {
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        actualuser.apiOne.name = req.body.api;
        actualuser.save(function (err, updateduser) {
            if (err) return handleError(err);
        });
    });
}

function erase(req, res) {
    User.findOne({ username: req.body.username}, function (err, actualuser) {
        let i = 0;
        while(actualuser.inter[i].nameApi != req.body.api) {
            console.log(actualuser.inter[i].nameApi);
          i++;
        }
        actualuser.inter[i].status = false;
        actualuser.save();
    });
}


function sendTwo(req, res) {
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        actualuser.apiTwo.name = req.body.api;
        actualuser.save(function (err, updateduser) {
            if (err) return handleError(err);
        });
    });
}

function wichapi(req, res) {
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        else {  
            res.status(200).json({
                'apiOne' : actualuser.apiOne.name
            })
        }

    });
}

function wichapiTwo(req, res) {
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        else {
            res.status(200).json({
                'apiTwo' : actualuser.apiTwo.name
            })
        }

    });
}

function connectapi(req, res) {
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        else {
            var pushinter = {
                nameApi : actualuser.apiOne.name ,
                status : true
            }
            actualuser.inter.push(pushinter);
            actualuser.save();
            if (actualuser.apiOne.name == 'facebook') {
                var name = 'func.function' + actualuser.apiOne.name;
                eval(name+"(actualuser.apiTwo, actualuser.facebook)");
            }
            else {
                var name = 'func.function' + actualuser.apiOne.name;
                eval(name+"(actualuser.apiOne, actualuser.apiTwo, actualuser.google, req.body.username)");
            }
        }
    });
}

function getCurrentapi (req, res) {
    console.log(req.body);
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        else {
            console.log(actualuser.inter)
            res.status(200).json({
                'tab' : actualuser.inter
            })
        }

    });
}

function emailapiTwo(req, res) {
    console.log(req.body);
    const { username } = req.body;
    User.findOne({ username: username}, function (err, actualuser) {
        if (err) {
            console.log('ERREUR' + err)
        }
        actualuser.apiTwo.complement= req.body.email;
        actualuser.save(function (err, updateduser) {
            if (err) return handleError(err);
        });
    });
}

    function timeapiOne(req, res) {
        console.log(req.body);
        const { username } = req.body;
        User.findOne({ username: username}, function (err, actualuser) {
            if (err) {
                console.log('ERREUR' + err)
            }
            actualuser.apiOne.complement= req.body.time;
            actualuser.save(function (err, updateduser) {
                if (err) return handleError(err);
            });
        });
}


exports.wichapi = wichapi;

exports.getCurrentapi = getCurrentapi;
exports.send = send;
exports.wichapiTwo = wichapiTwo;
exports.sendTwo = sendTwo;
exports.connectapi = connectapi;
exports.emailapiTwo = emailapiTwo;
exports.timeapiOne = timeapiOne;
exports.erase = erase;


