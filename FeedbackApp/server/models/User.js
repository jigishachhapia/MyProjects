const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    googleID : String
});
const user = mongoose.model('user',userSchema);