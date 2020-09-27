import styled, { css } from "styled-components";

export const Button = styled.button`
    flex-basis: auto;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border: 2px solid #555;
    color: ${({ theme }) => theme.color.white};
    transition: background-color 0.5s;

    &:hover{
        background-color: ${({ theme }) => theme.color.green};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.color.gray};
        border-color: ${({ theme }) => theme.color.gray};
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
    }

    ${({ hideDoneButton }) => hideDoneButton && css`
    &:hover{
        background-color: ${({ theme }) => theme.color.lightGray};
    }
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMedium}px) {
        &:hover{
            background-color: ${({ theme }) => theme.color.teal};
        }
`}

    ${({ allRemoveButton }) => allRemoveButton && css`
        flex-basis: auto;
        background-color: ${({ theme }) => theme.color.darkRed};
        flex-basis: auto;
        padding: 10px;
        margin-left: 10px;

    &:hover{
        background-color:  ${({ theme }) => theme.color.lightRed};
        border-color: # ${({ theme }) => theme.color.mineShaft};
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: auto;
        background-color:  ${({ theme }) => theme.color.darkRed};
        flex-basis: auto;
        padding: 10px;
        margin-top: 10px;
    }
   `}
`;