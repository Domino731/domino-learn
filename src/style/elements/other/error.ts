import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ErrorImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`
export const ErrorText = styled.div`
  height: 300px;
  margin-left: 20px;
  position: relative;
  h1{
    font-size: 68px;
    font-weight: bold;
    margin-bottom: 16px;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.red};
  }
  strong{
    font-size: 19px;
    font-weight: 700;
  }
  div{
    position: absolute;
    bottom: 0;
  }
`