import styled from "styled-components";
import { device } from "../../general/breakpoints";
import bg from "../../../images/background_home_pega_dsc.svg";

interface DscReverseProps {
  reverse: boolean
}

export const DscContainer = styled.section`
  /* background: rgb(87, 7, 159);
  background: linear-gradient(90deg, rgba(87, 7, 159, 1) 29%, rgba(114, 1, 216, 1) 71%); */
  background-image: url(${bg});
  background-size: cover;
  padding-top: 93px;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

  @media (max-width: 961px) {
    padding-top: 60px;
  }
`

export const DscCardContainer = styled.section<DscReverseProps>`
  display: flex;
  justify-content: ${props => props.reverse ? "flex-end" : "flex-start"};
`
export const DscCard = styled.div<DscReverseProps>`
  z-index: 3;
  display: flex;
  padding: 33px;
  margin-bottom: 105px;
   margin-left: ${props => !props.reverse ? "187px" : "0"};
  margin-right: ${props => props.reverse ? "187px" : "0"};;
  border-radius: 35px;
  background: white;
  box-shadow: 17px 17px ${props => props.theme.color.gray};
  transition: 0.3s;
  position: relative;
  @media ${device.desktopS}{
  margin-left: ${props => !props.reverse ? "144px" : "0"};
  margin-right: ${props => props.reverse ? "144px" : "0"};
  margin-bottom: 88px;
  border-radius: 32px;
  box-shadow: 15px 15px ${props => props.theme.color.gray};
  }
`

export const DscContent = styled.div`
  width: 360px;
  position: relative;
  @media ${device.mobileL}{
    width: 100%;
  }
`
export const DscTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  @media ${device.desktopS}{
    font-size: 18px;
  }
`
export const DscTitle = styled.h2`
  text-transform: uppercase;
  margin-left: 0.3em;
  font-size: 2.3em;
  font-weight: bold;
  
`
export const DscTitleImg = styled.img`
  width: 3.3em;
  height: auto;
  object-fit: cover;
`
export const DscDescription = styled.p`
  margin-top: 12px;
  font-size: 21px;
  line-height: 25px;
  font-weight: 550;
  text-align: justify;
  @media ${device.desktopS} {
    margin-top: 10px;
    font-size: 19px;
    line-height: 24px;
    font-weight: 550;
  }
`

export const DscExemplaryCodeLink = styled.a`
display: block;
text-align: center;
margin-top: 19px;
  border-radius: 0.3em;
  width: 100%;
  font-size: 23px;
  padding: 0.4em 0;
  background:  #7b1edb;
  color: ${props => props.theme.color.white};
  overflow: hidden;
  transition: 0.2s;
  font-weight: bold;
  &:hover {
    letter-spacing: 0.125rem;
    background: #9c54e6;
  }
  @media ${device.desktopS}{
    font-size: 21px;
  }
`

export const DscFigure = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const DscFigureImg = styled.img`
       margin-left: 120px;
    height: 410px;
  object-fit: cover;
  @media ${device.desktopS} {
   height: 360px;
   margin-left: 101px;
  }
  @media ${device.laptopL} {
    width: 240px;
  }
  @media ${device.laptopSM} {
    width: 281px;
  }
  @media (max-width: 961px) {
    height: 100%;
    width: auto;
  }
  @media ${device.tablet} {
    width: auto;
    height: 340px;
  }
`

interface props__DscEditorWrapper {
  mode: string
}



interface props__DscCodeResultWrapper {
  mode: string
}

export const DscPlanetColorful = styled.img`
  position: absolute;
  width: 250px;
  height: auto;
  object-fit: cover;
  top: 313px;
  right: 91px;

  @media ${device.laptopL} {
    width: 293px;
    top: 316px;
    right: 15px;
  }
  @media ${device.laptopSM} {
    display: none;
  }
`
export const DscPlanetJupiter = styled.img`
  position: absolute;
  width: 482px;
  height: auto;
  object-fit: cover;
  top: 817px;
  left: -201px;
  @media ${device.laptopL} {
    width: 324px;
    top: 828px;
    left: -194px;
  }
  @media ${device.laptopSM} {
    display: none;
  }
`
export const DscPlanetMercury = styled.img`
  position: absolute;
  width: 618px;
  height: auto;
  object-fit: cover;
  bottom: -93px;
  right: -107px;
  @media ${device.laptopL} {
    width: 392px;
  }
  @media ${device.laptopSM} {
    display: none;
  }
`
export { }