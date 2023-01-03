const express = require("express");
const { getUser, signupUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get('/users',getUser);
userRouter.post('/register',signupUser);

module.exports = userRouter