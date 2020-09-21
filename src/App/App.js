import React from "react";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/AuthorPage";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to="/zadania">
                        Menadżer zadań
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/autor">
                        O autorze
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);