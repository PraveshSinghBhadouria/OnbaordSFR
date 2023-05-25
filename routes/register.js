var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/register",  (req, res) => {
console.log(req.body)
    var { email,name}  = req.body;
  console.log("xxxxxxxxPravsh",email)
  console.log("xxxxxxxxNAme",name)
    var maillist = [
        email,
        'bhadouriapraveshsingh4@gmail.com',
        'sfrmedical1@gmail.com',
        /*'ritika.sinha@nhs.net',*/
      ];
    try {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'sfrmedical1@gmail.com', // generated ethereal user
              pass: "vlrmlqsqekbctksv", // generated ethereal password
            },
          });

        const mailOptions = {
            from: "sfrmedical1@gmail.com",
           
            subject: "Onboard Registration",
           html: `<h1>Congratulations</h1><h2>${name}</h2><h3>you have Succesfully Onboarded</h3>`,
            to: maillist
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;