const UserService = require('../Services/userServices')
const bcrypt = require('bcryptjs')


const userServices = new UserService()


const login=(req,res)=>{
    console.log("Logiiiiggg")
}

const register =async (req,res)=>{
    const {firstName,lastName,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10); 
    const user = {
        name : firstName+lastName,
        email :email,
        password : hashedPassword
    }
    const existingUser = await userServices.find(email);
    if(existingUser){
        res.send("User Already existed")
    }
    else{
        const user_created = await userServices.create(user)
        res.send("Create");
    }
    
}


module.exports = {login , register}