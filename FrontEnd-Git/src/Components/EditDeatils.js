import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const EditDeatils = () => {
    const [input, setInput] = useState('');

    let { Id } = useParams();
    const navigate = useNavigate();
    const fetchSingleData = async () => {
        let result = await axios.get(`http://localhost:5000/api/v1/tasks/${Id}`);
        setInput(result.data.task.name);
    }
    useEffect(() => {
        fetchSingleData();
    }, [])
    const editTaskHandler = async () => {
        await axios.put(`http://localhost:5000/api/v1/tasks/${Id}`, {
            name: input
        });
        navigate('/');
    }
    return (
        <div className='inputDiv'>
            <h1>Edit Task</h1>
            <input type="text" placeholder="e.g. collect parsel"
                value={input} onChange={(e) => setInput(e.target.value)} className="input" />
            <button type="button" className="submitButton" onClick={editTaskHandler}>Submit</button>
        </div>
    )
}
export default EditDeatils;