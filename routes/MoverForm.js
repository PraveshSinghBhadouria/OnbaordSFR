var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
/* GET users listing. */


router.post('/add_new_mover', function(req, res, next) {
  console.log(req.body)
  console.log(req.file)
pool.query("insert into mover (employeeCode, nameOfPersonMovingFromDepartment, employeeStatus, residingCountry, currentNHSEmailAddress, currentSFREmailAddress, roleDesignation, dob, dateOfJoining, whichRoleMoverMovingFrom, whichRoleMoverMovingTo, reasonForChangeOfDepartment, nameOfPersonCompletingForm, roleOfPersonCompletingForm, licenseToUpdate, channelsForMover, DLgroupForMover) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[ req.body.employeeCode, req.body.nameOfPersonMovingFromDepartment, req.body.employeeStatus, req.body.residingCountry, req.body.currentNHSEmailAddress, req.body.currentSFREmailAddress, req.body.roleDesignation, req.body.dob, req.body.dateOfJoining, req.body.whichRoleMoverMovingFrom, req.body.whichRoleMoverMovingTo, req.body.reasonForChangeOfDepartment, req.body.nameOfPersonCompletingForm, req.body.roleOfPersonCompletingForm, req.body.licenseToUpdate, req.body.channelsForMover, req.body.DLgroupForMover],function(error,result){
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


  router.get('/fetch_all_mover_record', function(req, res, next) {
    pool.query("select * from mover",function(error,result){
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
  


  
  router.post('/edit_mover', function(req, res, next) {
    
    pool.query("update mover set  employeeCode=?, nameOfPersonMovingFromDepartment=?, employeeStatus=?, residingCountry=?, currentNHSEmailAddress=?, currentSFREmailAddress=?, whichRoleMoverMovingFrom=?, whichRoleMoverMovingTo=?, reasonForChangeOfDepartment=?, nameOfPersonCompletingForm=?, roleOfPersonCompletingForm=?, licenseToUpdate=?, channelsForMover=?, DLgroupForMover=? where moverId=?",[req.body.employeeCode, req.body.nameOfPersonMovingFromDepartment, req.body.employeeStatus, req.body.residingCountry, req.body.currentNHSEmailAddress, req.body.currentSFREmailAddress, req.body.whichRoleMoverMovingFrom, req.body.whichRoleMoverMovingTo, req.body.reasonForChangeOfDepartment, req.body.nameOfPersonCompletingForm, req.body.roleOfPersonCompletingForm, req.body.licenseToUpdate, req.body.channelsForMover, req.body.DLgroupForMover,req.body.moverId],function(error,result){
     if(error)
     { console.log("xxxxx"+error)
      res.status(500).json({status:false,message:'Server error....'})
     }
     else
     {
      res.status(200).json({status:true,message:"Submit"})
    }
    
    })
    });
    


  router.post('/delete_mover_data',function(req, res, next) {
    pool.query("delete from mover where moverId=?",[req.body.moverId],function(error,result){
     if(error)
     { console.log(error)
      return res.status(500).json({status:false}) 
     }
     else
     { console.log("RESULT:",result)
       return res.status(200).json({status:true}) 
     }
    })  
  })
  

  module.exports = router;