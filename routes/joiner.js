var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
/* GET users listing. */


router.post('/add_new_joinerOnboard', function(req, res, next) {
  console.log(req.body)

  

  console.log(req.file)
pool.query("insert into joineronboard ( employeeCode, nameOfPersonJoiningSFR, address, employeeStatus, dateOfJoining, dob, residingCountry,  personalEmailAddress, NHSEmailAddress, SFREmailAddress, department, roleDesignation, nameOfPersonCompletingForm, roleOfPersonCompletingForm, licenseToAdd, channelsForJoiner, DLgroupForJoiner) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.employeeCode, req.body.nameOfPersonJoiningSFR, req.body.address, req.body.employeeStatus, req.body.dateOfJoining, req.body.dob, req.body.residingCountry, req.body.personalEmailAddress, req.body.NHSEmailAddress, req.body.SFREmailAddress, req.body.department, req.body.roleDesignation, req.body.nameOfPersonCompletingForm, req.body.roleOfPersonCompletingForm,req.body.licenseToAdd, req.body.channelsForJoiner, req.body.DLgroupForJoiner],function(error,result){
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


  router.get('/fetch_all_joineronboard_record', function(req, res, next) {
    pool.query("select * from joineronboard",function(error,result){
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
  


   router.post('/edit_joinerOnboard', function(req, res, next) {
    
  
  
  pool.query("update joineronboard set   employeeCode=?, nameOfPersonJoiningSFR=?, address=?, employeeStatus=?, dateOfJoining=?, dob=?, residingCountry=?, personalEmailAddress=?, NHSEmailAddress=?, SFREmailAddress=?, department=?, roleDesignation=?, nameOfPersonCompletingForm=?, roleOfPersonCompletingForm=?, licenseToAdd=?, channelsForJoiner=?, DLgroupForJoiner=? where joinerOnboardid=?",[req.body.employeeCode, req.body.nameOfPersonJoiningSFR, req.body.address, req.body.employeeStatus, req.body.dateOfJoining, req.body.dob, req.body.residingCountry, req.body.personalEmailAddress, req.body.NHSEmailAddress, req.body.SFREmailAddress, req.body.department, req.body.roleDesignation, req.body.nameOfPersonCompletingForm, req.body.roleOfPersonCompletingForm, req.body.licenseToAdd, req.body.channelsForJoiner, req.body.DLgroupForJoiner,req.body.joinerOnboardid],function(error,result){
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



  router.post('/delete_joiner_data',function(req, res, next) {
    pool.query("delete from joineronboard where joinerOnboardid=?",[req.body.joinerOnboardid],function(error,result){
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