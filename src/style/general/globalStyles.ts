import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif !Important;
    color: #404040;
    scroll-behavior: smooth;
    &:hover {
      cursor: default;
    }
    &::-webkit-scrollbar {
      width: 7px;
        background: #404040;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
        background: #00b9f1;
    }
   
  }
  :root{
    @media (max-width: 1440px){
      font-size: 15px;
    }
    
  }
  button {
    border: none;
    background: transparent;
    font-size: 1.313rem;
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export {}