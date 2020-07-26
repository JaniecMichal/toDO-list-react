import React, { useState } from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";


function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reacta", done: false },
    { id: 2, content: "iść na spacer", done: false },
    { id: 3, content: "iść spać", done: true },
    { id: 4, content: "wstać i zjeść śniadanie", done: true },
  ]);

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

  const removeAll = () => {
    setTasks(tasks => [])
  };

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

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
