import styled, { keyframes } from "styled-components";
import { device } from "../../general/breakpoints";

export const ChoseTaskContainer = styled.section`
  display: flex;
  height: 600px;
  margin: 50px 0;

  @media ${device.desktopS} {
    height: 493px;
  }
  @media ${device.laptopL} {
    height: 465px;
  }
  @media ${device.laptopM} {
    height: 411px;
    margin: 40px 0;
  }
  @media ${device.laptopSM} {
    height: 395px;
  }
  @media ${device.laptopS}{
    height: 332px;
    margin: 34px 0;
  }
  @media (max-width: 960px) {
    height: 312px;
    margin: 31px 0;
  }
  @media ${device.tablet}{
    height: 367px;
    margin: 39px 0px;
  }
  @media screen and (max-width: 696px){
    height: 339px;
    margin: 33px 0px;
  }
  @media screen and (max-width: 649px){
    height: 285px;
    margin: 23px 0;
  }
  @media screen and (max-width: 364px){
    height: 261px;
    margin: 21px 0;
  }
  @media screen and (max-width: 330px){
    height: 244px;
   margin: 19px 0;
  }
`
export const TasksBoardContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgb(0, 185, 241);
  background: linear-gradient(40deg, rgba(0, 185, 241, 1) 33%, rgba(70, 212, 255, 1) 71%);

  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.mobileL} {
    width: 50%;
  }
`
const an__TasksBoardTitle = keyframes`
  100% {
    transform: translateY(59px);
  }
