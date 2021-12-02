const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"superuser2096@gmail.com",
        pass:"Cryptoin2021"
    }
})

let mailOptions = {

    from:"superuser2096@gmail.com",
    to:"vaibhavbunde32@gmail.com",
    subject:"Mail Testing in node Js",
    text: "Testing mail - Hello friend, how's going??"    
}

transport.sendMail(mailOptions, function(err,info){
        if(err){
            console.log(err);
        }
        else{
            console.log("Email Sent Successfully !!");
        }
    })
