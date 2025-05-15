import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskDeatils = () => {
    //get single details
    const [singleData, setSingleData] = useState({});
    let { Id } = useParams();
    const fetchSingleData = async () => {

        let singleData = await axios.get(`http://localhost:5000/api/v1/tasks/${Id}`);
        setSingleData(singleData.data.task);
    }
    useEffect(() => {
        fetchSingleData();
    }, [])
    return (
        <div className="editPage">
            <h2>Task Details Page</h2>
            <div className='inputDiv taskDetails'>
                <p><b>Id -</b> {singleData._id}</p>
                <p><b>Name -</b> {singleData.name}</p>
                <p><b>Status -</b>{singleData.completed ? "Completed" : "Incompleted"}</p>
                <Link to="/"><button type="button" className="submitButton edit">Return to Task List</button></Link>
            </div>

        </div>
    )
}
export default TaskDeatils;