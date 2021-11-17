import styled from "styled-components";
import {device} from "../../general/breakpoints";

interface PropsQuizContainer{
  background: string;
}
export const QuizContainer = styled.main<PropsQuizContainer>`
  max-width: 1980px;
  height: 100vh;
  min-height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  background-size: cover;
  @media ${device.desktopS}{
    min-height: 700px;
  }
  @media ${device.laptopM}{
    min-height: 630px;
  }
  @media ${device.laptopSM}{
    min-height: 610px;
  }
  @media ${device.laptopS}{
    min-height: 570px;
  }
  @media ${device.mobileL}{
    min-height: 490px;
  }
`
export const QuizQuestionWrapper = styled.form`
  width: 35%;
  max-width: 736px;
  background: #fff;
  padding: 22px;
  box-shadow: 24px 24px ${props => props.theme.color.gray};
  border-radius: 41px;
  @media ${device.laptopL}{
    border-radius: 37px;
    box-shadow: 21px 21px ${props => props.theme.color.gray};
  }
  @media ${device.laptopM}{
    width: 42%;
    padding: 18px;
    border-radius: 35px;
    box-shadow: 19px 19px ${props => props.theme.color.gray};
  }
  @media ${device.laptopSM}{
    border-radius: 31px;
    box-shadow: 18px 18px ${props => props.theme.color.gray};
  }
  @media ${device.laptopS}{
    border-radius: 23px;
    box-shadow: 13px 13px ${props => props.theme.color.gray};
    padding: 15px;
    width: 47%;
  }
  @media screen and (max-width: 799px){
    width: 61%;
    border-radius: 30px;
    box-shadow: 16px 16px ${props => props.theme.color.gray};
    padding: 17px;
  }
  @media screen and (max-width: 625px){
    width: 68%;
    border-radius: 24px;
  }
  @media screen and (max-width: 540px){
    width: 90%;
    box-shadow: 12px 12px ${props => props.theme.color.gray};
  }
  @media ${device.mobileL}{
    border-radius: 22px;
  }
  @media screen and (max-width: 346px){
    border-radius: 18px;
    box-shadow: 10px 10px ${props => props.theme.color.gray};
  }
`

export const QuizQuestionsLeft = styled.span`
  display: block;
  font-size: 0.7em;
  margin-bottom: 0.4em;
`
export const QuizSpecs = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 1.1em 0 0.2em;
  img {
    width: 2em;
    margin-right: 0.2em;
  }
  strong{
    font-weight: 600;
  }
  @media ${device.desktopS}{
    font-size: 22px;
  }
  @media ${device.laptopL}{
    font-size: 20px;
  }
  @media ${device.laptopM}{
    font-size: 19px;
  }
  @media ${device.laptopSM}{
    font-size: 18px;
  }
  @media ${device.laptopS}{
    font-size: 16px;
  }
  @media screen and (max-width: 799px){
    font-size: 19px;
  }
  @media ${device.mobileL}{
    font-size: 18px;
  }
  @media screen and (max-width: 356px){
    font-size: 16px;
  }
`
export const QuizQuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  @media ${device.desktopS}{
    font-size: 27px;
  }
  @media ${device.laptopL}{
    font-size: 25px;
  }
  @media ${device.laptopM}{
    font-size: 24px;
  }
  @media ${device.laptopSM}{
    font-size: 22px;
  }
  @media screen and (max-width: 799px){
    font-size: 24px;
  }
  @media ${device.mobileL}{
    font-size: 22px;
  }
  @media screen and (max-width: 346px){
    font-size: 20px;
  }
`
export const QuizCoins = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.4em;
  }

  span {
    display: block;
    margin-left: 0.2em;
    font-size: 1.4em;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.gray};
  }

  @media screen and (max-width: 550px){
    img{
     width: 1.2em; 
    }
    span {
      font-size: 1.2em;
    }
  }
`
export const QuizQuestionNumber = styled.span`
  display: block;
  font-weight: 900;
  font-size: 1.6em;
  @media screen and (max-width: 550px){
    font-size: 1.3em;
  }
