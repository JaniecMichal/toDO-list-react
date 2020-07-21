import React from 'react';
import "./style.css";

const taskList = ({ tasks, hideDoneTask }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li className={`taskList__listItem ${hideDoneTask && task.done ? "taskList__listItem--hidden" : ""}`}
            >
                <button className={`taskList__button ${task.done ? " taskList__button--done" : ""}`}></button>
                <p className={`taskList__task ${task.done ? " taskList__task--done" : ""}`} > {task.content}</p>
                <button className="taskList__button taskList__button--remove"></button>
            </li>
        ))}
    </ul>
);

export default taskList;