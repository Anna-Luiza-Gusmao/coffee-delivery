import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-600']};
    }

    body {
        background-color: ${(props) => props.theme['white']};
        -webkit-font-smoothing: antialiased;
        padding: 0 10rem;

        @media (min-width: 768px) and (max-width: 1366px){
            padding: 0 5rem;
        }
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;   
        font-size: 1rem;
    }
`