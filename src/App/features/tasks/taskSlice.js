import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
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
        },
        setLoading: state => {
            state.loading = "loading";
        },
        setPending: state => {
            state.loading = "";
        },
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
    setTasks,
    setLoading,
    setPending
} = tasksSlice.actions;

const selectTasksState = state => state.tasks

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoadingState = ({ tasks }) => tasks.loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;