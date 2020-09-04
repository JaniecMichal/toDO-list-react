import { createGlobalStyle } from "styled-components";
import backgroundImage from "./App/images/checkerboard-cross.png"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        /* Background pattern from Toptal Subtle Patterns */
        background-image: url(${backgroundImage});
        background-repeat: repeat;
    }
`;