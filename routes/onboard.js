var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
/* GET users listing. */
const picture = upload.fields([{name:'idProof',maxCount:1},{name:'digitalSignature',maxCount:1},{name:'photo',maxCount:1},{name:'marksheet',maxCount:1}])
router.post('/add_new_onboard',picture, function(req, res, next) {
  console.log(req.body)
  console.log(req.files)
  const files = req.files;
  if (!files) {
      // console.log(error)
      res.status(400).json({Status:false,message:'Server error....'})
  }



pool.query("insert into onboard(name, employeeCode, address, pincode, countryCode,contactNumber,countryCode2, alternateNumber, emailAddress, idProof, digitalSignature, photo, marksheet, dob, dateOfJoining, employeeStatus, designation, workingHours, bankName, accountNumber, IFSCCode, bankAddress, bankBranch )values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.name, req.body.employeeCode, req.body.address, req.body.pincode,req.body.countryCode, req.body.contactNumber,req.body.countryCode2, req.body.alternateNumber, req.body.emailAddress, req.files.idProof[0].filename,req.files.digitalSignature[0].filename,req.files.photo[0].filename,req.files.marksheet[0].filename, req.body.dob, req.body.dateOfJoining, req.body.employeeStatus, req.body.designation, req.body.workingHours, req.body.bankName, req.body.accountNumber, req.body.IFSCCode, req.body.bankAddress, req.body.bankBranch],function(error,result){
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


router.get('/fetch_all_onboard_record', function(req, res, next) {
  pool.query("select * from onboard",function(error,result){
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





router.get('/fetch_all_countryCode', function(req, res, next) {
  pool.query("select * from countrycode",function(error,result){
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






const pictures = upload.fields([{name:'idProof',maxCount:1},{name:'digitalSignature',maxCount:1},{name:'photo',maxCount:1},{name:'marksheet',maxCount:1}])
router.post('/edit_new_onboard',pictures, function(req, res, next) {
  console.log(req.body)
  console.log(req.files)
  const files = req.files;
  if (!files) {
      // console.log(error)
      res.status(400).json({Status:false,message:'Server error....'})
  }



pool.query("update onboard set  name=?, employeeCode=?, address=?, pincode=?, countryCode=?,contactNumber=?,countryCode2=?, alternateNumber=?, emailAddress=?, employeeStatus=?, designation=?, workingHours=?, bankName=?, accountNumber=?, IFSCCode=?, bankAddress=?, bankBranch=? , dob=?, dateOfJoining=? where onboardid=? ",[req.body.name, req.body.employeeCode, req.body.address, req.body.pincode,req.body.countryCode, req.body.contactNumber,req.body.countryCode2, req.body.alternateNumber, req.body.emailAddress, req.body.employeeStatus, req.body.designation, req.body.workingHours, req.body.bankName, req.body.accountNumber, req.body.IFSCCode, req.body.bankAddress, req.body.bankBranch, req.body.dob, req.body.dateOfJoining,req.body.onboardid],function(error,result){
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





router.post('/delete_onboard_data',function(req, res, next) {
  pool.query("delete from onboard  where onboardid=?",[req.body.onboardid],function(error,result){
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