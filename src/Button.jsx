import { styled, createGlobalStyle } from 'styled-components'

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: ${({ $btntype }) => $btntype === "primary" ? "#007bff" : "#6c757d"};
    color: white;
    cursor: pointer;
`;

const Button2 = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`;

export const PrimaryButton = styled(Button2)`
    background-color: #007bff;
`;

export const SuccessButton = styled(Button2)`
    background-color: #28a745;
`;

export const GlobalStyle = createGlobalStyle`
    h1 {
        color: white;
        background-color: purple;
        font-family: Arial, sans-serif;
    }

    .myparagraph {
        font-family: courier, monospace;
        color: blue;
    }
`;