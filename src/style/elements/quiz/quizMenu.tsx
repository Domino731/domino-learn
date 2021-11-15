import styled from "styled-components";
import {EditorHeaderLink} from "../codeEditor/codeEditor";
import {device} from "../../general/breakpoints";
import bg from "../../../images/quiz_menu_background.svg";
export const QuizHeader = styled.header`
  background: ${props => props.theme.color.yellow};
  padding: 5px 0;
`
export const QuizHeaderLink = styled(EditorHeaderLink)``

export const QuizMenuWrapper = styled.main`
  max-width: 1920px;
  height: calc(100vh - 53px);
  background-image: url(${bg});
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns:  repeat(3, 1fr);
  a {
    display: block;
    width: 25%;
  } 
`
const QuizColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const QuizHTMLColumn = styled(QuizColumn)`
  grid-column: 1/1;
  grid-row: 1/-1;
  background: red;
`
export const QuizCSSColumn = styled(QuizColumn)`
  grid-column: 2/2;
  grid-row: 2/-1;
  background: #c06969;
`
export const QuizJSColumn = styled(QuizColumn)`
  grid-column: 3/3;
  grid-row: 2/-1;
  background: #268ae7;
`
export const QuizMenuTitle = styled.h2`
   grid-column: 2/4;
  grid-row: 1/1;
  background: #268ae7;
`
