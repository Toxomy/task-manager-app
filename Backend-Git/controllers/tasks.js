const Task = require("../model/task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.send({ msg: error });
    }

}
const getSingleTask = async (req, res) => {

    try {
        const { id } = req.params;

        const task = await Task.findOne({ _id: id });

        if (!task) {
            return res.status(404).json({ msg: "no task exist with this id" });//when length is same and id is matching
        }
        res.status(200).send({ task });
    } catch (error) {
        res.status(500).send({ msg: error }); //when length is not matching
    }
}
const deleteSingleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: "there is no such id to delete" });
        }
        res.status(200).send({ task });
    } catch (error) {
        res.status(500).json({ msg: error }); //when length is not matching
    }
}
const updateSingleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidator: true
        });
        if (!task) {
            return res.status(404).json({ msg: "there is no such id to delete" });
        }
        res.status(200).send({ task });
    } catch (error) {
        res.status(500).json({ msg: error }); //when length is not matching
    }
}
module.exports = { getAllTasks, createTasks, getSingleTask, updateSingleTask, deleteSingleTask }