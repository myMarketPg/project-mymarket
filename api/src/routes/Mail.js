const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const {MYMARKET_USERNAME, MYMARKET_PASS} = process.env;

router.post('/', async(req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: MYMARKET_USERNAME,
            pass: MYMARKET_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `<${MYMARKET_USERNAME}>`,
        to: 'usuario32@ejemplo.com', //el parametro 'to' es el username del usuario logueado que viene por req.body
        subject: 'hello!!',
        html: '<H1>hola mundo</h1>',
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(404).send(error.message)
        } else {
            console.log('mail enviado');
            res.status(200).jsonp(req.body);
        }
    });
});

module.exports = router;