const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async(req, res) =>{
    try{

        // Temporary debugging
        console.log("SIGNUP ROUTE HIT");
        console.log(req.body);


        //Get data from request body
        const {Username, email, password} = req.body;

        //hash password
        const hashed = await bcrypt.hash(req.body.password, 10);
        console.log(hashed);

        // Save to database
        await User.create({
            Username,
            email,
            password: hashed
        });

        res.json({ message: "Signup successful"});
        console.log("Sign Up successful");

    }
    catch(err){
        res.status(400).json({error: err.message });
    }
});

module.exports = router;









// //send or creating data
// router.post("/", async(req, res) =>{
//     try{
//         const user = await User.create(req.body);
//         res.json(user);
//     }catch (err){
//         res.status(400).json({ error: err.message})
//     }
// })

// // get data from users
// router.get("/", async(req, res) =>{
//     const users = await User.find();
//     res.json(users);
// });

// // update user
// router.put("/", async(req, res) =>{
//     const users = await User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true}
//     );
//     res.json(users);
// })


// // Delete user
// router.delete("/:id", async(req, res) =>{
//     const users = await User.findByIdAndDelete(req.params.id);
//     res.json({message: "User Deleted"})
// })

