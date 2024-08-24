const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect("mongodb+srv://prajwalsomalkar025:VYZuWElRSGQ0r9wd@clustercohort.bednah4.mongodb.net/paymentapplication");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})



const AccountSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    balance: { type: Number, default: 0.0 }
})

const Account = mongoose.model('Account',AccountSchema);
const User = mongoose.model('User',UserSchema);

module.exports ={ 
    User,
    Account
}