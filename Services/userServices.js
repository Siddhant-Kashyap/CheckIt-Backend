const UserModel = require("../Model/userModel")

class UserService{

    find = async (email)=>{
        const user =  await UserModel.findOne({email:email})
        return user;

    }
    save = async (user)=>{
        const result = await user.save();
        return result;
    }
    create =async (user)=>{
       const newUser = new UserModel(user);
       const saveUser = await this.save(newUser);
       return saveUser;
    }




}

module.exports = UserService