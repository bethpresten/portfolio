var nodemailer = require('nodemailer');
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
// update with process.env and deploy to heroku
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.send("you've reached beth's app");
});
// Create New Characters - takes in JSON input
app.post("/contact", function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // mask username and password with env
            user: 'prestobeth462@gmail.com',
            pass: 'Blahblah117'
        }
    });

    var mailOptions = {
        from: 'prestobeth462@gmail.com',
        to: 'bethpresten@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        console.log('Email sent: ' + info.response);
        res.status(500);
    });
    res.json("completed");
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});