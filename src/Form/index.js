import React, { useState, useRef } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const taskInput = useRef(null);

    const setFocus = () => {
        taskInput.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        setFocus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Wpisz zadanie do wykonania"
                ref={taskInput}
                autoFocus
            />
            <button className="form__addTaskButton">Dodaj zadanie</button>
        </form>
    );
};

export default Form;