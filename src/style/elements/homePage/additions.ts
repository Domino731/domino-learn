import styled from "styled-components";
import {device} from "../../general/breakpoints";
import bg from "../../../images/background_home_pega_dsc.svg";
export const AdditionsWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 421px;
  background-image: url(${bg});
  background-size: cover;
  @media ${device.desktopS}{
    height: 378px;
  }
  @media ${device.laptopL} {
    height: 360px;
  }
  @media ${device.laptopM} {
    height: 323px;
  }
  @media (max-width: 961px) {
    height: 300px;
  }

  @media ${device.tablet} {
    height: 240px;
  }
  @media ${device.mobileM} {
    height: 180px;
  }
`
export const AdditionItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 330px;
  height: 100%;
  padding: 0 30px;
  transition: 0.1s;

  &:hover {
    letter-spacing: 0.125rem;
    transition: 0.1s;
    cursor: pointer;
    background: white;
  }
  @media ${device.desktopS}{
    width: 295px;
  }
  @media ${device.laptopL} {
    width: 271px;
  }
  @media ${device.laptopM}{
    width: 236px;
  }
  @media (max-width: 961px) {
    width: 240px;
  }
  @media ${device.tablet} {
    width: 190px;
  }
  @media ${device.mobileM} {
    width: 110px;
    padding: 0 10px;
  }
`
export const AdditionImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
export const AdditionTitle = styled.h2`
  font-size: 2.563rem;
  font-weight: 650;
  margin-top: 0.4em;
  text-align: center;
  color: ${props => props.theme.color.white};
  @media ${device.desktopS}{
    font-size: 38px;
  }
  @media ${device.laptopL} {
    font-size: 34px;
  }
  @media ${device.laptopM} {
    font-size: 28px;
  }
  @media ${device.laptopSM} {
    font-size: 2.214rem;
  }
  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
`