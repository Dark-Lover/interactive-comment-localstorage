import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Rubik', sans-serif;
    background-color: hsl(230, 40%, 95%);
    font-size: 16px;
    position: relative;
}
`;

export default GlobalStyles;
