const User = require("../models/user"); //access model instructions or schema
const bcrypt = require("bcryptjs"); //used to hash password
const jwt = require("jsonwebtoken") //used to store token

const loginUser = async (req, res) =>{
    try{
        // Get login details
        const {Username, email, password} = req.body;
       
        // Checking if user exist
        const user = await User.findOne({ email });
        console.log(user);
        // if user does not exist throw an error
        if(!user){
            return res.status(400).json({error: "User not found"});
        }

        // comparing passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({error: "Invalid password"})
        }

        const token = jwt.sign(
            {id: user._id}, //Payload
            process.env.JWT_SECRET, //Secret key
            {expiresIn: "1h"} //time it expires
            // NB: Donot store password or sensitive data in jwt since it will be used by frontend for bypassing
            
        );
        console.log(token);

        // login Successful
        res.json({message: "Login successful",
            token
        });
    }
    catch(err){
        res.status(500).json({error: "Server error"});
    }
    
}

module.exports = {loginUser}