import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/AuthorPage";
import { NavWrapper, StyledNavLink, NavList, NavListItem } from "./styled";

export default () => (
    <HashRouter>
        <NavWrapper>
            <NavList>
                <NavListItem>
                    <StyledNavLink to="/zadania">
                        Menadżer zadań
                    </StyledNavLink>
                </NavListItem>
                <NavListItem lastItem>
                    <StyledNavLink to="/autor">
                        O autorze
                    </StyledNavLink>
                </NavListItem>
            </NavList>
        </NavWrapper>
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