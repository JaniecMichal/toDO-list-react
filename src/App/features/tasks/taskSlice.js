import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.done = true;
            })
        },
        removeAllTasks: ({ tasks }) => {
            tasks.splice(0, tasks.length);
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    },
});

export const {
    addTasks,
    toggleHideDone,
    toggleDone,
    removeTask,
    setAllDone,
    removeAllTasks,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;