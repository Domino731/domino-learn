import styled from "styled-components";

export const DscContainer = styled.section`
  background: ${props => props.theme.color.purple};
  padding: 93px 0;
`

export const DscItem = styled.section`
  display: flex;
  width: 1270px;
  height: 514px;
  padding: 33px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background: white;
  box-shadow: 20px 20px ${props => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    transition: 0.4s;
    box-shadow: -20px 30px ${props => props.theme.color.yellow};
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
 border: 3px solid blue;
`
export const DscCodeItem = styled.div`
  width: 472px;
  border: 2px solid red;
`
export const DscCodeTitle = styled.h2`
  font-size: 44px;
  text-align: center;
`
export const DscCodeExample = styled.div`
  width: 841px;
  display: flex;
  justify-content: center;
  img{
    width: 336px;
    object-fit: cover;
    height: auto;
  }
`
export {}