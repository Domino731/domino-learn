import styled from "styled-components";
import {EditorHeaderLink} from "../codeEditor/codeEditor";
import {device} from "../../general/breakpoints";

export const QuizHeader = styled.header`
  background: ${props => props.theme.color.yellow};
  padding: 5px 0;
`
export const QuizHeaderLink = styled(EditorHeaderLink)``

export const QuizMenuWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 53px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: block;
    width: 25%;
  }

  @media ${device.laptopS} {
    flex-wrap: wrap;
    height: auto;
    a {
      width: 267px;
    }
  }

  @media ${device.tablet} {
    align-items: flex-start;
    a {
      height: 33vh;
      margin-bottom: 85px;
    }
  }
`
export const QuizMenuItem = styled.div`
  width: 100%;
  padding: 27px 17px;
  border: 4px solid black;
  border-radius: 38px;
  box-shadow: 18px 18px ${props => props.theme.color.gray},
  0 60px ${props => props.theme.color.blue} inset;
  transition: 0.2s;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 32px 32px ${props => props.theme.color.gray},
    0 53px ${props => props.theme.color.blue} inset;
  }

  @media (max-width: 1640px) {
    box-shadow: 10px 10px ${props => props.theme.color.gray},
    0 52px ${props => props.theme.color.blue} inset;
  }
  @media ${device.laptopS} {
    box-shadow: 5px 5px ${props => props.theme.color.gray},
    0 53px ${props => props.theme.color.blue} inset;
    &:hover {
      box-shadow: 10px 10px ${props => props.theme.color.gray},
      0 53px ${props => props.theme.color.blue} inset;
    }
  }

  @media ${device.tablet} {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px ${props => props.theme.color.gray},
    0 48px ${props => props.theme.color.blue} inset;
    &:hover {
      box-shadow: 10px 10px ${props => props.theme.color.gray},
      0 48px ${props => props.theme.color.blue} inset;
    }

    img {
      height: 100%;
      width: auto;
    }
  }
`
export const QuizMenuCoins = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;

  img {
    width: 57px;
    margin-right: 5px;
  }

  strong {
    font-weight: 900;
    font-size: 1.813rem;
    color: ${props => props.theme.color.gray};
  }

  @media ${device.laptopS} {
    margin-top: 23px;
    margin-bottom: 10px;
  }
`
export const QuizMenuFreepik = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 57px;
    margin-right: 5px;
  }

  @media ${device.laptopS} {
    margin-top: 23px;
    margin-bottom: 10px;
  }
`
