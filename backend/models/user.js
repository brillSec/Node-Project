const mongoose = require("mongoose"); //Using mongoose lib

// Rule for user
const userSchema = new mongoose.Schema({
    Username: {type: String, required: true},
    email: {type: String, require: true},
    password: {type: String, required: true},
});

// exporting model
module.exports = mongoose.model("user", userSchema);

