var express = require('express');
var router = express.Router();
var Registration = require('../modals/registration.modal')

router.post('/', function(req, res, next) {
    Registration.create(req.body, function (err, user) {
        if (err) {
            res.send('error saving book');
        } else {
            console.log(user);
            res.send(user);
        }
    });
});


router.get('/', function(req, res, next) {
    Registration.find({})
    .populate('eventsAttended') // only works if we pushed refs to person.eventsAttended
    .exec(function(err, person) {
        if (err) return handleError(err);
        res.send(person);
    });
});


module.exports = router;
