import styled, { css } from "styled-components";

export const Button = styled.button`
    flex-basis: auto;
    margin-left: 10px;
    background-color: teal;
    padding: 10px;
    border: 2px solid #555;
    color: white;
    transition: background-color 0.5s;

    &:hover{
        background-color: hsl(120, 100%, 25%);
    }

    &:disabled{
        background-color: grey;
        border-color: grey;
    }

    @media (max-width:790px) {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
    }

    ${({ hideDoneButton }) => hideDoneButton && css`
    &:hover{
        background-color: hsl(0, 0%, 51%);
    }
    @media (max-width:500px) {
        &:hover{
            background-color: teal;
        }
    `}

    ${({ allRemoveButton }) => allRemoveButton && css`
        flex-basis: auto;
        background-color: darkred;
        flex-basis: auto;
        padding: 10px;
        margin-left: 10px;

    &:hover{
        background-color: hsl(0, 100%, 38%);
        border-color: #222;
    }

    @media (max-width:790px) {
        flex-basis: auto;
        background-color: darkred;
        flex-basis: auto;
        padding: 10px;
        margin-top: 10px;
    }
   `}
`;