import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddelware from "redux-saga";
import { watchExampleTasks } from "./taskSaga";
import tasksReducers from "./taskSlice";

const sagaMiddelware = createSagaMiddelware();

const store = configureStore({
    reducer: {
        tasks: tasksReducers,
    },
    middleware: [sagaMiddelware]
});

sagaMiddelware.run(watchExampleTasks);

export default store;