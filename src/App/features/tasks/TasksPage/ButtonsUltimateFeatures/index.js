import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, removeAllTasks, selectHideDone } from "../../taskSlice";
import { Button } from "../Button";
import { ButtonsContainer } from "./styled";

const ButtonsUltimateFeatures = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>

            {tasks.length > 0 && (
                <>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Oznacz wszystkie jako ukończone
                    </Button>
                    <Button
                        disabled={!tasks.some(({ done }) => done)}
                        onClick={() => dispatch(toggleHideDone())}
                        hideDoneButton
                    >
                        {hideDone ? "Pokaż wykonane zadania" : "Ukryj wykonane zadania"}
                    </Button>
                    <Button
                        allRemoveButton
                        onClick={() => dispatch(removeAllTasks())}
                    >
                        Usuń wszystkie zadania
                    </Button>
                </>
            )
            }
        </ButtonsContainer >

    )
};

export default ButtonsUltimateFeatures