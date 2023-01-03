const mongoose = require("mongoose");
require("dotenv").config();

async function connect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(process.env.MONGODB_URL,(err)=>{
            if(err){
                console.log("Error Connecting Database.", err);
                return reject(err);
            }
            console.log("Connected to Database.");
            resolve();
        })
    })
}

module.exports = connect;