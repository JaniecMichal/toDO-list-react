import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../taskSlice";

export default () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header mainTitle="React ToDO list by {Imperator}" />
            <Section
                title={task ? task.content : "Ups... Nie znaleziono takiego zadania :/"}
                body=
                {
                    <>
                        {task ? <strong>Ukończono: {task.done ? "TAK" : "NIE"}</strong> : ""}
                    </>
                }
            />
            <Footer />
        </Container>
    )
};