import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const HeroContainer = styled.section`
  display: flex;
  height: 900px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:hover{
    cursor: default;
  }
  @media ${device.laptopSM} {
   height: 650px;
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
  height:  100%;
  background: rgb(0,185,241);
  background: linear-gradient(40deg, rgba(0,185,241,1) 33%, rgba(70,212,255,1) 71%);
  position: relative;
`
export const HeroTitleH2 = styled.h2`
  margin-top: 76px;
  color: #fff;
 font-size: 5.625rem;
  font-weight: bold;
  text-shadow: 0 3px 3px #000;
  -webkit-text-stroke: 2px ${props => props.theme.color.gray};
  span{
    color: ${props => props.theme.color.gray};
    text-shadow: 0 3px 3px #000;
  }
  
  @media ${device.laptopL} {
    font-size: 80px;
  }
  @media ${device.laptopSM} {
    font-size: 64px;
  }
`
export const HeroTitleH3 = styled.h3`
  margin-top: 4px;
  color: #fff;
  font-size: 4.125rem;
  font-weight: bold;
  text-shadow: 0 3px 3px #000;
  -webkit-text-stroke: 2px ${props => props.theme.color.gray};
  span{
    color: ${props => props.theme.color.gray};
    text-shadow: 0 3px 3px #000;
  }
  @media ${device.laptopL} {
    font-size: 63px;
  }
  @media ${device.laptopSM} {
    font-size: 52px;
  }
`
export const HeroIntroductionImg = styled.img`
  position: absolute;
 width: 73%;
  display: block;
  margin: 90px  auto 0;
  height: auto;
  object-fit: cover;
  z-index: 4;
  
`
export const HeroPlanet = styled.img`
  position: absolute;
  width: 53%;
  height: auto;
  object-fit: cover;
  right: -83px;
  bottom: -45px;
`