const taskModel = require("../Model/taskModel");

class TaskServices {
  getAll = async (userId) => {
    try {
      const tasks = await taskModel.find({ userId: userId });
      return tasks;
    } catch (error) {
      throw new Error("Error fetching task");
    }
  };
  get = async (taskId) => {
    try {
      const task = await taskModel.findById(taskId);
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    } catch (error) {
      throw new Error("Error fetching task");
    }
  };
  save = async (task)=>{
    try{

        const result = await task.save();
        return result;
    }
    catch(e){
        throw new Error('Error saving task');
    }
   
}

  create = async (task) => {
    console.log(task)
    try {
        const newTask = new taskModel(task);
        console.log(newTask)
       const saveTask = await this.save(newTask);
      
      
      return saveTask;
    } catch (error) {
        console.log(error)
      throw new Error("Error creating the task");
    }
  };
  update = async (taskid, updatedData) => {
    try {
      const task = await taskModel.findByIdAndUpdate(taskId, updatedData, {
        new: true,
      });
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    } catch (error) {
      throw new Error("Error updating task");
    }
  };
  delete = async (taskId) => {
    try {
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    } catch (error) {
      throw new Error("Error deleting task");
    }
  };
}

module.exports = TaskServices