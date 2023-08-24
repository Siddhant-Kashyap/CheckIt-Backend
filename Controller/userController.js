const UserService = require('../Services/userServices')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const SECRET_KEY ="ItsmySecretKey"


const userServices = new UserService()


const login=async (req,res)=>{

    const {email,password} = req.body;
    try{
        const existingUser  = await userServices.find(email);
        if(!existingUser){
            return res.status(404).json({message:"User not found"})
        }
        const matchPassword = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({email:existingUser.email , id:existingUser._id},SECRET_KEY);
            res.status(201).json({token:token})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})

    }
   

}

const register =async (req,res)=>{
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        name: firstName + lastName,
        email: email,
        password: hashedPassword,
      };
      const existingUser = await userServices.find(email);
      if (existingUser) {
        res.send("User Already existed");
      } else {
        const user_created = await userServices.create(user);

        const token = jwt.sign(
          { email: user_created.email, id: user_created._id },
          SECRET_KEY
        );
        res.status(201).json({ user: user_created, token: token });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
    
    
}


module.exports = {login , register}