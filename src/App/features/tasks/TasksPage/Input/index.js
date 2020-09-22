import styled from "styled-components";

export default styled.input`
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
