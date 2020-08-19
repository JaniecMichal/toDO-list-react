import React from 'react';
import { TaskList, Item, TaskContent, SetDoneButton, RemoveButton } from "./styled";

const taskList = ({ tasks, hideDone, removeTask, toggleDone }) => (
    <TaskList>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={hideDone && task.done}
            >
                <SetDoneButton
                    checked={task.done}
                    onClick={() => toggleDone(task.id)}
                >

                </SetDoneButton>
                <TaskContent done={task.done}> {task.content}</TaskContent>
                <RemoveButton
                    onClick={() => removeTask(task.id)}>
                </RemoveButton>
            </Item>
        ))}
    </TaskList >
);

export default taskList;