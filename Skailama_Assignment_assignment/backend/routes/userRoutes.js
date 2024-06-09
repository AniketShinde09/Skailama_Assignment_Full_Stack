const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationMiddleware } = require("../middlewares/validationMidlleware");
const userRouter = express.Router();

userRouter.post("/register", validationMiddleware, async (req, res) => {
  const { pass } = req.body;
  try {
    const newPass = await bcrypt.hash(pass, 10);
    const user = await UserModel.create({ ...req.body, pass: newPass });
    res.status(200).send({ msg: "User registered successfully", user });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }
    const comparepass = await bcrypt.compare(pass, user.pass);
    if (!comparepass) {
      return res.status(400).send("Invalid credentials");
    } else {
      const token = jwt.sign({ userId: user._id, name: user.name }, process.env.secretKey, {
        expiresIn: "6hr",
      });
      res.send({ msg: "User logged in successfully", token });
    }
  } catch (error) {
    res.send(400).status({ msg: error.message });
  }
});


module.exports = {userRouter};
  