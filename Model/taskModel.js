const mongoose = require("mongoose")
/*
For Refs:
-------------------------------------------------------------------------------------------------|
Task ID: A unique identifier for each task.                                                      |
Title: The title or name of the task.                                                            |
Description: A detailed description of the task.                                                 |
Due Date: The deadline by which the task should be completed.                                    |
Priority: A value indicating the priority level of the task (e.g., Low, Medium, High, Urgent).   |
Status: The current status of the task (e.g., Not Started, In Progress, Completed, Deferred).    |
Assigned To: The person or team responsible for completing the task.                             |
Tags/Labels: Categorization labels or tags to help with task grouping and searching.             |
Estimated Time: The estimated time required to complete the task.                                |
Actual Time: The actual time taken to complete the task (updated after completion).              |
Progress: A measure of the task's completion progress (e.g., percentage).                        |  
Reminders: Set reminders or notifications for the task's due date.                               |
-------------------------------------------------------------------------------------------------|
*/


const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    Description : {type:String},
    DueDate:{type:Date},
    Priority:{type:String,required:true},
    Status:{type:String,required:true},
    AssignedTo:{type:String,required:true},
    Tags:[{ type: String }],
    ETA:{type:Number},
    AT:{type:Number},
    Progress:{type: Number, min: 0, max: 100},
    Reminders:[{type:Date}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true }
})

const tasks = mongoose.model("Tasks",taskSchema)

module.exports =tasks


