const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "fake.smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'fakeUser', // generated ethereal user
      pass: 'fakePass', // generated ethereal password
    },
  });

  

  transporter.verify(()=>{
    console.log("Ready for sending emails")
  })

module.exports = { transporter };
