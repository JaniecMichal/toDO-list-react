import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
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

        ${({ hidden }) => hidden && css`
            display:none;
        `}
    }
`;

export const TaskContent = styled.p`
    overflow-wrap: anywhere;
    flex-basis: 78%;
    margin-left: 10px;
    font-size: 20px;
    
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        text-align: center;
        margin-left: 0px;
    }

`;

export const SetDoneButton = styled.button`
    min-height: 30px;
    flex-basis: 10%;
    background-color: ${({ theme }) => theme.color.green};
    border: 2px solid #555;
    color: ${({ theme }) => theme.color.white};
    transition: background-color 0.5s;
    
     &:hover{
    background-color: ${({ theme }) => theme.color.lightGreen};
    border-color: ${({ theme }) => theme.color.mineShaft};
    background-image: url(${checkedImg});
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    }

    ${({ checked }) => checked && css`
    background-image: url(${checkedImg});
    background-position: center;
    background-repeat: no-repeat;
    `}

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-width:30%;
        text-align: center;

        &:hover{
            background-color: ${({ theme }) => theme.color.green};
            border-color: ${({ theme }) => theme.color.mineShaft};
            background-image: none;
        }

        &:focus{
            background-color: ${({ theme }) => theme.color.green};
            border-color: ${({ theme }) => theme.color.mineShaft};
            background-image: none;
        }

        ${({ checked }) => checked && css`
            background-image: url(${checkedImg});
            background-position: center;
            background-repeat: no-repeat; 
            background-color: ${({ theme }) => theme.color.lightGreen};

            &:focus{
            background-color: ${({ theme }) => theme.color.lightGreen};
            border-color: ${({ theme }) => theme.color.mineShaft};
            background-image: url(${checkedImg});
            background-position: center;
            background-repeat: no-repeat;
    }
        `}
    }
`;

export const RemoveButton = styled(SetDoneButton)`
    background-color: ${({ theme }) => theme.color.darkRed};
    background-image: url(${basketImg});
    background-position: center;
    background-repeat: no-repeat;

    &:hover{
    background-color: ${({ theme }) => theme.color.lightRed};
    border-color: ${({ theme }) => theme.color.mineShaft};
    background-image: url(${basketImg});
    background-position: center;
    background-repeat: no-repeat;
    cursor:pointer;
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-width:30%;
        text-align: center;

        &:hover{
            background-color: ${({ theme }) => theme.color.darkRed};
            border-color: ${({ theme }) => theme.color.mineShaft};
            background-image: none;
        }
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    text-decoration:none;

    &:hover{
           text-decoration:underline;
           color:${({ theme }) => theme.color.teal};
        }
`;