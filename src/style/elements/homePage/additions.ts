import styled from "styled-components";

export const AdditionsWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 500px;
  background: ${props => props.theme.color.purple};
`
export const AdditionItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 330px;
  height: 100%;
  padding: 0 30px;
  transition: 0.1s;
  &:hover{
    letter-spacing: 0.125rem;
    transition: 0.1s;
    cursor: pointer;
    background: white;
  }
`
export const AdditionImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
export const AdditionTitle = styled.h2`
  font-size: 2.563rem;
  font-weight: 650;
  margin-top: 1.25rem;
  text-align: center;
  color: ${props => props.theme.color.white}
`