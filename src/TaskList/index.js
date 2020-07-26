import React from 'react';
import "./style.css";

const taskList = ({ tasks, hideDone, removeTask, toggleDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList__listItem ${hideDone && task.done ? "taskList__listItem--hidden" : ""}`}
            >
                <button
                    className={`taskList__button ${task.done ? " taskList__button--done" : ""}`}
                    onClick={() => toggleDone(task.id)}
                >

                </button>
                <p className={`taskList__task ${task.done ? " taskList__task--done" : ""}`} > {task.content}</p>
                <button
                    className="taskList__button taskList__button--remove"
                    onClick={() => removeTask(task.id)}>

                </button>
            </li>
        ))}
    </ul>
);

export default taskList;