const mongoose = require("mongoose")

const MONGO_URI = "mongodb://localhost:27017/checkit"

const connectDb=async()=>{
    try{
        await mongoose.connect(MONGO_URI).then(()=>{
            console.log("Connected to mongo ");
        })

    }catch(e){
        console.log(e);
    }

}

module.exports = connectDb;

