var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
/* GET users listing. */

router.post('/add_new_offboard', function(req, res, next) {
  console.log(req.body)
  console.log(req.file)
pool.query("insert into offboard ( employeeCode, nameOfPersonLeavingFromSFR, employeeStatus, residingCountry, currentNHSEmailAddress, currentSFREmailAddress, department, roleDesignation, nameOfPersonCompletingForm, roleOfPersonCompletingForm, startDateOfWork, exitDate, durationOfEmploymentAtSFR, assestToBeReturn, reasonForLeaving, licenseNeedsToRemove, channelsNeedsToRemove, DLgroupNeedsToRemove) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.employeeCode, req.body.nameOfPersonLeavingFromSFR, req.body.employeeStatus, req.body.residingCountry, req.body.currentNHSEmailAddress, req.body.currentSFREmailAddress, req.body.department, req.body.roleDesignation, req.body.nameOfPersonCompletingForm, req.body.roleOfPersonCompletingForm, req.body.startDateOfWork, req.body.exitDate, req.body.durationOfEmploymentAtSFR, req.body.assestToBeReturn, req.body.reasonForLeaving, req.body.licenseNeedsToRemove, req.body.channelsNeedsToRemove, req.body.DLgroupNeedsToRemove],function(error,result){
 if(error)
 { console.log("xxxxx"+error)
  res.status(500).json({status:false,message:'Server error....'})
 }
 else
 {
  res.status(200).json({status:true,message:'Company Registerd Successfully'})
 }

})
});


  router.get('/fetch_all_offboard_record', function(req, res, next) {
    pool.query("select * from offboard",function(error,result){
     if(error)
     { console.log(error)
      res.status(500).json({status:false,message:'Server error....'})
     }
     else
     {
      res.status(200).json({status:true,data:result})
     }
  
    })
  }); 
  


  module.exports = router;