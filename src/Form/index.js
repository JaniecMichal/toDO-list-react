import React from 'react';
import "./style.css";

const form = () => (
    <form className="form">
        <input className="form__input" placeholder="Wpisz zadanie do wykonania" autoFocus />
        <button className="form__addTaskButton">Dodaj zadanie</button>
    </form>
);

export default form;