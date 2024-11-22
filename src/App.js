import React, { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>JU Dolphins Task Manager</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                style={{ padding: "10px", width: "200px" }}
            />
            <button onClick={addTask} style={{ marginLeft: "10px", padding: "10px" }}>
                Add Task
            </button>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: "10px 0" }}>
                        {task}{" "}
                        <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
