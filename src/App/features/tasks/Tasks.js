import React from 'react';
import Form from "./Form";
import TaskOfList from "./TaskOfList";
import ButtonsUltimateFeatures from "./ButtonsUltimateFeatures";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Footer from "../../common/Footer";

function Tasks() {

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Lista zadań do zrobienia"
        extraContent=
        {
          <ButtonsUltimateFeatures />}

        body=
        {
          <TaskOfList />
        }
      />

      <Footer />
    </Container>
  );
}

export default Tasks;
