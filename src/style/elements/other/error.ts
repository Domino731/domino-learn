import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px){
    justify-content: flex-start;
   flex-direction: column;
  }
`
export const ErrorImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  
  @media ${device.laptopS} {
    width: 200px;
  }
  @media (max-width: 650px){
    margin-top: 40px;
  }
`
export const ErrorText = styled.div`
  height: 300px;
  margin-left: 20px;
  position: relative;

  h1 {
    font-size: 68px;
    font-weight: bold;
    margin-bottom: 16px;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.red};
  }

  strong {
    font-size: 19px;
    font-weight: 700;
  }

  div {
    position: absolute;
    bottom: 0;
  }

  @media ${device.laptopS} {
    height: 200px;
    h1{
      font-size: 50px
    }
    strong{
      font-size: 14px;
    }
  }
  
  @media (max-width: 650px){
    height: 120px;
  }
`