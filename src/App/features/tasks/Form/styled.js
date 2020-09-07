import styled from "styled-components";

export const AddingTaskSection = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media (max-width:790px){
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

export const NewTaskContainer = styled.input`
    padding: 10px;
    flex-basis: 75%;
    flex-grow: 1;
    border: 2px solid #555;

    &:focus{
        outline: 4px solid teal;
    }

    @media (max-width:790px){
        width: 100%;
    }
`;

export const AddTaskButton = styled.button`
    margin-left: 5px;
    flex-basis: 20%;
    flex-grow: 1;
    background-color: teal;
    color: white;
    padding: 10px;
    border: 2px solid #555;
    transition: 0.5s;

    &:hover{
    background-color: hsl(180, 100%, 33%);
    color: black;
    cursor: pointer;
    border-color: #222;
    transform: scale(1.12);
    }

    @media (max-width:790px){
        width: 100%;
        margin-top: 10px;

        &:hover{
            background-color: teal;
            color: white;
            border-color: #222;
            transform: none;
            transition:none;
        }
    }
`;
