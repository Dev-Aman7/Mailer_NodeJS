const SGmail = require('@sendgrid/mail');
const fs=require('fs');
const ejs=require('ejs');
require('dotenv').config();

SGmail.setApiKey(process.env.Key); // Input Api key or add to environment config

function newUserEmail(email){
    /*console.log('Your environment variable Key2 has the value: ', process.env.Key2);
    console.log('Your environment variable Key has the value:  ', process.env.Key);
    const message = { 
    to : email, //email variable
    from : { email : 'aman.kumar.6170@gmail.com' , name: 'Aman Kumar'},
    message : "aman i am",
    subject : "This is a test Email"
    }
    SGmail.send(message)
    .then((item)=>{
        console.log("ok");
    })
    .catch((err)=>{
        console.log(err);
    });*/
  ejs.renderFile(__dirname+"\\views\\test.ejs",{name: 'Aman' },function(err,data){
      if(err)
      {
          console.log(err);
      }
      const msg = {
        to: email,
        from: 'chiragshroff9@gmail.com',
        subject: 'Testing',
        text: 'and easy to do anywhere, even with Node.js',
        html: data,
        attachments: [
            {
              content: 'Some base 64 encoded attachment content',
              filename:'het.txt',
              type: 'plain/text',
              disposition: 'attachment',
              contentId: 'mytext'
            },
          ]
        
      };
      SGmail.send(msg,function(err,data){
          if(err)
          console.log(err);
          else
          console.log('all good');
      });
      console.log("sent");

  });
     
    };
    
module.exports = {
    newUserEmail
};
   // https://github.com/sendgrid/sendgrid-nodejs


