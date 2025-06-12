import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled.tsx";

export const GlobalStyles = createGlobalStyle `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${myTheme.colors.grey.dark};
        font-family: Inter, sans-serif;
    }
    a {
        text-decoration: none;
    }
`