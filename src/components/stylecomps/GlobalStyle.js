import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('${(props) => props.theme.fontSource}'); 
    @import url('https://fonts.googleapis.com/css?family=Tangerine');

    * {
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme.backgroundColor};
        font-family: ${(props) => props.theme.fontFamily};
    }
    div.Tangerine {
        font-family: 'Tangerine', serif;
        font-size: 48px;
        text-shadow: 4px 4px 4px #aaa;
    }
`;

export default GlobalStyle;
