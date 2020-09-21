import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TaskList, Item, TaskContent, SetDoneButton, RemoveButton } from "./styled";
import { selectTasks, toggleDone, removeTask, selectHideDone } from '../taskSlice';

const TaskOfList = () => {
    const tasks = useSelector(selectTasks);
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

                    <TaskContent done={task.done}> {task.content}</TaskContent>

                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}>
                    </RemoveButton>
                </Item>
            ))}
        </TaskList >
    )
};

export default TaskOfList;