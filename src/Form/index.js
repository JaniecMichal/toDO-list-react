import React, { useState, useRef } from 'react';
import { AddingTaskSection, NewTaskContainer, AddTaskButton } from "./styled";


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
        <AddingTaskSection onSubmit={onFormSubmit}>
            <NewTaskContainer
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Wpisz zadanie do wykonania"
                ref={taskInput}
                autoFocus
            />
            <AddTaskButton>Dodaj zadanie</AddTaskButton>
        </AddingTaskSection>
    );
};

export default Form;