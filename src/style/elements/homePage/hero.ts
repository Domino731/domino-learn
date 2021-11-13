
import styled from "styled-components";
import { device } from "../../general/breakpoints";
import earth from "../../../images/earth.svg";
export const HeroContainer = styled.div`
height: 910px;
overflow: hidden;
position: relative;
`
export const HeroTitle = styled.h2`
    margin-top: 41px;
    font-size: 63px;
    text-align: center;
    letter-spacing: 0.188rem;
    font-weight: bold;
    //text-shadow: 2px 2px #ff006e;
`
export const HeroAustronautWrapper = styled.div`
position: relative;
`
export const HeroAustronaut = styled.img`
width: 393px;
display: block;
margin: 61px auto;
transform: rotate(35deg);
`
export const HeroMainPlanetGraphic = styled.img`
position: relative;
z-index: 1;
width: 200vw;
transform: translateX(-100vh);
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

export const HeroPlanet1 = styled.img`
position: absolute;
width: 290px;
    top: 174px;
    left: 263px;
`
export const HeroPlanet2 = styled.img`
position: absolute;
width: 345px;
    top: 496px;
    right: 373px;
`
export const HeroPlanet3 = styled.img`
position: absolute;
    width: 254px;
    top: 136px;
    right: 160px;
`
export const HeroPlanet4 = styled.img`
position: absolute;
width: 199px;
    top: 533px;
    left: 128px;
`
export const HeroPlanet5 = styled.img`
position: absolute;
width: 132px;
    top: 529px;
    left: 507px;
`
