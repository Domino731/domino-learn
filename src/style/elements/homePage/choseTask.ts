import styled, {keyframes} from "styled-components";
import {device} from "../../general/breakpoints";

export const ChoseTaskContainer = styled.section`
  display: flex;
  height: 600px;
  margin-bottom: 50px;
  margin-top: 50px;

  @media ${device.desktopS} {
    height: 493px;
  }
  @media ${device.laptopL} {
    height: 465px;
  }
  @media ${device.laptopM} {
    height: 440px;
  }
  @media ${device.laptopSM} {
    height: 395px;
  }
  @media (max-width: 961px) {
    height: 300px;
  }
`
export const TasksBoardContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgb(0, 185, 241);
  background: linear-gradient(40deg, rgba(0, 185, 241, 1) 33%, rgba(70, 212, 255, 1) 71%);

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
    height: 422px;
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
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
`


export const TasksSelectWrapper = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 4px solid ${props => props.theme.color.black};
  border-radius: 34px;
  box-shadow: 8px 8px ${props => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 262px ${props => props.theme.color.blue} inset,
    23px 23px ${props => props.theme.color.gray};
  }

  input {
    appearance: none;
    position: absolute;
    border-radius: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

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
    border-radius: 32px;
  }

  input:checked ~ span {
    font-size: 44px;
    box-shadow: 0 262px ${props => props.theme.color.blue} inset;
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

    input:checked ~ span {
      box-shadow: 0 170px ${props => props.theme.color.blue} inset;
    }
  }
  @media (max-width: 961px) {
    height: 90%;
    box-shadow: 3px 3px ${props => props.theme.color.gray};
    &:hover {
      box-shadow: 7px 7px ${props => props.theme.color.gray};
    }

    input:checked ~ span {
      box-shadow: 0 130px ${props => props.theme.color.blue} inset;
    }
  }
  @media ${device.tablet} {
    width: 180px;
    flex-grow: 1;
    height: 47%;
    flex-direction: row;
  }
  @media ${device.tablet} {
    border-radius: 15px;
    box-shadow: none;
    border: 3px solid ${props => props.theme.color.black};
    span {
      border-radius: 10px;
    }

    &:hover {
      box-shadow: none;
    }

    input:checked ~ span {
      box-shadow: 0 50px ${props => props.theme.color.blue} inset;
    }
  }
`
export const TasksSelectTitle = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 2.75rem;

  strong {
    margin-left: 9px;
    text-transform: uppercase;
  }

  @media (max-width: 961px) {
    font-size: 2.083rem;
  }
  @media ${device.tablet} {
    strong {
      font-size: 0;
    }
  }
`
export const TasksSelectFigure = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 10px;
  @media ${device.laptopSM} {
    margin-top: 25px;
    height: 290px;
    object-fit: contain;
  }
  @media (max-width: 961px) {
    height: 204px;
    width: auto;
    margin-top: 0;
  }
  @media ${device.tablet} {
    height: 100%;
  }

`
export const TasksSelectIcon = styled.img`
  width: 30px;
  height: auto;
  object-fit: cover;
  @media (max-width: 961px) {
    width: 25px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    width: 60px;
  }
`
export const TasksList = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  padding: 14px;
`

interface props__TasksListItem {
    solved: boolean
}

export const TasksListItem = styled.div<props__TasksListItem>`
  width: 100px;
  height: 100px;
  font-size: 67px;
  background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparent};
  margin: 10px 10px;
  border: 5px solid ${props => props.theme.color.gray};
  border-radius: 14px;

  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparentBlue};
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.gray}
  }

  @media ${device.laptopL} {
    width: 87px;
    height: 87px;
    border: 4px solid ${props => props.theme.color.gray};
  }
  @media ${device.laptopSM} {
    font-size: 48px;
    height: 70px;
    width: 70px;
  }
  @media (max-width: 961px) {
    border-radius: 10px;
    height: 50px;
    margin: 5px;
    width: 50px;
    font-size: 30px ;
  }

  @media ${device.tablet} {
    border: 3px solid ${props => props.theme.color.gray};
    border-radius: 7px;
    height: 43px;
    margin: 3px;
    width: 43px;
    font-size: 30px ;
  }
`