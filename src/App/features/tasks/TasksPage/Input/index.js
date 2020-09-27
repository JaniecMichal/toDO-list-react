import styled from "styled-components";

export default styled.input`
    padding: 10px;
    flex-basis: 75%;
    flex-grow: 1;
    border: 2px solid #555;

    &:focus{
        outline: 4px solid  ${({ theme }) => theme.color.teal};
    }

    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 100%;
    }
`;
