import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const NavContainer = styled.nav`
  background: ${props => props.theme.color.blue};
  display: flex;
  height: 57px;
  border-bottom: 3px solid ${props => props.theme.color.gray};
  @media ${device.desktopS} {
    height: 51px;
  }
  @media ${device.laptopL} {
    height: 48px;
  }
  @media ${device.laptopM} {
    height: 43px;
  }
  @media ${device.laptopSM} {
    height: 41px;
  }
  @media ${device.laptopS} {
    border-bottom: 2px solid ${props => props.theme.color.gray};
    height: 34px;
  }
  @media ${device.tablet} {
    height: 40px;
  }
  @media ${device.mobileL} {
    height: 35px;
  }
  
`
export const NavTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 50px;
  letter-spacing: 0.125rem;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  &:hover {
    cursor: default;
  }
  @media ${device.desktopS}{
     font-size: 41px;
  }
  @media ${device.laptopL}{
    font-size: 39px;
  }
  @media ${device.laptopM} {
    font-size: 35px;
  }
  @media ${device.laptopSM} {
    font-size: 32px;
  }
  @media ${device.laptopS} {
    font-size: 29px;
  }
`
export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  height: 100%;
  padding-right: 33px;
  @media ${device.laptopSM} {
    padding-right: 20px;
  }
  @media ${device.laptopS} {
    padding-right: 12px;
  }
  @media ${device.tablet} {
    padding-right: 5px;
  }
`

export const NavListItem = styled.li`
  font-weight: bold;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:  29px;
  margin-right: 31px;
  position: relative;
  overflow: hidden;
  transition: 1s;

  a {
    color: ${props => props.theme.color.gray};
  }

  &:after, &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0.313rem;
    background: ${props => props.theme.color.red};
    transition: 0.6s;
  }

  &:after {
    left: 50%;
  }

  &:before {
    right: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:after, &:hover:before {
    width: 100%;
  }

  @media ${device.desktopS}{
     font-size: 24px;
     margin-right: 21px;
  }
  @media ${device.laptopL}{
    font-size: 22px;
    margin-right: 19px;
  }
  @media ${device.laptopM} {
    font-size: 19px;
    margin-right: 19px;
  }
  @media ${device.laptopSM} {
    font-size: 18px;
    margin-right: 13px;
  }
  @media ${device.laptopSM} {
    font-size: 17px;
    margin-right: 10px;
  }
`
export const NavWave = styled.div`

position: absolute;
z-index: 1;
    top: 57px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg{
      position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 95px;
    }
    path{
      fill: #00B9F1;
    }

    @media ${device.desktopS}{
     top: 51px;
   }
   @media ${device.laptopL}{
     top: 48px;
   }
   @media ${device.laptopM} {
    top: 43px;
  }
  @media ${device.laptopSM} {
    top: 41px;
  }
  @media ${device.laptopS} {
    top: 34px;
  }
`
export {}