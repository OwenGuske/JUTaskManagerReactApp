import React, { useState } from "react";

// TaskInput: Handles user input and adds a new task
function TaskInput({ onAddTask }) 
{
    const [task, setTask] = useState("");

    // Adds the task and clears the input field
    const handleAddTask = () => 
    {
        if (task.trim()) { // Ensures task is not empty
            onAddTask(task); // Calls parent function to add task
            setTask(""); // Clears input
        }
    };

    return (
        <div style={{ margin: "20px 0" }}>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
                style={{
                    padding: "10px",
                    width: "300px",
                    borderRadius: "5px",
                    border: "2px solid gold",
                }}
            />

            <button
                onClick={handleAddTask}
                style={{
                    marginLeft: "10px",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    backgroundColor: "gold",
                    color: "green",
                    fontWeight: "bold",
                    cursor: "pointer",
                    border: "none",
                }}
            >
                Add Task
            </button>

        </div>
    );
}

export default TaskInput;
