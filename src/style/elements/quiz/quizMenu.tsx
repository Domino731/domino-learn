import styled from "styled-components";
import {EditorHeaderLink} from "../codeEditor/codeEditor";

export const QuizHeader = styled.header`
  height: 53px;
  background: ${props => props.theme.color.yellow};
  padding: 0 41px;
`
export const QuizHeaderLink = styled(EditorHeaderLink)``

export const QuizMenuWrapper = styled.main`
width: 100vw;
  height: calc(100vh - 53px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  a{
    display: block;
    width: 25%;
  }
`
export const QuizMenuItem = styled.div`
  width: 100%;
  padding: 27px 17px;
  border: 4px solid black;
  border-radius: 38px;
  box-shadow: 18px 18px ${props => props.theme.color.gray};
  transition: 0.2s;
  img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &:hover{
    cursor: pointer;
    box-shadow: 32px 32px ${props => props.theme.color.gray},
    0 114px ${props => props.theme.color.blue} inset;
  
  }
`

