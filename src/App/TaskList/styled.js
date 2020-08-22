import styled, { css } from "styled-components";
import checkedImg from "./images/checked--small.png"
import basketImg from "./images/basket.png"

export const TaskList = styled.ul`
    padding-left: 0px;
`;

export const Item = styled.li`
    list-style-type: none;
    border-bottom: 2px solid #555;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display:none;
    `}

    @media (max-width:790px){
        padding: 20px 0px;
        border-bottom: 2px solid #555;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TaskContent = styled.p`
    flex-basis: 78%;
    margin-left: 10px;
    font-size: 20px;
    
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width:790px){
        text-align: center;
    }

`;

export const SetDoneButton = styled.button`
    min-height: 30px;
    flex-basis: 10%;
    background-color: hsl(120, 100%, 25%);
    border: 2px solid #555;
    color: white;
    transition: background-color 0.5s;

     &:hover{
    background-color: hsl(120, 100%, 35%);
    border-color: #222;
    background-image: url(${checkedImg});
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    }

    ${({ checked }) => checked && css`
        background-image: url(${checkedImg});
        background-position: center;
        background-repeat: no-repeat; 
        background-color: hsl(120, 100%, 35%);
    `}

    @media (max-width:790px) {
        min-width:30%;
    }
`;

export const RemoveButton = styled(SetDoneButton)`
    background-color: darkred;
    background-image: url(${basketImg});
    background-position: center;
    background-repeat: no-repeat;

    &:hover{
    background-color: hsl(0, 100%, 38%);
    border-color: #222;
    background-image: url(${basketImg});
    background-position: center;
    background-repeat: no-repeat;
    cursor:pointer;
    }

    @media (max-width:790px) {
        min-width:30%;
    }
`;