import React, { useState } from 'react';
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
  { id: 4, content: "wstać i zjeść śniadanie", done: true },
];

const hideDone = false;

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section title="Lista zadań do zrobienia" extraContent={<Buttons tasks={tasks} toggleHideDone={toggleHideDone} />}
        body={<TaskList tasks={tasks} hideDone={hideDone} />} />

      <Footer />
    </Container>
  );
}

export default App;
