import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
font-family: 'Inter', sans-serif !Important;
  color: #404040;
  overflow: hidden;
}

button{
  border: none;
  background: transparent;
  font-size: 1.313rem;
  border-radius: 50px;
  &:hover{
    cursor: pointer;
  }
}
a{
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

export {}