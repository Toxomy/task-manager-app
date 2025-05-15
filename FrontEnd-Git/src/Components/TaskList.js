import axios from "axios";
import { Link } from "react-router-dom";


const TaskList = ({ Tasks, fetchData }) => {

    //Delete API
    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
        fetchData();
    }

    //check and uncheck
    const changeHandler = async (id, e) => {
        await axios.put(`http://localhost:5000/api/v1/tasks/${id}`, {
            completed: e.target.checked
        });
        fetchData();
    }
    return (
        <>
            {Tasks.map((task) => {
                return (

                    <ul className="singleTask" key={task._id}
                    // onClick={() => getSingleData(task._id)}
                    >
                        <div className="taskNameDiv">
                            <input type="checkbox" className="strikethrough" onChange={(e) => changeHandler(task._id, e)} checked={task.completed} />
                            <li className="taskName">{task.name}</li>
                        </div>
                        <div>
                            <Link to={'/edit/' + task._id}>
                                <span className="material-symbols-outlined">
                                    edit
                                </span></Link>
                            <span className="material-symbols-outlined" onClick={() => deleteHandler(task._id)}>
                                delete
                            </span>
                            <Link to={'/details/' + task._id}>
                                <span className="material-symbols-outlined">
                                    details
                                </span></Link>
                        </div>
                    </ul>
                )
            })}
        </>
    )
}
export default TaskList;