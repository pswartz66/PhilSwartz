const nodemailer = require('nodemailer');
const creds = require('../config/emailConfig.js');
const xoauth2 = require('xoauth2');

// build template email below using data from front end
module.exports = {
    sendEmailToSelf: function (req, res) {
        // res.send('yooo');
        // console.log(res.json());
        console.log(req.body);
        // console.log(res.send('Response from server'));

        // create a template that for email html
        const emailBody = `<p>${req.body.message}</p>`;

        // create reusable transporter object using default SMTP
        // let transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false, // true for 465, false for other ports
        //     auth: {
        //         user: creds.email,
        //         pass: creds.key
        //     },
        //     tls: {
        //         rejectUnauthorized: false
        //     }
        // });

        // second pass
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: req.body.emailAddress,
                    clientId: creds.clientID,
                    clientSecret: creds.clientSecret,
                    refreshToken: creds.refreshToken
                })
            }
        })

        // setup email options object
        let mailOptions = {
            from: req.body.emailAddress,
            to: '<philswartzportfolio2@gmail.com>',
            subject: req.body.subject ? req.body.subject : null,
            text: '', // plain text body 
            html: emailBody // html body see template above
        }

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                transporter.close();
                return console.log(error);
            }
            res.json();
            transporter.close();
        })
    }
}
