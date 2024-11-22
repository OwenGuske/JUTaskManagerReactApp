import React from "react";
// TaskList: Displays a list of tasks and handles task deletion
function TaskList({ tasks, onDeleteTask }) 
{
    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.map((task, index) => (
               
               <li
                    key={index}
                    style={{
                        margin: "10px 0",
                        fontSize: "18px",
                        color: "darkgreen",
                    }}
                >

                    {task}
                    <button
                        onClick={() => onDeleteTask(index)}
                        style={{
                            marginLeft: "10px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            backgroundColor: "gold",
                            color: "green",
                            fontWeight: "bold",
                            cursor: "pointer",
                            border: "none",
                        }}
                    >

                        Delete
                    </button>

                </li>

            ))}
        </ul>
    );
}

export default TaskList;
