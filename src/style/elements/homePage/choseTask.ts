import styled, {keyframes} from "styled-components";

export const ChoseTaskContainer = styled.section`
  display: flex;
  height: 600px;
  margin-bottom: 100px;
`
export const TasksBoardContainer = styled.div`
  width: 30%;
  height: 100%;
  background: ${props => props.theme.color.blue};
  
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