`
export const QuizQuestionTitle = styled.h2`
  padding: 0.5em 0;
  font-size: 22px;
  code {
    background: ${props => props.theme.color.white};
    padding: 0 .3em ;
    border-radius: .4em;
  }
  @media ${device.desktopS}{
    font-size: 20px;
  }
  @media ${device.laptopL}{
    font-size: 19px;
  }
  @media ${device.laptopM}{
    font-size: 18px;
  }
  @media ${device.laptopSM}{
    font-size: 17px;
  }
  @media ${device.laptopS}{
    font-size: 16px;
  }
  @media screen and (max-width: 799px){
    font-size: 19px;
  }
  @media ${device.mobileL}{
    font-size: 18px;
  }
  @media ${device.mobileM}{
    font-size: 17px;
  }
  @media screen and (max-width: 346px){
    font-size: 16px;
  }
`
export const QuizCheckboxWrapper = styled.div`
  display: flex;
  font-size: 30px;
`
export const QuizAnswerLetter = styled.span`
  font-size: 1.2em;
  width: 1.3em;
  height: 1.3em;
  min-height: 1.3em;
  max-height: 1.3em;
  max-width: 1.3em;
  min-width: 1.3em;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${props => props.theme.color.purple};
  box-shadow: 0 0 3px #787373;
  @media ${device.laptopS}{
    box-shadow: 0 0 2px #787373;
  }
`

interface PropsQuizAnswer {
    correct?: boolean | undefined
}

export const QuizAnswer = styled.div<PropsQuizAnswer>`
  position: relative;
  display: flex;
  font-size: 22px;
  margin: 0.6em 0;
  padding: 0.2em 0.3em;
  border-radius: 0.7em;
  transition: 0.1s;
  word-break: break-word;
  background: ${(props) => {
    switch (props.correct) {
      case true:
        return props.theme.color.green
      case false:
        return props.theme.color.red
    }
  }};
  code {
    background: ${props => props.theme.color.white};
    padding: 0 .3em ;
    border-radius: .4em;
  }
  &:hover {
    background: ${(props) => {
      switch (props.correct) {
        case true:
          return props.theme.color.green;
        case false:
          return props.theme.color.red;
        default:
          return `#f7f2f2`;
      }
    }};
  }
  label {
    margin-left: 0.4em;
    padding-top: 0.3em;
  }

  input {
    border: none;
    position: absolute;
    left: 0;
    top: 0;
    appearance: none;
    width: 100%;
    height: 100%;
  }
  @media ${device.desktopS}{
    font-size: 20px;
  }
  @media ${device.laptopL}{
    font-size: 19px;
  } 
  @media ${device.laptopM}{
    font-size: 18px;
  }
  @media ${device.laptopSM}{
    font-size: 17px;
  }
  @media ${device.laptopS}{
    font-size: 16px;
  }
  @media screen and (max-width: 799px){
    font-size: 18px;
  }
  @media ${device.mobileL}{
    font-size: 17px;
  }
  @media ${device.mobileM}{
    font-size: 16px;
  }
  @media screen and (max-width: 356px){
    font-size: 15px;
  }
`
export const QuizQuestionBtn = styled.button`
  display: block;
  width: 100%;
  font-size: 23px;
  padding: .3em 0;
  border-radius: .4em;
  background: ${props => props.theme.color.purple};
  color: #fff;
  transition: 0.2s;
  font-weight: bold;
  letter-spacing: 0.063rem;
  @media screen and (min-width: 1024px){
     &:hover {
      letter-spacing: 0.188rem;
  }
  }
  @media ${device.desktopS}{
    font-size: 21px;
  }
  @media ${device.laptopL}{
    font-size: 20px;
  }
  @media ${device.laptopM}{
    font-size: 20px;
  }
  @media ${device.laptopSM}{
    font-size: 19px;
  }
  @media ${device.laptopS}{
    font-size: 18px;
  }
  @media screen and (max-width: 799px){
    font-size: 20px;
  }
  @media ${device.mobileL}{
    font-size: 18px;
  }
  @media ${device.mobileM}{
    font-size: 18px;
  }
  @media screen and (max-width: 356px){
    font-size: 17px;
  }
