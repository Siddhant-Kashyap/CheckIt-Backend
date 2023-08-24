const express = require("express");
const connectDb = require("./config/dbConnection")
const userRoutes = require("./Routes/userRoutes")
const taskRoutes = require("./Routes/taskRoutes")



const app = express();

const PORT = 8080;


//connection to db 
connectDb();
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

//to the routes
app.use('/user',userRoutes)
app.use('/tasks',taskRoutes)

//server is started
app.listen(PORT,()=>{
    console.log("Server is up")
})