import styled from "styled-components";

interface DscReverseProps  {
    reverse: boolean
}

export const DscContainer = styled.section`
  background: rgb(87,7,159);
  background: linear-gradient(90deg, rgba(87,7,159,1) 29%, rgba(114,1,216,1) 71%);
  padding-top: 93px;
  position: relative;
  overflow: hidden;
  &:hover{
    cursor: default;
  }
`
export const DscPlanetColorful = styled.img`
  position: absolute;
  width: 250px;
  height: auto;
  object-fit: cover;
  top: 313px;
  right: 91px;
`

export const DscPlanetJupiter = styled.img`
  position: absolute;
  width: 482px;
  height: auto;
  object-fit: cover;
  top: 817px;
  left: -201px;
`
export const DscPlanetMercury = styled.img`
  position: absolute;
  width: 618px;
  height: auto;
  object-fit: cover;
  bottom: -93px;
  right: -107px;
`
export const DscItemContainer = styled.section<DscReverseProps>`
  display: flex;
 justify-content: ${props => props.reverse ? "flex-end" : "flex-start"};
`
export const DscItem = styled.div<DscReverseProps>`
  z-index: 3;
  display: flex;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  width: 1270px;
  height: 514px;
  padding: 33px;
  margin-bottom: 105px;
  border-radius: ${props => props.reverse ? "100px 0 0 100px" : "0 100px 100px 0"};
  background: white;
  box-shadow: 20px 20px ${props => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    transition: 0.4s;
    box-shadow: ${props => props.reverse ? "40px 30px" : "-20px 30px"} ${props => props.theme.color.yellow};
  }
`
export const DscContent = styled.div`
  width: 360px;
  position: relative;
`
export const DscTitleContainer = styled.div`
  height: 91px;
  display: flex;
  align-items: center;
`
export const DscTitle = styled.h2`
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 4.25rem;
  font-weight: bold;
`
export const DscTitleImg = styled.img`
  width: 70px;
  height: auto;
  object-fit: cover;
`
export const DscDescription = styled.p`
  margin-top: 12px;
  font-size: 1.313rem;
  font-weight: 550;
`

export const DscExemplaryCodeBtn = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 262px;
  height: 52px;
  border: 3px solid ${props => props.theme.color.blue};
  color: ${props => props.theme.color.blue};
  overflow: hidden;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    background: ${props => props.theme.color.blue};
    color: #fff;
    border: none;
  }
`

export const DscFigure = styled.div`

  width: 841px;
  display: flex;
  justify-content: center;
`

export const DscFigureImg = styled.img`
width: 296px;
  height: auto;
  object-fit: cover;
`
export const DscCode = styled.div<DscReverseProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`
export const DscEditorWrapper = styled.div`
  width: 40%;
  height: 100%;
`
export const DscArrow = styled.div<DscReverseProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 120px;
  i{
    transform: rotate( ${props => props.reverse ? "180deg" : "0deg"})
  }
  div{
    color: ${props => props.theme.color.red};
    position: absolute;
    bottom: 0;
    font-size: 61px;
    transition: 0.2s;
    &:hover{
      transition: 0.2s;
      font-size: 72px;
      cursor: pointer;
    }
  }
`
export const DscCodeResultWrapper = styled.div`
  width: 40%;
  height: 100%;
`
export {}