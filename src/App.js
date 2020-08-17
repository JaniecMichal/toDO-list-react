import React, { useState, useEffect } from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";


function App() {
  const [hideDone, setHideDone] = useState(
    localStorage.getItem("hideDone") !== null ? JSON.parse(localStorage.getItem("hideDone")) : (false)
  );
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;

    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task,
        done: true,
      })))
  };

  const addNewTasks = (content) => {
    if (content !== "") {
      setTasks(tasks =>
        [
          ...tasks,
          {
            content,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          }
        ])
    };
    return;
  };

  const removeAll = () => {
    setTasks(tasks => [])
  };

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTasks} />} />

      <Section
        title="Lista zadań do zrobienia"
        extraContent=
        {
          <Buttons
            tasks={tasks}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            removeAll={removeAll}
          />}

        body=
        {
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleDone={toggleDone}

          />} />

      <Footer />
    </Container>
  );
}

export default App;