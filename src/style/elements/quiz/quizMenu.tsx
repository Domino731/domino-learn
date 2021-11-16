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
    margin: 0 auto;
    width: 90%;
  } 
`
const QuizColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`
export const QuizHTMLColumn = styled(QuizColumn)`
  grid-column: 1/1;
  grid-row: 1/-1;
  padding-top: 30px;
  
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 63px;
  color: ${props => props.theme.color.white};
`
export const QuizMenuCard = styled.div`
width: 80%;
margin: 0 auto;
  background: white;
  padding: 13px 0;
 border-radius: 30px;
 box-shadow: 22px 22px ${props => props.theme.color.gray};
 color: ${props => props.theme.color.gray};
 
`
export const QuizMenuCoins = styled.strong`
width: 90%;
margin: 0 auto;
display:block;
text-align: center;
padding-top: .2em;
border-top: 4px solid  ${props => props.theme.color.gray};
font-size: 25px;
font-weight: 500;
`
export const QuizMenuGraphic = styled.img`
display: block;
margin: 0 auto 3px;
height: 193px;
`
export const QuizMenuName = styled.h3`
  text-align: center;
  font-size: 44px;
  margin: .2em 0;
  font-weight: bold;
  font-family: 'Recursive',sans-serif;
`

export const QuizMenuCoinsBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
`
export const QuizMenuCoinsImg = styled.img`
  height: 1.3em;
`
export const QuizMenuCoinsAmount = styled.strong`
 margin-left: 0.2em;
 font-size: 1.1em;
`
