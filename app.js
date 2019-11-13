var express=require('express');
var app=express();
var mail=require('./email');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const fs=require('fs');
const ejs=require('ejs');


sgMail.setApiKey(process.env.Key);

app.get('/',function(req,res){
     mail.newUserEmail("a8285443826@gmail.com");
    //console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.Key);
    
/*const msg = {
  to: 'aman.kumar.6170@gmail.com',
  from: 'a8285443826@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);*/
    res.send("ok");
    
});

app.listen(3000,(req,res)=>{
    console.log("Server running on 3000");
});