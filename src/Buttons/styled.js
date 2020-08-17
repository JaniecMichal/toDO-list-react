import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`    
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    @media (max-width:790px) {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        align-items: center;
    }
`;

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
    }

    ${({ hideDone }) => hideDone && css`
    &:hover{
        background-color: hsl(0, 0%, 51%);
    }`}

    ${({ allRemove }) => allRemove && css`
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
        background-image: none;
        flex-basis: auto;
        padding: 10px;
        margin-top: 10px;
    }
   `}
`;