var express = require('express');
var router = express.Router();
var Registration = require('../modals/registration.modal')

router.post('/', function (req, res, next) {
    console.log(req.body.username)
    Registration.find({ userName: req.body.username,password:req.body.password })
     .exec((error,user)=>{
        if(user.length){
            res.send(true)
        }else{
            res.send(false)
        }

     });
});



module.exports = router;
