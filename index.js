const express = require("express");
const connectDb = require("./config/dbConnection")
const userRoutes = require("./Routes/userRoutes")
const taskRoutes = require("./Routes/taskRoutes")
const cors = require("cors")


const app = express();

const PORT = 8080;


//connection to db 
connectDb();
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Set up CORS middleware
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  }));
  
//to the routes
app.use('/user',userRoutes)
app.use('/tasks',taskRoutes)

//server is started
app.listen(PORT,()=>{
    console.log("Server is up")
})