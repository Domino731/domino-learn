import styled, { keyframes } from "styled-components";
import { EditorHeaderLink } from "../codeEditor/codeEditor";
import { device } from "../../general/breakpoints";
import bg from "../../../images/quiz_menu_background.svg";


export const QuizHeader = styled.header`
  background: ${props => props.theme.color.yellow};
  padding: 5px 0;
  @media ${device.desktopS}{
    padding: 4px 0;
  }
`
export const QuizHeaderLink = styled(EditorHeaderLink)``

export const QuizMenuWrapper = styled.main`
  max-width: 1920px;
  height: calc(100vh - 53px);
  min-height: 704px;
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
  @media ${device.desktopS}{
    height: calc(100vh - 46px);
  }
  @media ${device.laptopL}{
    height: calc(100vh - 43px);
  }
  @media ${device.laptopM}{
    min-height: 600px;
    height: calc(100vh - 40px);
  }
  @media ${device.laptopSM}{
    height: calc(100vh - 38px);
  }
  @media ${device.laptopS}{
    min-height: 500px;
    height: calc(100vh - 36px);
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
  grid-row: 1/-1;
  align-items: center;
`
export const QuizJSColumn = styled(QuizColumn)`
  grid-column: 3/3;
  grid-row: 2/-1;
  align-items: flex-end;
  padding-bottom: 42px;
`
export const QuizMenuTitle = styled.h2`
   grid-column: 3/3;
  grid-row: 1/1;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 63px;
  color: white;
  text-shadow: 4px 4px ${props => props.theme.color.purple};
  word-spacing: 0.188rem;
  @media screen and (max-width: 1667px){
    font-size: 59px;
  }
  @media ${device.desktopS}{
    font-size: 46px;
  }
  @media ${device.laptopL}{
    font-size: 44px;
  }
  @media ${device.laptopM}{
    font-size: 39px;
    text-shadow: 3px 3px ${props => props.theme.color.purple};
  }
  @media ${device.laptopSM}{
  font-size: 36px;
}
@media ${device.laptopS}{
  font-size: 34px;
}
`
export const QuizMenuCard = styled.div`
width: 80%;
margin: 0 auto;
  background: white;
  padding: 13px 0;
 border-radius: 30px;
 box-shadow: 17px 17px ${props => props.theme.color.gray};
 color: ${props => props.theme.color.gray};
 transition: .3s;
 &:hover{
  box-shadow: 21px 21px ${props => props.theme.color.gray};
 }
 @media ${device.desktopS}{
  width: 85%;
  border-radius: 27px;
 }
 @media ${device.laptopM}{
   border-radius: 25px;
   box-shadow: 15px 15px ${props => props.theme.color.gray};
   &:hover{
    box-shadow: 19px 19px ${props => props.theme.color.gray};
   }
 }
 @media ${device.laptopS}{
  padding: 9px 0;
   border-radius: 20px;
   box-shadow: 13px 13px ${props => props.theme.color.gray};
   &:hover{
    box-shadow: 16px 16px ${props => props.theme.color.gray};
   }
 }
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
@media ${device.desktopS}{
  font-size: 21px;
  border-top: 3px solid  ${props => props.theme.color.gray};
} 
@media ${device.laptopM}{
  font-size: 19px;
}
@media ${device.laptopSM}{
  font-size: 18px;
}
@media ${device.laptopS}{
  font-size: 17px;
}
`
export const QuizMenuGraphic = styled.img`
display: block;
margin: 0 auto 3px;
height: 193px;
@media ${device.desktopS}{
  height: 157px;
}
@media ${device.laptopM}{
  height: 146px;
}
@media ${device.laptopS}{
  height: 136px;
}
`
export const QuizMenuName = styled.h3`
  text-align: center;
  font-size: 44px;
  margin: .2em 0;
  font-weight: bold;
  font-family: 'Recursive',sans-serif;
  @media ${device.desktopS}{
    font-size: 36px;
  }
  @media ${device.laptopM}{
    font-size: 33px;
}
@media ${device.laptopSM}{
  font-size: 31px;
}
@media ${device.laptopS}{
  font-size: 27px;
}

`

export const QuizMenuCoinsBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 29px;
@media ${device.desktopS}{
  font-size: 23px;
}
@media ${device.laptopM}{
  font-size: 20px;
}
@media ${device.laptopSM}{
  font-size: 19px;
}
@media screen and (max-width: 1146px){
  font-size: 18px;
}
@media ${device.laptopS}{
  font-size: 17px;
}
`
export const QuizMenuCoinsImg = styled.img`
  height: 1.3em;
`
export const QuizMenuCoinsAmount = styled.strong`
 margin-left: 0.2em;
 font-size: 1.1em;
`
