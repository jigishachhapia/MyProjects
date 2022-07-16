const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
mongoose.connect(keys.mongoURI);
require('./models/User')
const app = express();
app.use(new cookieSession({
    keys : [keys.cookieID],
    maxAge : 30*24*60*60*1000
}));
app.use(passport.initialize());
app.use(passport.session());
require("./services/authService");
require('./routes/authRoutes')(app);

PORT = process.env.PORT || 3000;
app.listen(PORT);