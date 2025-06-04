let { tasks, nextId } = require('../data/taskData');


const createTaskController = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: "Title and description are required"
            });
        }

        const newTask = {
            id: nextId++,
            title,
            description
        };
        tasks.push(newTask);

        res.status(201).send({
            success: true,
            message: "Task created successfully",
            task: newTask
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while creating task"
        });
    }
};


const getAllTaskController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "All tasks fetched successfully",
            tasks
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while fetching tasks"
        });
    }
};


const getSingleTaskController = async (req, res) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) {
            return res.status(404).send({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).send({
            success: true,
            message: "Task fetched successfully",
            task
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while fetching task"
        });
    }
};


const updateTaskController = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            return res.status(404).send({
                success: false,
                message: "Task not found"
            });
        }

        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: "Title and description are required"
            });
        }

        tasks[taskIndex] = { id, title, description };

        res.status(200).send({
            success: true,
            message: "Task updated successfully",
            task: tasks[taskIndex]
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while updating task"
        });
    }
};


const deleteTaskController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            return res.status(404).send({
                success: false,
                message: "Task not found"
            });
        }

        const deletedTask = tasks.splice(taskIndex, 1)[0];

        res.status(200).send({
            success: true,
            message: "Task deleted successfully",
            task: deletedTask
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while deleting task"
        });
    }
};

module.exports = {createTaskController,getAllTaskController,getSingleTaskController,updateTaskController,deleteTaskController};
