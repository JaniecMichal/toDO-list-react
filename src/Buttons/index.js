import React from 'react';
import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => (

    <div className="buttonContainer">

        {tasks.length > 0 && (
            <React.Fragment>
                <button className="button" disabled={tasks.every(({ done }) => done)}>
                    Oznacz wszystkie jako ukończone
                </button>
                <button className="button">
                    {hideDoneTask ? "Pokaż wykonane zadania" : "Ukryj wykonane zadania"}
                </button>
                <button className="button button--allRemove">
                    Usuń wszystkie zadania
                </button>
            </React.Fragment>
        )}
    </div>

)

export default Buttons