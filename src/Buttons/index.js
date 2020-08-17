import React from 'react';
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, removeAll }) => (

    <ButtonsContainer>

        {tasks.length > 0 && (
            <>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Oznacz wszystkie jako ukończone
                </Button>
                <Button
                    onClick={toggleHideDone}
                    hideDone
                >
                    {hideDone ? "Pokaż wykonane zadania" : "Ukryj wykonane zadania"}
                </Button>
                <Button
                    allRemove
                    onClick={removeAll}
                >
                    Usuń wszystkie zadania
                </Button>
            </>
        )}
    </ButtonsContainer>

)

export default Buttons