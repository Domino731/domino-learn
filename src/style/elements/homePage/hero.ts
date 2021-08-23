import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const HeroContainer = styled.section`
  display: flex;
  height: 900px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

  @media ${device.laptopSM} {
    height: 650px;
  }
  @media ${device.laptopS} {
    height: 425px;
  }
  @media ${device.tablet} {
    height: 250px;
  }
`
export const HeroFigure = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const HeroImg = styled.img`
  width: 430px;
  height: 100%;
  object-fit: contain;
  @media ${device.desktopM} {
    width: 100%;
  }
`
export const HeroIntroduction = styled.div`
  width: 70%;
  height: 100%;
  background: rgb(0, 185, 241);
  background: linear-gradient(40deg, rgba(0, 185, 241, 1) 33%, rgba(70, 212, 255, 1) 71%);
  position: relative;
`
export const HeroTitleH2 = styled.h2`
  margin-top: 76px;
  color: #fff;
  font-size: 5.625rem;
  font-weight: bold;
  text-shadow: 0 3px 3px #000;
  -webkit-text-stroke: 2px ${props => props.theme.color.gray};

  span {
    color: ${props => props.theme.color.gray};
  }

  @media ${device.laptopL} {
    font-size: 80px;
  }
  @media ${device.laptopSM} {
    font-size: 64px;
  }
  @media ${device.laptopS} {
    margin-top: 40px;
    text-shadow: 0 2px 2px #000;
    font-size: 48px;
  }
  @media ${device.tablet} {
    -webkit-text-stroke: 1px ${props => props.theme.color.gray};
    margin-top: 15px;
    font-size: 26px;
    text-shadow: 0 1px 1px #000;
  }
`
export const HeroTitleH3 = styled.h3`
  margin-top: 4px;
  color: #fff;
  font-size: 4.125rem;
  font-weight: bold;
  text-shadow: 0 3px 3px #000;
  -webkit-text-stroke: 2px ${props => props.theme.color.gray};

  span {
    color: ${props => props.theme.color.gray};
  }

  @media ${device.laptopL} {
    font-size: 63px;
  }
  @media ${device.laptopSM} {
    font-size: 52px;
  }
  @media ${device.laptopS} {
    text-shadow: 0 2px 2px #000;
    font-size: 39px;
  }
  @media ${device.tablet} {
    -webkit-text-stroke: 1px ${props => props.theme.color.gray};
    font-size: 21px;
    text-shadow: 0 1px 1px #000;
  }
`
export const HeroIntroductionImg = styled.img`
  position: absolute;
  width: 73%;
  display: block;
  margin: 90px auto 0;
  height: auto;
  object-fit: cover;
  z-index: 4;
  @media ${device.laptopS} {
    margin-top: 30px;
  }
  @media ${device.tablet} {
    margin-top: 15px;
  }
`
export const HeroPlanet = styled.img`
  position: absolute;
  width: 53%;
  height: auto;
  object-fit: cover;
  right: -83px;
  bottom: -45px;
  @media ${device.laptopS} {
    width: 373px;
    right: -65px;
    bottom: -117px;
  }
  @media ${device.tablet} {
    width: 171px;
    right: -21px;
    bottom: -4px;
  }
`