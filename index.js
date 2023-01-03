const express = require('express');
const connect = require('./connect_db/connect_db');
const userRouter = require('./router/user.router');
const app = express();
app.use(express.json())
app.use('/',userRouter)

connect().then(()=>{
    app.listen(3000,()=>{
        console.log("Listening to http://localhost:3000")
    });
});
