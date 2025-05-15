import './App.css';
import TaskDeatils from './Components/TaskDetails';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import EditDeatils from './Components/EditDeatils';

function App() {
  let { Id } = useParams();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact={true}></Route>
        <Route path="/details/:Id" element={<TaskDeatils />}> </Route>
        <Route path="/edit/:Id" element={<EditDeatils />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
