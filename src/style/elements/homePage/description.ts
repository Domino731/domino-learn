import styled from "styled-components";

interface DscReverseProps  {
    reverse: boolean
}

export const DscContainer = styled.section`
  background: ${props => props.theme.color.purple};
  padding-top: 93px;
  position: relative;
  overflow: hidden;
`
export const DscPlanetColorful = styled.img`
  position: absolute;
  width: 799px;
  height: auto;
  object-fit: cover;
  top: -535px;
  right: -205px;
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

  i {
    transform: translateX(9px);
    display: none;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 52px;
    background: ${props => props.theme.color.blue};
    color: #fff;
  }

  &:hover {

    i {
      display: flex;
    }
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
export const DscCodeContainer = styled.div`
width: 100%;
`
export const DscCodeItem = styled.div`
  width: 472px;
`
export const DscCodeTitle = styled.h2`
  font-size: 44px;
  text-align: center;
`
export const DscCodeExample = styled.div<DscReverseProps>`
  width: 841px;
  display: flex;
  justify-content: center;
  img{
    width: 420px;
    height: 448px;
    object-fit: cover;
    margin-left: ${props => props.reverse ? "101px" : "0"};
  }
`
export {}