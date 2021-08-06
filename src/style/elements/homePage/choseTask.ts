import styled, {keyframes} from "styled-components";

export const ChoseTaskContainer = styled.section`
  display: flex;
  height: 600px;
  margin-bottom: 50px;
`
export const TasksBoardContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgb(0,185,241);
  background: linear-gradient(40deg, rgba(0,185,241,1) 33%, rgba(70,212,255,1) 71%);

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
`
export const TasksPlanet1 = styled(TasksPlanet)`
  top: -214px;
  left: -114px;
`

export const TasksPlanet2 = styled(TasksPlanet)`
  bottom: -214px;
  right: -114px;
`

export const TasksSelect = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 100%;
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
  &:hover{
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
   &:hover{
     cursor: pointer;
   }
  }
  span{
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    width: 100%;
    height: 100%;
    border-radius: 34px;
  }
  input:checked ~ span {
    font-size: 44px;
    box-shadow: 0 262px ${props => props.theme.color.blue} inset;
  }
`
export const TasksSelectTitle = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  label{
    margin-left: 9px;
    font-size: 2.75rem;
    text-transform: uppercase;
  }
`
export const TasksSelectFigure = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: -10px;
`
export const TasksSelectIcon = styled.img`
  width: 30px;
  height: auto;
  object-fit: cover;
`