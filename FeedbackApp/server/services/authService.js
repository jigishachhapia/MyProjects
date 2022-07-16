const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');
//route handler
const user = mongoose.model("user");
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done) => {
    user.findById(id).then((usr)=>{done(null,usr)});
});
passport.use(new GoogleStrategy({
    "clientID" : keys.googleClientID,
    "clientSecret" : keys. googleClientSecret,
    "callbackURL" : "/auth/google/callback"
}, (accessToken, refreshToken, profile,done)=> {
    user.findOne({googleID: profile.id}).then((existingUser)=>{
        if(existingUser){
            done(null, existingUser);
        }else{
            new user({googleID:profile.id}).save().then((usr)=>{
                done(null,usr);
            })
        }
        
    })
    
}));