import styled from "styled-components";

export const AddingTaskSection = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

export const AddTaskButton = styled.button`
    margin-left: 5px;
    flex-basis: 20%;
    flex-grow: 1;
    background-color:  ${({ theme }) => theme.color.teal};
    color: white;
    padding: 10px;
    border: 2px solid #555;
    transition: 0.5s;

    &:hover{
    background-color:  ${({ theme }) => theme.color.lightTeal};
    color:  ${({ theme }) => theme.color.black};
    cursor: pointer;
    border-color:  ${({ theme }) => theme.color.mineShaft};
    transform: scale(1.12);
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        margin-top: 10px;
        margin-left:0px;

        &:hover{
            background-color: teal;
            color: white;
            border-color:  ${({ theme }) => theme.color.mineShaft};
            transform: none;
            transition:none;
        }
    }
`;
