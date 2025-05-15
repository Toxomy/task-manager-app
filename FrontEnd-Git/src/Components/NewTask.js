import axios from "axios";
import { useState } from "react";

const NewTask = ({ fetchData }) => {
    const [input, setInput] = useState('');

    //Add new task
    const addNewTaskHandler = async (input) => {
        await axios.post(`http://localhost:5000/api/v1/tasks`, {
            name: input,
            completed: false
        });
        fetchData();
        setInput("");
    }
    return (
        <div className='inputDiv'>
            <h1>Task Manager</h1>
            <input type="text" placeholder="e.g. collect parsel"
                value={input} onChange={(e) => setInput(e.target.value)} className="input" />
            <button type="button" className="submitButton" onClick={() => addNewTaskHandler(input)}>Submit</button>
        </div>
    )
}
export default NewTask;