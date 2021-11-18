import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  @media ${device.laptopL}{
    min-height: 249px;
  }
  @media ${device.laptopS}{
    min-height: 210px;
  }
  @media screen and (max-width: 568px){
    flex-direction: column;
    min-height: 690px;
  }
`
export const ErrorImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  
  @media ${device.laptopL}{
    width: 229px;
  }
  @media ${device.laptopS}{
    width: 190px;
  }
  @media screen and (max-width: 568px){
    width: 180px;
  }
  @media ${device.mobileM}{
    width: 152px;
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
  a{
    font-size: 20px;
    text-decoration: underline;
  }
  @media ${device.laptopL}{
    height: 229px;
    h1{
      font-size: 56px;
      margin-bottom: 12px;
    }
    a{
      font-size: 16px;
    }
    strong {
    font-size: 18px;
  }
  }
  @media ${device.laptopS}{
    height: 190px;
    h1{
      font-size: 48px;
      margin-bottom: 8px;
    }
    a{
      font-size: 16px;
    }
    strong {
    font-size: 16px;
  }
  }
  @media screen and (max-width: 568px){
    height: auto;
    h1{
      font-size: 51px;
      margin-top: 9px;
      margin-bottom: 3px;
    }
    div {
      margin-top: 21px;
      position: static;
      text-align: end;
    }
    a{
      font-size: 16px;
    }
    strong {
    font-size: 14px;
  }
  }
  @media ${device.mobileM}{
    h1{
      font-size: 41px;
      margin-top: 7px;
    }
    div {
      margin-top: 17px;
      position: static;
      text-align: end;
    }
    a{
      font-size: 14px;
    }
  }
`