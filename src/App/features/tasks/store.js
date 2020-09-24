import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddelware from "redux-saga";
import { watchTaskAction } from "./taskSaga";
import tasksReducers from "./taskSlice";

const sagaMiddelware = createSagaMiddelware();

const store = configureStore({
    reducer: {
        tasks: tasksReducers,
    },
    middleware: [sagaMiddelware]
});

sagaMiddelware.run(watchTaskAction);

export default store;