`

export const QuizSummaryWrapper = styled.div`
  width: 35%;
  height: 527px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(11, 1fr);
  padding: 22px;
  box-shadow: 24px 24px ${props => props.theme.color.gray};
  border-radius: 41px;

  @media ${device.desktopS}{
    height: 484px;
  }
  @media ${device.laptopL}{
    height: 457px;
    border-radius: 37px;
    box-shadow: 21px 21px ${props => props.theme.color.gray};
  }
  @media ${device.laptopM}{
    width: 42%;
    height: 427px;
    padding: 18px;
    border-radius: 35px;
    box-shadow: 19px 19px ${props => props.theme.color.gray};
  }

  @media ${device.laptopSM}{
    height: 402px;
    border-radius: 31px;
    box-shadow: 18px 18px ${props => props.theme.color.gray};
  }
  @media ${device.laptopS}{
    height: 362px;
    border-radius: 23px;
    box-shadow: 13px 13px ${props => props.theme.color.gray};
    padding: 15px;
    width: 47%;
  }
  @media screen and (max-width: 799px){
    height: 417px;
    width: 61%;
    border-radius: 30px;
    box-shadow: 16px 16px ${props => props.theme.color.gray};
    padding: 17px;
  }
  @media screen and (max-width: 702px){
    height: 392px;
  }
  @media screen and (max-width: 625px){
    width: 68%;
    border-radius: 24px;
  }
  @media screen and (max-width: 540px){
    width: 90%;
    box-shadow: 12px 12px ${props => props.theme.color.gray};
  }
  @media ${device.mobileL}{
    border-radius: 22px;
    display: block;
    height: auto;
  }
  @media screen and (max-width: 346px){
    border-radius: 18px;
    box-shadow: 10px 10px ${props => props.theme.color.gray};
  }
`
export const QuizSummaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 0.125rem;
  @media ${device.desktopS}{
    font-size: 32px;
  }
  @media ${device.laptopL}{
    font-size: 30px;
  }
  @media ${device.laptopM}{
    font-size: 28px;
  }
  @media ${device.laptopS}{
    font-size: 26px;
  }
  @media screen and (max-width: 799px){
    font-size: 28px;
  }
  @media ${device.mobileL}{
    font-size: 26px;
  }
`
const QuizSummaryItem = styled.div`
  padding: 0.5rem;
`
export const QuizSummaryImages = styled(QuizSummaryItem)`
  grid-column: 1 / 2;
  grid-row: 2 / 7;
  position: relative;
  overflow: hidden;
  border-right: 5px solid ${props => props.theme.color.gray};
  @media ${device.laptopM}{
    border-right: 4px solid ${props => props.theme.color.gray};
  }
  @media ${device.laptopS}{
    border-right: 3px solid ${props => props.theme.color.gray};
  }
  @media screen and (max-width: 799px){
    border-right: 4px solid ${props => props.theme.color.gray};
  }
  @media ${device.mobileL}{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: none;
  }
`
export const QuizSummaryGeneral = styled(QuizSummaryItem)`
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  font-size: 20px;
  
  div {
    margin-bottom: 0.3em;

    span {
      font-weight: bold;
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.color.purple};
    }
  }

  @media ${device.desktopS}{
    font-size: 19px;
  }
  @media ${device.laptopL}{
    font-size: 18px;
  }
  @media ${device.laptopM}{
    font-size: 17px;
  }
   @media ${device.laptopS}{
    font-size: 15px;
  }
  @media screen and (max-width: 799px){
    font-size: 17px;
  }
  @media ${device.mobileL}{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
`

interface PropsQuizSummaryBar {
    questions: number
    correct: number
}

export const QuizSummaryBar = styled(QuizSummaryItem)<PropsQuizSummaryBar>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 5 / 7;

  div {
    width: 98%;
    position: relative;
    height: 53px;
    border: 4px solid ${props => props.theme.color.gray};
    border-radius: 12px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      background: ${props => props.theme.color.green};
      display: block;
      height: 100%;
      width: ${props => ((props.correct / props.questions) * 100) + "%"};
    }
  }

  @media ${device.desktopS}{
    div {
      height: 46px;
    }
  }
  @media ${device.laptopL}{
    div {
      height: 44px;
    }
  }
  @media ${device.laptopM}{
    div {
      border-radius: 10px;
      height: 42px;
      border: 3px solid ${props => props.theme.color.gray};
    }
  }

  @media ${device.laptopS}{
    div{
      border-radius: 8px;
    height: 35px;
    border: 2px solid ${props => props.theme.color.gray};
    }
    
  }
  @media screen and (max-width: 799px){
    div {
      border-radius: 12px;
    height: 40px;
    border: 3px  solid ${props => props.theme.color.gray};
    }
  }

  @media ${device.mobileL}{
    div{
      border-radius: 9px;
      height: 36px;
    }
  }
 
