1. Setup express
2. Setup passport and passport google oauth. add passport new strategy as google with clientID,clientSecret and callbackURL. 
3. Setup Routes for /auth/google and /auth/google/callback to use passport.authenticate()
4. Setup mongoose and mongoDB. get mongoURL key use it to connect to mongoDB. create Schema and model inside schema using 
`const userSchema = new Schema({
    googleID : String
});`
`const user = mongoose.model('user',userSchema);`
5. whenever want to use model use mongoose.model('user');
6. Set on callback of `passport.use(strategy, (accessToken,refreshToken,profile,done)=>{.. add code to add new user to mongoDB})`
`user.findOne({googleID: profile.id})`
`new user({googleID:profile.id}).save()`
 `user.findById(id).then((usr)=>{done(null,usr)})` types of methods to decide whether to add user or not

7. Add passport serialize and deserialize methods and start using cookie-session by 
`app.use(new cookieSession({maxAge,keys:[keys.cookieID]}))` and 
`app.use(passport.initialize()) and app.use(passport.session());`