`
export const TasksBoardPosterContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`
export const TasksBoardTitleWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 59px;
  font-weight: 900;

  @media (max-width: 1774px) {
    font-size: 56px;
  }

  @media ${device.desktopM} {
    font-size: 54px;
  }

  @media ${device.desktopS} {
    font-size: 48px;
  }
  @media ${device.laptopL} {
    font-size: 45px;
  }
  @media ${device.laptopM} {
    font-size: 43px;
  }
  @media ${device.laptopSM} {
    font-size: 34px;
  }
  @media ${device.laptopS} {
    font-size: 32px;
  }
  @media (max-width: 961px) {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media screen and (max-width: 696px) {
    font-size: 28px;
  }
  @media screen and (max-width: 624px){
    font-size: 26px;
  }
  @media screen and (max-width: 588px){
    font-size: 24px;
  }
  @media screen and (max-width: 538px){
    font-size: 22px;
  }
  @media screen and (max-width: 491px){
    font-size: 19px;
  }
  @media ${device.mobileL}{
    font-size: 23px;
  }
  @media screen and (max-width: 412px){
    font-size: 20px;
  }
`
export const TasksBoardTitle1 = styled.h2`
  margin-top: -20px;
  position: absolute;
  -webkit-text-stroke: 1px ${props => props.theme.color.gray};
  color: #fff;
  animation: 1.5s ${an__TasksBoardTitle} ease-in-out infinite alternate;
  z-index: 8;
`
export const TasksBoardTitle2 = styled(TasksBoardTitle1)`
  animation-delay: 0.1s;
  color: #D49C3D;
  z-index: 7;
`
export const TasksBoardTitle3 = styled(TasksBoardTitle1)`
  animation-delay: 0.2s;
  color: #D14B3D;
  z-index: 6;
`
export const TasksBoardTitle4 = styled(TasksBoardTitle1)`
  animation-delay: 0.3s;
  color: #CF52EB;
  z-index: 5;
`
export const TasksBoardTitle5 = styled(TasksBoardTitle1)`
  animation-delay: 0.4s;
  color: #44A3F7;
  z-index: 4;
`
export const TasksBoardTitle6 = styled(TasksBoardTitle1)`
  animation-delay: 0.5s;
  color: #5ACB3C;
  z-index: 3;
`
export const TasksBoardTitle7 = styled(TasksBoardTitle1)`
  animation-delay: 0.6s;
  color: #DEBF40;
  z-index: 2;
`
export const TasksPlanetWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`
const TasksPlanet = styled.img`
  position: absolute;
  width: 488px;
  height: auto;
  object-fit: cover;
  @media ${device.laptopL} {
    height: 381px;
    height: 100%;
  }
  @media ${device.laptopSM} {
    width: 476px;
  }
  @media ${device.laptopS}{
    width: 343px;
  }
`
export const TasksPlanet1 = styled(TasksPlanet)`
  top: -214px;
  left: -114px;
  @media ${device.laptopL} {
    top: -251px;
    left: -187px;
  }
  @media ${device.laptopSM} {
    width: 467px;
    height: auto;
  }
  @media ${device.laptopS}{
    width: 413px;
    top: -261px;
    left: -164px;
  }
  @media (max-width: 961px) {
    height: 220px;
    width: auto;
    top: -76px;
    left: -81px;
  }
`

export const TasksPlanet2 = styled(TasksPlanet)`
  bottom: -214px;
  right: -114px;
  @media ${device.laptopL} {
    bottom: -251px;
    right: -187px;
  }
  @media ${device.laptopS}{
    bottom: -197px;
    right: -147px;
  }
  @media (max-width: 961px) {
    height: 220px;
    width: auto;
    bottom: -76px;
    right: -81px;
  }
`

export const TasksSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 100%;
  @media ${device.tablet} {
    width: 60%;
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    width: 50%;
    align-items: center;
  }
`


export const TasksSelectWrapper = styled.div`
  width: 27%;
  height: 89%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 4px solid ${props => props.theme.color.gray};
  border-radius: 24px;
  box-shadow: 14px 14px ${props => props.theme.color.gray};
  transition: 0.3s;
  &:hover {
    box-shadow: 0 262px ${props => props.theme.color.blue} inset,
    23px 23px ${props => props.theme.color.gray};
    @media ${device.desktopS}{
      box-shadow: 0 208px #00b9f1 inset;
    }
    @media ${device.laptopM}{
      box-shadow: 0 173px #00b9f1 inset;
    }
    @media ${device.laptopS}{
      box-shadow: 0 142px ${props => props.theme.color.blue} inset;
    }
  }

  input {
    border: none;
    appearance: none;
    position: absolute;
    border-radius: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    transition: 0.2s;
  }

  input:checked ~ span {
    font-size: 44px;
    box-shadow: 0 262px ${props => props.theme.color.blue} inset;

    @media ${device.desktopS}{
      box-shadow: 0 208px #00b9f1 inset;
    }
    @media ${device.laptopM}{
      box-shadow: 0 173px #00b9f1 inset;
    }
    @media ${device.laptopSM}{
      box-shadow: 0 170px ${props => props.theme.color.blue} inset;
    }
    @media ${device.laptopS}{
      box-shadow: 0 142px ${props => props.theme.color.blue} inset;
    }
    @media ${device.tablet}{
      border-radius: 17px;
      box-shadow: 0 71px ${props => props.theme.color.blue} inset;
    }
    @media screen and (max-width: 649px){
      border-radius: 15px;
      box-shadow: 0 57px ${props => props.theme.color.blue} inset;
    }
    @media  ${device.mobileL}{
      border-radius: 10px;
      box-shadow: 0 29px ${props => props.theme.color.blue} inset;
    }
    @media screen and (max-width: 354px){
      box-shadow: 0 28px ${props => props.theme.color.blue} inset;
border-radius: 8px;
    }
  }

  @media ${device.desktopS}{
    height: 86%;
  }
  @media ${device.laptopSM} {
    width: 30%;
    box-shadow: 5px 5px ${props => props.theme.color.gray};
    border-radius: 25px;
    height: 95%;
    span {
      border-radius: 23px;
    }

    &:hover {
      box-shadow: 12px 12px ${props => props.theme.color.gray};
    }
  }
  @media (max-width: 1164px) {
      height: 87%;
  }
  @media (max-width: 1023px){
    &:hover{
      box-shadow:none;
    }
  }
  @media screen and (max-width: 834px){
    height: 83%;
  }
  @media ${device.tablet}{
    width: 48%;
    height: 48%;
    flex-grow: 1;
    margin: 4px;
    box-shadow: none;
    border-radius: 17px;
  }
  @media screen and (max-width: 696px){
    margin: 2px;
  }
  @media screen and (max-width: 649px){
    border-radius: 15px;
  }
  @media ${device.mobileL}{
    flex-grow: 0;
    width: 92%;
    height : 30%;
    flex-direction: row;
    justify-content: flex-start;
    border: 3px solid ${props => props.theme.color.gray};
    border-radius: 11px;
  }
  @media screen and (max-width: 364px){
    width: 94%;
    border: 2px solid ${props => props.theme.color.gray};
    border-radius: 8px;
  }
`
export const TasksSelectTitle = styled.div`
  margin-top: 21px;
  display: flex;
  align-items: center;
  font-size: 39px;
  
  strong {
    margin-left: 9px;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media ${device.desktopS}{
    margin-top: 17px;
    font-size: 33px;
    strong {
      margin-left: 6px;
    }
  }
  @media screen and (max-width: 1404px){
    margin-top: 11px;
    font-size: 30px;
    strong {
      margin-left: 6px;
    }
  }
  @media ${device.laptopM}{
    font-size: 28px;
  }
  @media ${device.laptopSM}{
    font-size: 25px;
  }
  @media ${device.laptopS}{
    font-size: 22px;
  }
  @media screen and (max-width: 918px){
    margin-top: 7px;
    font-size: 20px;
  }
  @media screen and (max-width: 834px){
    font-size: 18px;
  }
  @media ${device.tablet}{
    font-size: 22px;
  }
  @media screen and (max-width: 649px){
    font-size: 15px;
  }
  @media screen and (max-width: 624px){
    font-size: 15px;
  }
  @media ${device.mobileL}{
    font-size: 14px;
  }
  @media screen and (max-width: 404px){
    font-size: 13px;
  }
  @media screen and (max-width: 387px){
    font-size: 12px;
  }
  @media screen and (max-width: 373px){
    font-size: 11px;
  }
`
export const TasksSelectFigure = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 10px;
  @media ${device.tablet}{
    height: 108px;
    width: auto;
    margin-top: 0;
  }
  @media screen and (max-width: 649px){
    height: 86px;
  }
  @media ${device.mobileL}{
    height: 64px;
  }
  @media screen and (max-width: 340px){
    height: 57px;
  }
  @media screen and (max-width: 330px){
    height: 53px;
  }
`
export const TasksSelectIcon = styled.img`
  height: 51px;
  object-fit: cover;
  @media ${device.desktopS}{
    height: 47px;
  }
  @media ${device.laptopSM}{
    height: 38px;
  }
  @media ${device.laptopS}{
    height: 31px;
  }
  @media screen and (max-width: 918px){
    height: 28px;
  }
  @media ${device.tablet}{
    height: 38px;
  }
  @media screen and (max-width: 649px){
    height: 25px;
  }
  @media screen and (max-width: 373px){
    height: 22px;
  }
  @media screen and (max-width: 340px){
    height: 21px;
  }
`
export const TasksList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  padding: 14px;
  @media ${device.laptopS}{
    padding: 8px;
  }
  @media ${device.mobileL}{
    padding: 2px;
  }
`

interface props__TasksListItem {
  solved: boolean
}

export const TasksListItem = styled.li<props__TasksListItem>`
  width: 25%;
  height: 100px;
  font-size: 67px;
  padding: 10px;
  transition: 0.1s;

 

  a {
    background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparent};
  border: 5px solid ${props => props.theme.color.gray};
  border-radius: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.gray};
     &:hover {
    transition: 0.1s;
    background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparentBlue};
  }
  }

  @media ${device.desktopS}{
    height: 88px;
    font-size: 56px;
    a{
      border-radius: 10px;
    }
  }
  @media ${device.laptopM}{
    height: 80px;
    font-size: 45px;
    padding: 7px;
    a{
       border: 4px solid ${props => props.theme.color.gray};
      border-radius: 7px;
    }
  }
  @media ${device.laptopSM}{
    height: 69px;
    font-size: 36px;
    a{
       border: 3px solid ${props => props.theme.color.gray};
      border-radius: 5px;
    }
  }

  @media ${device.laptopS}{
    height: 51px;
    font-size: 30px;
    padding: 4px;
    a{
       border: 2px solid ${props => props.theme.color.gray};
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 960px){
    height: 46px;
    font-size: 25px;
  }
  @media ${device.tablet}{
    height: 54px;
    font-size: 31px;
    a{
      border: 3px solid  ${props => props.theme.color.gray};
      border-radius: 8px;
    }
  }
  @media screen and (max-width: 649px){
    height: 46px;
    font-size: 26px;
  }
  @media screen and (max-width: 476px){
    height: 43px;
    font-size: 22px;
  }
  @media ${device.mobileL}{
    height: 40px;
    font-size: 20px;
    a{
      border-radius: 5px;
      border: 3px solid ${props => props.theme.color.gray};
    }
  }
  @media screen and (max-width: 364px){
    a{
      border-radius: 4px;
      border: 2px solid ${props => props.theme.color.gray};
    }
  }
`