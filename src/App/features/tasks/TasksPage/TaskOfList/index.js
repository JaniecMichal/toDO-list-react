import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { TaskList, Item, TaskContent, SetDoneButton, RemoveButton, StyledLink } from "./styled";
import { toggleDone, removeTask, selectHideDone, selectTasksByQuery } from '../../taskSlice';
import searchQueryParamsName from "../searchQueryParamsName";

const TaskOfList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamsName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <TaskList>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={hideDone && task.done}
                >
                    <SetDoneButton
                        checked={task.done}
                        onClick={() => dispatch(toggleDone(task.id))}
                    >
                    </SetDoneButton>


                    <TaskContent done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </StyledLink>
                    </TaskContent>


                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}>
                    </RemoveButton>
                </Item>
            ))}
        </TaskList >
    )
};

export default TaskOfList;