const express = require("express");
const { getUser, signupUser, loginUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get('/users',getUser);
userRouter.post('/register',signupUser);
userRouter.post('/login',loginUser);

module.exports = userRouter