import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setLoading, setPending } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield put(setLoading());
        yield delay(1500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
    yield put(setPending());
}

export function* watchExampleTasks() {
    console.log("saga jest podłączona");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}