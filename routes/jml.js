var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET users listing. */
/* GET users listing. */


router.post('/fetch_all_onboard', function(req, res, next) {
    console.log(req.body)
    
   
    const employeeCode = req.body.employeeCode;

    const queryOnboard = `
      SELECT * 
      FROM onboard 
      WHERE employeeCode = ?
    `;
    
    pool.query(queryOnboard, [employeeCode], function(error, resultOnboard) {
      if(error) {
        console.log("xxxxx"+error);
        res.status(500).json({status:false,message:'Server error....'});
      } else if(resultOnboard.length > 0) {
        res.status(200).json({status:true,data:resultOnboard});
      } else {
        const queryJoiner = `
          SELECT J.nameOfPersonJoiningSFR as name,J.personalEmailAddress as emailAddress,address,J.roleDesignation as designation ,dob,dateOfJoining,employeeStatus
          FROM joineronboard J
          WHERE employeeCode = ?
        `;
        
        pool.query(queryJoiner, [employeeCode], function(error, resultJoiner) {
          if(error) {
            console.log("xxxxx"+error);
            res.status(500).json({status:false,message:'Server error....'});
          } else {
            res.status(200).json({status:true,data:resultJoiner});
          }
        });
      }
    });

  });




  router.post('/fetch_all_joineronboard_record', function(req, res, next) {
    
    pool.query(`
    SELECT *
    FROM joineronboard
    WHERE employeeCode = ?
  `,[req.body.employeeCode],function(error,result){
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