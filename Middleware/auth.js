const jwt = require("jsonwebtoken")
const SECRET_KEY ="ItsmySecretKey"


const auth =(req,res,next)=>{

    //take auth tonken
    try {
        const token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token,SECRET_KEY)
            req.userId = user.indexOf;

        }else{
            req.status(401).json({message:"Unauthorized access"})
        }

        next();
        
    } catch (error) {
        console.log(error)
        req.status(401).json({message:"Unauthorized access"})
        
    }

    
}

module.exports=auth