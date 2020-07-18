var express = require('express');
var router = express.Router();
var Event = require('../modals/event.modal')
/* GET users listing. */
router.post('/', function(req, res, next) {
  Event.create(req.body, function (err, newEvent) {
    if (err) {
        res.send(err);
    } else {
        res.send(newEvent);
    }
});
});

router.get('/', function(req, res, next) {
  Event.find({}, function (err, events) {
    if (err) {
        res.send(err);
    } else {
        res.send(events);
    }
});
});

module.exports = router;
