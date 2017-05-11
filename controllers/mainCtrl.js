var exports = module.exports = {};
var user = require('../user.js');
var skills = require('../skillz.js');
var secrets = require('../secrets.js');

exports.getName = function (req, res, next) {
    res.status(200).json(user.name);
};
exports.getLocation = function (req, res, next) {
    res.status(200).json(user.location);
};

exports.getOccupations = function (req, res, next) {
    if (req.query.order) {
        if (req.query.order === 'asc') {
            user.occupations.sort();
            res.status(200).json(user.occupations);
        } else if (req.query.order === 'desc') {
            user.occupations.sort().reverse();
            res.status(200).json(user.occupations);
        } else {
            res.status(200).json(user.occupations);
        }
    } else {
        res.status(200).json(user.occupations);
    }
};

exports.getHobbies = function (req, res, next) {
    res.status(200).json(user.hobbies);
};
exports.getHobbiesByType = function (req, res, next) {
    let out = user.hobbies.filter(h => h.type == req.params.type ? true : false);
    res.status(200).json(out);
};
exports.getFamily = function (req, res, next) {
    if (req.query.relation) {
        let out = user.family.filter(f => f.relation == req.query.relation ? true : false);
        res.status(200).json(out);
    } else {
        res.status(200).json(user.family)
    }
};
exports.getFamilyByGender = function (req, res, next) {
    let out = user.family.filter(f => f.gender == req.params.gender ? true : false);
    res.status(200).json(out);
};
exports.getRestaurants = function (req, res, next) {
    if (req.query.rating) {
        let out = user.restaurants.filter(r => r.rating >= req.query.rating ? true : false);
        res.status(200).json(out);
    } else {
        res.status(200).json(user.restaurants)
    }
};
exports.getRestaurantsByName = function (req, res, next) {
    let out = user.restaurants.filter(r => r.name == req.params.name ? true : false);
    res.status(200).json(out);
};

exports.updateName = function (req, res, next) {
    user.name = req.body.name;
    res.status(200).send('Name updated');
};
exports.updateLocation = function (req, res, next) {
    user.location = req.body.location;
    res.status(200).send('Location updated');
};

exports.addHobby = function (req, res, next) {
    user.hobbies.push({
        name: req.body.name,
        type: req.body.type
    });
    res.status(200).send("Hobby added");
};
exports.addOccupations = function (req, res, next) {
    user.occupations.push(req.body.occupation);
    res.status(200).send("Occupation added");
};
exports.addFamily = function (req, res, next) {
    user.family.push({
        name: req.body.name,
        relation: req.body.relation,
        gender: req.body.gender
    });
    res.status(200).send("Family added");
};
exports.addRestaurants = function (req, res, next) {
    user.restaurants.push({
        name: req.body.name,
        type: req.body.type,
        rating: req.body.rating
    });
    res.status(200).send("Restaurant added");
};

exports.getSkills = function (req, res, next) {
    if (req.query.experience) {
        let out = skills.filter(s => s.experience.toLowerCase() == req.query.experience.toLowerCase() ? true : false);
        res.status(200).json(out);
    } else {
        res.status(200).json(skills);
    }
};

exports.addSkill = function (req,res,next) {
    skills.push({id: req.body.id,name: req.body.name, experience: req.body.experience });
    res.status(200).send("Skill added");
}

exports.getSecrets = function (req,res,next) {
    res.status(200).json(secrets);
}