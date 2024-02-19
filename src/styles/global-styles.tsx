import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0px 20%;

      background-color: ${(props) => props.theme.primaryColor};

      *{
         box-sizing: border-box;
         
         font-family: "Roboto", sans-serif;

         margin: 0;
         padding: 0;
      }
   }
`;
