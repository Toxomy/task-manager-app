import { useEffect, useState } from 'react';
import axios from 'axios';
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const Home = () => {
    const [Tasks, setTasks] = useState([]);
    //fetch Data
    const fetchData = async () => {
        let data = await axios.get("http://localhost:5000/api/v1/tasks");
        setTasks(data.data.tasks);
    }
    useEffect(() => {
        fetchData(); //1. get All Task
    }, []);
    return (
        <>
            <NewTask fetchData={fetchData} />
            <TaskList Tasks={Tasks} fetchData={fetchData} />
        </>
    )
}
export default Home;