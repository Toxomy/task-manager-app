const express = require('express');
const router = express.Router();
const { getAllTasks, createTasks, getSingleTask, updateSingleTask, deleteSingleTask } = require("../controllers/tasks")


router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getSingleTask).put(updateSingleTask).delete(deleteSingleTask)

module.exports =
    router
