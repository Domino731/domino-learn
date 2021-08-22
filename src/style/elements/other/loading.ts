import styled, {keyframes} from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 39px;
  }
`
export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  height: 350px;
`
const an__LoadingRadiusRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`
export const LoadingRadius = styled.div`
  transform: translate(-50%. -50%);
  position: absolute;
  border-radius: 50%;
  border-left: 7px solid;
  border-right: 7px solid;
  border-top: 7px solid transparent !important;
  border-bottom: 7px solid transparent !important;
  animation: 2s ${an__LoadingRadiusRotate} infinite;
`
export const LoadingRadius1 = styled(LoadingRadius)`
  width: 264px;
  height: 264px;
  border-color: ${props => props.theme.color.blue}
`
export const LoadingRadius2 = styled(LoadingRadius)`
  width: 228px;
  height: 228px;
  border-color: ${props => props.theme.color.yellow};
  animation-delay: 0.2s;
`
export const LoadingRadius3 = styled(LoadingRadius)`
  width: 188px;
  height: 188px;
  border-color: ${props => props.theme.color.purple};
  animation-delay: 0.4s;
`
export const LoadingRadius4 = styled(LoadingRadius)`
  width: 146px;
  height: 146px;
  border-color: ${props => props.theme.color.red};
  animation-delay: 0.6s;
`
export const LoadingAstronaut = styled.img`
  position: absolute;
  width: 82px;
  height: auto;
  object-fit: cover;
`