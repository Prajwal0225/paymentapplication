const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prajwalsomalkar025:VYZuWElRSGQ0r9wd@clustercohort.bednah4.mongodb.net/paymentapplication");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model('User',UserSchema);

module.exports ={ 
    User
}