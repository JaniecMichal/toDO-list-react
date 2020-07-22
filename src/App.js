import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";


const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "iść na spacer", done: false },
  { id: 3, content: "iść spać", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section title="Lista zadań do zrobienia" extraContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
        body={<TaskList tasks={tasks} hideDoneTask={hideDoneTask} />} />

      <Footer />
    </Container>
  );
}

export default App;
