const User = require('../../model/ModelUser.js');
const passwordHash = require("password-hash");

function signup(req, res) {
    console.log("new user", req.body)
    if (!req.body.email || !req.body.password || !req.body.username) {
        return (res.status(400).json({
            "text": "Requête invalide"
        }))
    } else {
        var user = {
            username : req.body.username,
            email: req.body.email,
            password: passwordHash.generate(req.body.password)
        }
        var findUser = new Promise(function (resolve, reject) {
            User.findOne({
                username: user.username
            }, function (err, result) {
                if (err) {
                    reject(500);
                } else {
                    if (result) {
                        reject(204)
                    } else {
                        resolve(true)
                    }
                }
            })
        })

        findUser.then(function () {
            var _u = new User(user);
            _u.save(function (err, user) {
                if (err) {
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
                } else {
                    return (res.status(200).json({
                        "text": "Succès",
                        "token": "usertoken"
                    }))
                }
            })
        }, function (error) {
            switch (error) {
                case 500:
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
                    break;
                case 204:
                    return (res.status(204).json({
                        "text": "L'adresse email existe déjà"
                    }))
                    break;
                default:
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
            }
        })
    }
}

function login(req, res) {
    console.log("new connection", req.body)
    if (!req.body.password  || !req.body.username) {
        res.status(400).json({
            "text": "Requête invalide"
        })
    } else {
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) {
                res.status(500).json({
                    "text": "Erreur interne"
                })
            }
            else if(!user){
                res.status(401).json({
                    "text": "L'utilisateur n'existe pas"
                })
            }
            else {
                if (user.authenticate(req.body.password)) {
                    res.status(200).json({
                        "token": user.getToken(),
                        "text": "Authentification réussi"
                    })
                }
                else{
                    res.status(401).json({
                        "text": "Mot de passe incorrect"
                    })
                }
            }
        })
    }
}

function sociallogin(req, res) {
    console.log("new connection from", req.body.resaux);
    if (req.body.resaux == 'google') {
        var user = {
            username : req.body.sociallogin.name,
            google : {
            id: req.body.sociallogin.id,
		    token: req.body.sociallogin.token,
		    email: req.body.sociallogin.email,
		    name: req.body.sociallogin.name
            }
        }
    }
    if (req.body.resaux == 'facebook') {
        var user = {
            username : req.body.sociallogin.name,
            facebook : {
                id: req.body.sociallogin.id,
                token: req.body.sociallogin.token,
                email: req.body.sociallogin.email,
                name: req.body.sociallogin.name
            }
        }
    }
    var findUser = new Promise(function (resolve, reject) {
        User.findOne({
            username: user.username
            }, function (err, result) {
                if (err) {
                    reject(500);
                } else {
                    if (result) {
                        reject(204)
                    } else {
                        resolve(true)
                    }
                }
            })
        })

        findUser.then(function () {
            var _u = new User(user);
            _u.save(function (err, user) {
                if (err) {
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
                } else {
                    return (res.status(200).json({
                        "text": "Succès",
                        "token": "usertoken"
                    }))
                }
            })
        }, function (error) {
            switch (error) {
                case 500:
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
                    break;
                case 204:
                    return (res.status(200).json({
                        "text": "Succès",
                        "token": "usertoken"
                    }))
                    break;
                default:
                    return (res.status(500).json({
                        "text": "Erreur interne"
                    }))
            }
        })
}

exports.login = login;
exports.signup = signup;
exports.sociallogin = sociallogin;


