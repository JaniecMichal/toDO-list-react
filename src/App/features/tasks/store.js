import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "./taskSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducers,
    },
});