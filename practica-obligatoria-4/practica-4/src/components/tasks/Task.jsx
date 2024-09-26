import React, { useState } from "react";

const Task = ({ addTask }) => {
    const [description, setDescription] = useState('');

    const inputHandler = (event) => {
        setDescription(event.target.value);
    };

    const addTaskHandler = (task) => {
        addTask({
            description,
            completed: false
        })
        setDescription('');
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={description}
                onChange={inputHandler}
            />
            <button onClick={addTaskHandler}>Agregar Tarea</button>
        </div>
    );
}; 

export default Task;