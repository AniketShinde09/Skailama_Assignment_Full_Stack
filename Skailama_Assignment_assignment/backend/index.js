const express = require("express");
const { connection } = require("./db");
const { projectRouter } = require("./routes/projectsroute");
require("dotenv").config();
const cors = require("cors");
const { uploadRouter } = require("./routes/uploadRoute");
const { userRouter } = require("./routes/userRoutes");
const { profileRouter } = require("./routes/profileRoute");
const { generalConfigRouter } = require("./routes/generalConfigRoute");
const app = express();



app.use(cors());
app.use(express.json());

app.use("/users",userRouter);
app.use("/project",projectRouter);
app.use("/upload",uploadRouter);
app.use("/profile",profileRouter);
app.use("/general",generalConfigRouter);
app.use("/Images",express.static("Images"))

app.get("/",(req,res)=>{
    res.send("Welcome to home route");
})

app.listen(process.env.PORT || 5000 , async()=>{

    try {
        await connection;
        console.log("Connected to Database...")
    } catch (error) {
        console.log(error);
    }

    console.log(`Server is listening on port ${process.env.PORT}`)

})
