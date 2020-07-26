import React from 'react';
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, removeAll }) => (

    <div className="buttonContainer">

        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    className="button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Oznacz wszystkie jako ukończone
                </button>
                <button
                    className="button button--hideDone"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż wykonane zadania" : "Ukryj wykonane zadania"}
                </button>
                <button
                    className="button button--allRemove"
                    onClick={removeAll}
                >
                    Usuń wszystkie zadania
                </button>
            </React.Fragment>
        )}
    </div>

)

export default Buttons