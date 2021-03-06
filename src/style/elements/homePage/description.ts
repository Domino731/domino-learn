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
  padding-top: 11px;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

  @media (max-width: 961px) {
    padding-top: 6px;
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
  @media ${device.laptopL}{
    padding: 27px;
  margin-left: ${props => !props.reverse ? "111px" : "0"};
  margin-right: ${props => props.reverse ? "111px" : "0"};
  margin-bottom: 86px;
  border-radius: 29px;
  box-shadow: 13px 13px ${props => props.theme.color.gray};
  }
  @media ${device.laptopM}{
    padding: 23px;
  margin-left: ${props => !props.reverse ? "72px" : "0"};
  margin-right: ${props => props.reverse ? "72px" : "0"};
  margin-bottom: 68px;
  border-radius: 23px;
  box-shadow: 13px 13px ${props => props.theme.color.gray};
  }
  @media ${device.laptopSM}{
    padding: 19px;
  margin-left: ${props => !props.reverse ? "52px" : "0"};
  margin-right: ${props => props.reverse ? "52px" : "0"};
  margin-bottom: 58px;
  border-radius: 19px;
  box-shadow: 10px 10px ${props => props.theme.color.gray};
  }
  @media ${device.laptopS}{
    padding: 15px;
  margin-left: ${props => !props.reverse ? "41px" : "0"};
  margin-right: ${props => props.reverse ? "41px" : "0"};
  border-radius: 16px;
  box-shadow: 9px 9px ${props => props.theme.color.gray};
  }
  @media screen and (max-width: 960px){
    margin-left: ${props => !props.reverse ? "38px" : "0"};
  margin-right: ${props => props.reverse ? "38px" : "0"};
  }
  @media ${device.tablet}{
  margin-left: ${props => !props.reverse ? "22px" : "0"};
  margin-right: ${props => props.reverse ? "22px" : "0"};
  border-radius: 25px;
  box-shadow: 13px 13px ${props => props.theme.color.gray};
  }
  @media screen and (max-width:737px){
  margin-left: ${props => !props.reverse ? "15px" : "0"};
  margin-right: ${props => props.reverse ? "15px" : "0"};
  border-radius: 24px;
  box-shadow: 11px 11px ${props => props.theme.color.gray};
  }
  @media screen and (max-width: 648px){
    margin-left: ${props => !props.reverse ? "12px" : "0"};
  margin-right: ${props => props.reverse ? "12px" : "0"};
  box-shadow: 9px 9px ${props => props.theme.color.gray};
    padding: 9px;
    border-radius: 17px;
  }
  @media ${device.mobileXL}{
  margin-left: auto;
  margin-right: auto;
  border-radius: 19px;
  box-shadow: 11px 11px ${props => props.theme.color.gray};
  }
  @media  ${device.mobileL}{
  box-shadow: 9px 9px ${props => props.theme.color.gray};
  border-radius: 17px;
  flex-direction: column-reverse;
  width: 90%;
  padding: 20px 12px;
  }
  @media ${device.mobileM}{
    border-radius: 15px;
  }
  @media screen and (max-width: 330px){
    padding: 17px 9px;
    border-radius: 13px;
    box-shadow: 8px 8px ${props => props.theme.color.gray};
    margin-bottom: 51px;
  }
`

export const DscContent = styled.div`
  width: 360px;
  position: relative;
  @media ${device.laptopS}{
    width: 300px;
  }
  @media ${device.mobileXL}{
    width: 286px;
  }
  @media screen and (max-width: 500px){
    width: 213px
  }
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
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopM}{
    font-size: 16px;
  }
  @media ${device.laptopSM}{
    font-size: 14px;
  }
  @media ${device.laptopS}{
    font-size: 12px;
  }
  @media screen and (max-width: 960px){
    font-size: 10px
  }
  @media ${device.tablet}{
    font-size: 12px;
  }
  @media screen and (max-width:737px){
    font-size: 11px;
  }
  @media screen and (max-width: 648px){
    font-size: 10px;
  }
  @media ${device.mobileXL}{
    font-size: 9px;
  }
  @media ${device.mobileL}{
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 330px){
    font-size: 9px;
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
  line-height: 1.3em;
  font-weight: 550;
  text-align: justify;
  @media ${device.desktopS} {
    margin-top: 10px;
    font-size: 19px;
  }
  @media ${device.laptopL} {
    margin-top: 8px;
    font-size: 17px;
  }
  @media ${device.laptopSM}{
    margin-top: 6px;
    font-size: 15px;
  }
  @media ${device.laptopS}{
    font-size: 14px;
  }
  @media screen and (max-width: 960px){
    font-size: 13px;
  }
  @media ${device.tablet}{
    font-size: 16px;
  }
  @media screen and (max-width:737px){
    font-size: 15px;
  }
  @media screen and (max-width: 648px){
    font-size: 14px;
  }
  @media ${device.mobileXL}{
    font-size: 13px;
  }
  @media ${device.mobileL}{
    font-size: 15px;
  }
  @media ${device.mobileM}{
    font-size: 14px;
  }
  @media screen and (max-width: 330px){
    font-size: 13px;
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
  @media ${device.laptopL}{
    font-size: 20px;
    margin-top: 17px;
  }
  @media ${device.laptopM}{
    font-size: 19px;
    margin-top: 16px;
  }
  @media ${device.laptopSM}{
    margin-top: 15px;
    font-size: 17px;
  }
  @media ${device.laptopS}{
    margin-top: 12px;
    font-size: 15px;
  }
  @media screen and (max-width: 960px){
    margin-top: 10px;
    font-size: 14px;
  }
  @media ${device.tablet}{
    margin-top: 14px;
    font-size: 19px;
  }
  @media screen and (max-width: 648px){
    margin-top: 12px;
    font-size: 18px;
  }
  @media ${device.mobileXL}{
    margin-top: 10px;
    font-size: 16px;
  }
  @media ${device.mobileL}{
    margin-top: 12px;
    font-size: 18px;
  }
  @media ${device.mobileM}{
    margin-top: 10px;
    font-size: 17px;
  }
  @media screen and (max-width: 330px){
    margin-top: 7px;
    font-size: 16px;
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
    height: 347px;
   margin-left: 89px;
  }
  @media ${device.laptopM}{
    height: 299px;
    margin-left: 79px;
  }
  @media ${device.laptopSM} {
    height: 242px;
    margin-left: 68px;
  }
  @media (max-width: 960px) {
    height: 193px;
    margin-left: 46px;
  }
  @media ${device.tablet}{
    height: 221px;
    margin-left: 26px;
  }
  @media screen and (max-width:737px){
    height: 187px;
    margin-left: 15px;
  }
  @media screen and (max-width: 648px){
    height: 162px;
  }
  @media screen and (max-width: 445px){
    height: 151px;
    margin-left: 12px;
  }
  @media ${device.mobileL}{
    height: 171px;
    display: block;
    margin: 0 auto 14px;
  }
  @media screen and (max-width: 330px){
    height: 154px;
    display: block;
    margin: 0 auto 12px;
  }
`

export { }