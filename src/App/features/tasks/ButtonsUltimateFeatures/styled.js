import styled from "styled-components";

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