`
export const QuizSummaryPanel = styled(QuizSummaryItem)`
  grid-column: 1 / 3;
  grid-row: 9 / 11;
  display: flex;
  font-size: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 0.2em;
    a, button {
      letter-spacing: 0.125rem;
      font-weight: bold;
      text-align: center;
      height: 2em;
      font-size: 1em;
      display: block;
      width: 100%;
      background: ${props => props.theme.color.purple};
      color: #fff;
      transition: 0.2s;
      border-radius: 0.4em;
      line-height: 2em;
    }
  }
  @media ${device.desktopS}{
      font-size: 18px;
  }
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopM}{  
    font-size: 16px;
  }
  @media ${device.laptopS}{
    font-size: 15px;
  }
  @media screen and (max-width: 799px){
    font-size: 17px;
  }
  @media ${device.tablet}{
    grid-row: 10 / 12;
  }
  @media ${device.mobileL}{
    padding: 0;
     flex-direction: column;
     font-size: 16px;
     div{
      padding: 0;
       width: 100%;
       margin-top: 8px
     }
  }
  @media ${device.mobileM}{
    font-size: 15px;
  }
`

export const QuizSummaryCoins = styled(QuizSummaryItem)`
  grid-column: 1 / 3;
  grid-row: 7 / 9;
  display: flex;
  border-top: 5px solid ${props => props.theme.color.gray};
  border-bottom: 5px solid ${props => props.theme.color.gray};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    font-size: 20px;
    span {
      display: block;
      margin-left: 0.2em;
      padding: 0.1em 0.338em;
      border-radius: 0.25em;
      background: ${props => props.theme.color.red};
      color: ${props => props.theme.color.white};
    }

    img {
      width: 2em;
      margin-right: 0.4em;
    }
  }
  @media ${device.desktopS}{
    div{
      font-size: 18px;
    }
  }
  @media ${device.laptopL}{
    div {
      font-size: 16px;
    }
  }
  @media ${device.laptopM}{
    border-top: 4px solid ${props => props.theme.color.gray};
    border-bottom: 4px solid ${props => props.theme.color.gray};
  }
  @media ${device.laptopS}{
    border-top: 3px solid ${props => props.theme.color.gray};
    border-bottom: 3px solid ${props => props.theme.color.gray};
    div {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 799px){
    border-top: 4px solid ${props => props.theme.color.gray};
    border-bottom: 4px solid ${props => props.theme.color.gray};
    div {
      font-size: 17px;
    }
  }
  @media ${device.tablet}{
    align-items: center;
    flex-direction: column;
    grid-row: 7 / 10;
    div{
      width: 100%;
    }
  }
  @media ${device.mobileL}{
    div{
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
  @media ${device.mobileM}{
    border-top: 3px solid ${props => props.theme.color.gray};
    border-bottom: 3px solid ${props => props.theme.color.gray};
    div{
      font-size: 15px;
      margin-bottom: 4px;
    }
  }
`
export const QuizSummaryIcons = styled.div`
  grid-column: 1 / 3;
  grid-row: 11 / 12;
`
export const QuizSummaryFigure = styled.img`
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  width: auto;
  height: 91%;
  object-fit: cover;
  @media ${device.mobileL}{
    position: static;
  }
`
export const QuizSummaryIcon = styled.img`
  position: absolute;
  height: 48%;
  z-index: 2;
  left: 22px;
    top: -18px;
    @media ${device.laptopL}{
    left: 19px;
    top: -15px;
    height: 43%;
    }

  @media ${device.laptopSM}{
    left: 24px;
    top: -12px;
    height: 45%;
  }
  @media screen and (max-width:750px){
    left: 13px;
    top: -12px;
    height: 40%;
  }
  @media ${device.mobileL}{
    position: static;
    height: 72%;
    margin-left: 6px;
  }
`