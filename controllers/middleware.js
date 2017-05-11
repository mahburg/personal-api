var exports = module.exports = {};
const skillz = require('../skillz');

exports.addHeaders = function (req, res, next) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Contol-Methods': 'OPTIONS, GET, POST, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
}

exports.assignID = function (req,res,next) {
    req.body.id = skillz.length +1;

    next();
}

exports.auth = function (req,res,next) {
    if (req.params.username && req.params.pin){
        if (req.params.username === "radmin" && req.params.pin == '0258') {
            next();
        } else {
        res.status(401).send('User not authorized');            
        }
    } else {
        res.status(401).send('User not authorized');
    }
}