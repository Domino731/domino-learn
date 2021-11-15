
import styled from "styled-components";
import { device } from "../../general/breakpoints";
import spaceBg from "../../../images/hero_background.jpg";
export const HeroContainer = styled.div`
height: 910px;
overflow: hidden;
position: relative;
background-image: url(${spaceBg});
background-size: cover;
@media ${device.desktopS}{
    height: 849px;
 }
 @media ${device.laptopM}{
     height: 760px;
 }
 @media ${device.laptopSM}{
   height: 700px;
 }
 @media ${device.laptopS}{
   height: 600px;
 }
 @media screen and (max-width: 960px){
   height: 541px;
 }
 @media screen and (max-width: 648px){
  height: 521px;
  }
  @media ${device.mobileXL}{
    height: 511px;
  }
  @media screen and (max-width: 550px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    min-height: 697px;
  }
  @media ${device.mobileL}{
    min-height: 632px;
  }
`
export const HeroTitle = styled.h2`
    margin-top: 41px;
    font-size: 63px;
    text-align: center;
    letter-spacing: 0.188rem;
    font-weight: bold;
    color: ${props => props.theme.color.white};
    @media ${device.desktopS}{
    margin-top: 34px;
    font-size: 46px;
    }
    @media ${device.laptopL}{
    margin-top: 32px;
    font-size: 44px;
    }
    @media ${device.laptopM} {
    font-size: 39px;
  }
  @media ${device.laptopSM} {
    font-size: 37px;
  }
  @media ${device.laptopSM} {
    font-size: 33px;
  }
  @media screen and (max-width: 960px){
    margin-top: 31px;
    font-size: 27px;
  }
  @media ${device.tablet}{
    margin-top: 41px;
    font-size: 31px;
  }
  @media screen and (max-width: 648px){
    font-size: 25px;
  }
  @media ${device.mobileXL}{
    font-size: 24px;
  }
  @media screen and (max-width: 550px){
    font-size: 33px;
  }
  @media ${device.mobileL}{
    font-size: 26px;
  }
`
export const HeroAustronautWrapper = styled.div`
position: relative;
`
export const HeroAustronaut = styled.img`
width: 444px;
display: block;
margin: 61px auto;
transform: rotate(35deg);
@media ${device.desktopS}{
    width: 350px;
}
@media ${device.laptopM}{
    width: 286px;
    margin: 51px auto;
}
@media ${device.laptopS}{
  width: 215px;
  margin: 39px auto;
}
@media screen and (max-width: 960px){
  width: 167px;
  margin: 31px auto;
}
@media ${device.tablet}{
  width: 220px;
  margin: 43px auto;
}
@media screen and (max-width: 648px){
  width: 183px;
}
@media screen and (max-width: 550px){
  width: 285px;
}
@media ${device.mobileL}{
  width: 225px;
  }
`
export const HeroMainPlanetGraphic = styled.img`
position: absolute;
bottom: 0;
z-index: 1;
width: 100%;
height: 100%;
object-fit: cover;
`
export const HeroHTMLCometWrapper = styled.div`
position: absolute;
bottom: 0;
left: 347px;
`
export const HeroHTMLComet = styled.div`
margin: 0 auto;
width: 50px;
height: 422px;
background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const HeroHTMLGraphicWrapper = styled.div`
position: relative;
z-index: 1;
width: 100%;
margin: 0 auto;
background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 8px;
border-radius: 50px;
margin-bottom: -10px;
img{
  width: 74px;
}
`
