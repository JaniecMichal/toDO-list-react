import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks } from "../taskSlice";
import { selectLoadingState } from "../taskSlice";
import Form from "./Form";
import TaskOfList from "./TaskOfList";
import ButtonsUltimateFeatures from "./ButtonsUltimateFeatures";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import { Button } from "../TasksPage/Button";

function TasksPage() {
  const loading = useSelector(selectLoadingState);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header mainTitle="React ToDO list by {Imperator}" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        headerExtraContent=
        {
          <Button
            disabled={loading === "loading" ? "disabled" : ""}
            onClick={() => dispatch(fetchExampleTasks())}
          >
            {loading === "loading" ? "Ładowanie przykładowych zadań" : "Pobierz przykładowe zadania"}
          </Button>
        }
      />

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

export default TasksPage;
