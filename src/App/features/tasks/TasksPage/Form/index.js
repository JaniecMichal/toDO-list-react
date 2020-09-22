import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTasks } from "../../taskSlice";
import { AddingTaskSection, AddTaskButton } from "./styled";
import Input from '../Input';


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const taskInput = useRef(null);

    const setFocus = () => {
        taskInput.current.focus();
    };

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!newTaskContent.trim()) {
            return;
        }

        dispatch(addTasks({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }))
        setNewTaskContent("");
        setFocus();
    };

    return (
        <AddingTaskSection onSubmit={onFormSubmit}>
            <Input
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