import React, { useState } from "react";
import Task from "../tasks/Task";

const Table = () => {
    const [tasks, setTasks] = useState([
        {
            description: 'hacer la tarea',
            completed: false,
        },
        {
            description: 'comer',
            completed: true,
        },
        {
            description: 'estudiar',
            completed: false,
        }
    ]);

    const taskCompletedHandler = (indexTask) => {
        const newTasksList = tasks.map((task, index) => {
            if (index === indexTask) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasksList);
    };

    const deleteTaskHandler = (indexTask) => {
        const newTasksList = tasks.filter((task, index) => {
            if (index != indexTask) {
                return true;
            }
            else {
                return false;
            }
        });
        setTasks(newTasksList);
    }

    const addTaskHandler = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{color: task.completed ? 'grey' : 'black'}}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => taskCompletedHandler(index)}
                        />
                        {task.description}
                        <button onClick={() => deleteTaskHandler(index)}>Borrar tarea</button>
                    </li>
                ))}
            </ul>
            <Task addTask={addTaskHandler} />
        </div>
    );
};

export default Table;
