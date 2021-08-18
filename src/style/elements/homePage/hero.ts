import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  height: 860px;
`
export const HeroFigure = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const HeroImg = styled.img`
  margin-top: 83px;
  width: 430px;
  height: auto;
  object-fit: cover;
`
export const HeroIntroduction = styled.div`
  width: 70%;
  height: 100%;
  background: rgb(0,185,241);
  background: linear-gradient(40deg, rgba(0,185,241,1) 33%, rgba(70,212,255,1) 71%);
  position: relative;
  overflow: hidden;
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
`
export const HeroIntroductionImg = styled.img`
  position: absolute;
 width: 950px;
  display: block;
  margin: 90px  auto 0;
  height: auto;
  object-fit: cover;
  z-index: 4;
`
export const HeroPlanet = styled.img`
  position: absolute;
  width: 799px;
  height: auto;
  object-fit: cover;
  right: -205px;
  bottom: -265px;
`