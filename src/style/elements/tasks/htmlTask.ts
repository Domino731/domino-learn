import styled from "styled-components";
import {
    TaskFooter,
    TaskFooterTasksWrapper, TaskFooterDecoration, TaskIntroductionDecoration
} from "./task";
import {device} from "../../general/breakpoints";
import successfulBg from "../../../images/task_successful_html.svg"
export const HtmlTaskIntroduction = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  max-width: 100%;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const HtmlTaskTarget = styled.div`
  grid-column: 2 / 1;
  grid-row: 2 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
  scroll-margin: 50px 0 0 50px;

  &::-webkit-scrollbar {
    width: 0;
  }
`
export const HtmlTaskSuccessful = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 1 / -1;
  background-size: cover;
  background-image: url(${successfulBg});

  @media ${device.tablet} {
    height: 100%;
  }
`

export const HtmlTaskCodeEditor = styled.div`
  position: relative;
  grid-column: 2 / 2;
  grid-row: 1 / -1;
  max-width: 100%;
  padding-bottom: 53px;
`

export const HtmlTaskResult = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / -1;
  padding: 10px;

  background: ${props => props.theme.color.gray};

  & > div {
    background: #fff;
  }
`


export const HtmlFooterTasksWrapper = styled(TaskFooterTasksWrapper)`
  background-color: #ff595e;
  background-image: linear-gradient(135deg, #ffca3a 25%, transparent 25%), linear-gradient(225deg, #1982c4 25%, transparent 25%), linear-gradient(315deg, #ffca3a 25%, transparent 25%), linear-gradient(45deg, #1982c4 25%, transparent 25%);
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`

//decorations
export const HtmlDecorationIntroduction = styled(TaskIntroductionDecoration)`
  background: repeating-linear-gradient(0deg, ${props => props.theme.color.red} 0px, ${props => props.theme.color.red} 5px, white 5px, white 10px);
  @media (max-width: 650px) {
    display: none;
  }
`

