const express = require('express');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// console.log(process.env);

// Express middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Serve static assets (when in production on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.state(path.join(__dirname, "./client/build")));
}

// use api route to send mail
app.use(routes);

// sendfile to transfer index.html in build to heroku
app.use((req, res) => {
    res.sendfile(path.join(__dirname, "./client/build/index.html"))
});

// Start up our server
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})