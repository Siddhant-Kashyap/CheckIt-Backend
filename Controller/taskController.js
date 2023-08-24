const TaskServices = require("../Services/taskServices")
const auth = require("../Middleware/auth");

const taskServices = new TaskServices();

const getTask= async (req,res)=>{
   
    
    try {
    const id = req.params.id;
    const task = await taskServices.get(id);
    res.json(task);
        
    } catch (error) {
        res.status(500).send('Error fetching tasks');
    }

}
const getAllTask= async (req,res)=>{
    

    try {
        const id = req.userId;
        const tasks = await taskServices.getAll(id);
        res.json(tasks)
        
    } catch (error) {
        res.status(500).send('Error fetching tasks');
    }
    


}

const createTask=async (req,res)=>{
    // console.log(req.userId)
    const {title,Description,Priority,Status,AssignedTo,Tags,ETA,AT,Progress,Reminders} = req.body;
  
   try {
  
    const newTask ={
        title:title,
        Description:Description,
        Priority:Priority,
        Status:Status,
        AssignedTo:AssignedTo,
        Tags:Tags,
        ETA:ETA,
        AT:AT,
        Progress:Progress,
        Reminders:Reminders,
        userId:req.userId

    }

    const task = await taskServices.create(newTask);
    res.status(201).json(task);
    
   } catch (error) {

    console.log(error);
    res.status(500).send('Internal Server Error');
   }

}
const deleteTask=async (req,res)=>{
    

}
const updateTask=async (req,res)=>{

}


module.exports = {getAllTask,getTask,createTask,deleteTask,updateTask}

