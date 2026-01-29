const express = require("express");
const User = require("../models/user");
const { loginUser } = require("../controllers/userController");
const router = express.Router();

// Get login data and compare to user details
router.post("/login", loginUser );
    // try{
    //     // console.log(req.body);
    //     const {Username, email, password} = req.body;
    // }
    // catch(err){
    //     res.status(404).json({message: err.message});
    // }
    // )

module.exports = router;