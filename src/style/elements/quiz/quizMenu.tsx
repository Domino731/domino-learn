import styled from "styled-components";
import { EditorHeaderLink } from "../codeEditor/codeEditor";
import { device, onlyOnDesktop } from "../../general/breakpoints";


export const QuizHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
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
  @media screen and (max-width: 1023px){
    height: calc(100vh - 44px);
  }
  @media ${device.mobileXL}{
    min-height: 763px;
    height: calc(100vh - 42px);
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 500px){
    min-height: 718px;
    height: calc(100vh - 41px);
  }
  @media ${device.mobileL}{
    flex-wrap: nowrap;
    flex-direction: column;
    min-height: 939px;
    a {
      width: 96%;
    }
  }
  @media ${device.mobileM}{
    height: calc(100vh - 38px);
  }
  @media screen and (max-width: 340px){
    height: calc(100vh - 37px);
  }
`
const QuizColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  @media ${device.mobileXL}{
   flex-grow: 1;
   width: 50%;
   height: auto;
 }
 @media ${device.mobileL}{
   flex-grow: 0;
   width: 100%;
   margin-bottom: 31px;
 }
`
export const QuizHTMLColumn = styled(QuizColumn)`
  grid-column: 1/1;
  grid-row: 1/-1;
  padding-top: 30px;
  @media ${device.mobileXL}{
    padding: 0;
  }
`
export const QuizCSSColumn = styled(QuizColumn)`
  grid-column: 2/2;
  grid-row: 1/-1;
  align-items: center;
  @media ${device.mobileXL}{
    align-items: flex-start;
  }
`
export const QuizJSColumn = styled(QuizColumn)`
  grid-column: 3/3;
  grid-row: 2/-1;
  align-items: flex-end;
  padding-bottom: 30px;
  @media ${device.mobileXL}{
    align-items: flex-start;
    padding: 0;
  }
`
export const QuizMenuTitle = styled.h2`
   grid-column: 2/4;
  grid-row: 1/1;
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
@media screen and (max-width: 1023px){
  font-size: 35px;
}
@media ${device.mobileXL}{
  padding-top: 20px;
  font-size: 42px;
  width: 100%;
}
@media screen and (max-width: 500px){
  padding-top: 0px;
    font-size: 37px;
}
@media ${device.mobileL}{
  padding: 31px 0;
  font-size: 34px;
}
@media ${device.mobileM}{
  padding: 22px 0;
  font-size: 31px;
}
@media screen and (max-width: 340px){
  padding: 20px 0;
    font-size: 32px;
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

@media ${onlyOnDesktop}{
 &:hover{
  box-shadow: 21px 21px ${props => props.theme.color.gray};
 }
}
@media ${onlyOnDesktop} and (max-width: 1600px){
  &:hover{
    box-shadow: 19px 19px ${props => props.theme.color.gray};
   }
}
@media ${onlyOnDesktop} and (max-width: 1024px ){
   &:hover{
    box-shadow: 16px 16px ${props => props.theme.color.gray};
   }
}






 @media ${device.desktopS}{
  width: 85%;
  border-radius: 27px;
 }
 @media ${device.laptopM}{
   border-radius: 25px;
   box-shadow: 15px 15px ${props => props.theme.color.gray};
 }
 @media ${device.laptopS}{
  padding: 9px 0;
   border-radius: 20px;
   box-shadow: 13px 13px ${props => props.theme.color.gray};
  
 }
 @media screen and (max-width: 960px){
   width: 91%;
  padding: 21px 0;
   border-radius: 24px;
   box-shadow: 15px 15px ${props => props.theme.color.gray};
 }




 @media screen and (max-width: 831px){
  box-shadow: 12px 12px ${props => props.theme.color.gray};
 }
 @media ${device.tablet}{
  border-radius: 22px;
 }
 @media screen and (max-width: 711px){
  border-radius: 20px;
  padding: 19px 0;
 }
 @media ${device.mobileXL}{
  border-radius: 18px;
  padding: 16px 0;
 }
 @media ${device.mobileL}{
  box-shadow: 10px 10px ${props => props.theme.color.gray};
  border-radius: 15px;
  padding: 13px 0;
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
@media screen and (max-width: 960px){
  font-size: 20px;
}
@media screen and (max-width: 830px){
  font-size: 19px;
}
@media screen and (max-width: 711px){
  font-size: 18px;
}
@media ${device.mobileXL}{
  font-size: 20px;
}
@media screen and (max-width: 500px){
  font-size: 18px;
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
@media screen and (max-width: 960px){
  height: 178px;
}
@media screen and (max-width: 830px){
  height: 158px;
}
@media screen and (max-width: 711px){
  height: 137px;
}
@media ${device.mobileXL}{
  height: 173px;
}
@media screen and (max-width: 500px){
  height: 139px;
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
@media screen and (max-width: 960px){
  font-size: 31px;
}
@media screen and (max-width: 830px){
  font-size: 29px;
}
@media screen and (max-width: 711px){
  font-size: 25px;
}
@media ${device.mobileXL}{
  font-size: 28px;
}
@media screen and (max-width: 500px){
  font-size: 25px;
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
@media screen and (max-width: 960px){
  font-size: 24px;
}
@media screen and (max-width: 830px){
  font-size: 22px;
}
@media screen and (max-width: 711px){
  font-size: 19px;
}
@media ${device.mobileXL}{
  font-size: 22px;
}
@media screen and (max-width: 500px){
  font-size: 20px;
}
`
export const QuizMenuCoinsImg = styled.img`
  height: 1.3em;
`
export const QuizMenuCoinsAmount = styled.strong`
 margin-left: 0.2em;
 font-size: 1.1em;
`
