import styled from "styled-components";
import {device} from "../../general/breakpoints";

interface DscReverseProps {
    reverse: boolean
}

export const DscContainer = styled.section`
  background: rgb(87, 7, 159);
  background: linear-gradient(90deg, rgba(87, 7, 159, 1) 29%, rgba(114, 1, 216, 1) 71%);
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

export const DscItemContainer = styled.section<DscReverseProps>`
  display: flex;
  justify-content: ${props => props.reverse ? "flex-end" : "flex-start"};
`
export const DscItem = styled.div<DscReverseProps>`
  z-index: 3;
  display: flex;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  width: 1270px;
  height: 514px;
  padding: 33px;
  margin-bottom: 105px;
  border-radius: ${props => props.reverse ? "100px 0 0 100px" : "0 100px 100px 0"};
  background: white;
  box-shadow: 20px 20px ${props => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    transition: 0.4s;
    box-shadow: ${props => props.reverse ? "40px 30px" : "-20px 30px"} ${props => props.theme.color.yellow};
  }

  @media ${device.desktopS} {
    height: 475px;
  }

  @media ${device.laptopL} {
    height: 440px;
    width: 1184px;
  }
  @media ${device.laptopSM} {
    width: 900px;
    height: 507px;
  }
  @media (max-width: 961px) {
    width: 100%;
    height: 400px;
    border-radius: 0;
    box-shadow: 0 13px ${props => props.theme.color.gray};
    padding: 20px;
    margin-bottom: 85px;
  }
  @media ${device.tablet} {
    align-items: center;
    flex-direction: column;
    height: 540px;
  }
  @media ${device.tablet} {
    padding: 10px;
    height: auto;
  }
`
export const DscContent = styled.div`
  width: 360px;
  position: relative;
`
export const DscTitleContainer = styled.div`
  height: 91px;
  display: flex;
  align-items: center;
`
export const DscTitle = styled.h2`
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 4.25rem;
  font-weight: bold;
  @media (max-width: 961px) {
    font-size: 3.333rem;
  }
`
export const DscTitleImg = styled.img`
  width: 70px;
  height: auto;
  object-fit: cover;
  @media (max-width: 961px) {
    width: 44px;
  }
`
export const DscDescription = styled.p`
  margin-top: 12px;
  font-size: 1.313rem;
  font-weight: 550;
  @media (max-width: 961px) {
    margin-top: 0;
  }
`

export const DscExemplaryCodeBtn = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 262px;
  height: 52px;
  border: 3px solid ${props => props.theme.color.blue};
  color: ${props => props.theme.color.blue};
  overflow: hidden;
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    background: ${props => props.theme.color.blue};
    color: #fff;
    border: none;
  }

  @media ${device.laptopSM} {
    width: 200px;
    height: 50px;
  }
  @media (max-width: 961px) {
    width: 178px;
    height: 39px;

    @media ${device.tablet} {
      right: -1px;
      padding: 2px 0;
      top: 30px;
      width: 149px;
      height: 31px;
    }
`

export const DscFigure = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    // margin-top: 52px;
  }
`

export const DscFigureImg = styled.img`
  width: 296px;
  height: auto;
  object-fit: cover;

  @media ${device.desktopS} {
    width: 270px;
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
export const DscCode = styled.div<DscReverseProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

  @media ${device.tablet} {
    flex-direction: column;
  }
`

interface props__DscEditorWrapper {
    mode: string
}

export const DscEditorWrapper = styled.div<props__DscEditorWrapper>`
  width: 40%;
  height: 100%;

  @media ${device.tablet} {
    width: 100%;
    height: ${(props) => {
      switch (props.mode) {
        case "Html":
          return "460px";
        case "JS":
          return "290px";
        case "CSS":
          return "1040px";
        default:
          return "300px"
      }
    }
    }
`
export const DscArrow = styled.div<DscReverseProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 120px;

  i {
    transform: rotate(${props => props.reverse ? "180deg" : "0deg"})
  }

  div {
    color: ${props => props.theme.color.red};
    position: absolute;
    bottom: 0;
    font-size: 61px;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      font-size: 72px;
      cursor: pointer;
    }
  }

  @media (max-width: 961px) {
    font-size: 100px;
    div {
      font-size: 50px;
    }
  }

  @media ${device.tablet} {
    font-size: 0;
    height: 100px;
    width: 100%;
    div {
      margin: 0 auto;
      font-size: 50px;
    }
  }
`

interface props__DscCodeResultWrapper {
    mode: string
}

export const DscCodeResultWrapper = styled.div<props__DscCodeResultWrapper>`
  width: 40%;
  height: 100%;
  @media ${device.tablet} {
    width: 100%;
    height: ${(props) => {
      switch (props.mode) {
        case "Html":
          return "650px";
        case "JS":
          return "290px";
        case "CSS":
          return "650px";
        default:
          return "150px"
      }
    }
    }
  }
`
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
export {}