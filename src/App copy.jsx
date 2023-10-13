import TaskList from "./components/tasks/TaskList";
import TaskForm from "./components/tasks/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task){
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            description: task.description
        }])
    }

    function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <>
            <TaskForm createTask={createTask} />
            <hr/>
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
    );
}

export default App;
