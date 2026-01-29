

// Using the env. file and calling the path framework
require("dotenv").config();
const path = require("path");

// Calling the express framework and using it in app
const express = require("express");
const app = express();

// Calling the mongoose framework and using the json format
const mongoose = require("mongoose");
app.use(express.json());

// Importing user routes 
const User = require("./routes/userRoutes");
app.use("/", User);

// Importing login routes
const loginRoute = require("./routes/login");
app.use("//", loginRoute);

// Connecting to mongodb using mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to Database"))
    .catch(err => console.log(err));

// Connecting frontend to backend and Serving static file
// Path to frontend
const frontend = path.join(__dirname, "..", "frontend");
app.use(express.static(frontend));

// Sending a Get request for the Signup file
// app.get("/", (req, res)=>{
//     res.sendFile(path.join(frontend, "signUp.html"));
// })

// Sending a Get request for login file
app.get("//", (req, res) =>{
    res.sendFile(path.join(frontend,"login.html"));
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on PORT: ${process.env.PORT}`)
})