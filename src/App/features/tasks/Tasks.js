import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Footer from "../../common/Footer";
import { useTasks } from "./useTasks";
import { useHideDone } from "./useHideDone";

function Tasks() {
  const [hideDone, toggleHideDone] = useHideDone();
  const [tasks,
    addNewTask,
    toggleDone,
    removeTask,
    removeAll,
    setAllDone] = useTasks();

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />

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

export default Tasks;
