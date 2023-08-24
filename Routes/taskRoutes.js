const express = require('express');
const routes = express.Router();
const auth = require('../Middleware/auth')
const {getAllTask,getTask,createTask,deleteTask,updateTask} =  require('../Controller/taskController');



routes.get('/:id',auth,getTask);
routes.get('/',auth,getAllTask);
routes.post('/createTask',auth,createTask);
routes.delete('/deleteTask',auth,deleteTask);
routes.put('/update',auth,updateTask);


module.exports = routes
