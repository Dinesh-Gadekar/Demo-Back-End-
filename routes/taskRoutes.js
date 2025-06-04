const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/all-tasks/', taskController.getAllTaskController);
router.get('/task-id/:id', taskController.getSingleTaskController);
router.post('/create-task/', taskController.createTaskController);
router.put('/update-task/:id', taskController.updateTaskController);
router.delete('/delete-task/:id', taskController.deleteTaskController);

module.exports = router;
