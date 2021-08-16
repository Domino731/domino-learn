import styled from "styled-components";
import {
    TaskFooter,
    TaskFooterListBtn,
    TaskFooterSwitchButton,
    TaskHeader,
    TaskFooterTasksWrapper, TaskFooterDecoration
} from "./task";

export const HtmlTaskContainer = styled.div`
  width: 100%;

  code {
    display: inline-block;
    padding: 0 3px;
    border-radius: 4px;
    background: ${props => props.theme.color.white};
  }
`
export const HtmlTaskIntroduction = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  max-width: 100%;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
    background: ${props => props.theme.color.gray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${props => props.theme.color.blue};
  }
`

export const HtmlTaskTarget = styled.div`
  grid-column: 2 / 1;
  grid-row: 2 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
    background: ${props => props.theme.color.gray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${props => props.theme.color.blue};
  }
`
export const HtmlTaskSuccessful = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 1 / -1;
  background-color: #ff595e;
  background-image: linear-gradient(135deg, #ffca3a 25%, transparent 25%), linear-gradient(225deg, #1982c4 25%, transparent 25%), linear-gradient(315deg, #ffca3a 25%, transparent 25%), linear-gradient(45deg, #1982c4 25%, transparent 25%);
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
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
export const HtmlHeader = styled(TaskHeader)`
  background: ${props => props.theme.color.blue};
`
export const HtmlFooter = styled(TaskFooter)`
  background: #ff595e;
`

export const HtmlFooterListBtn = styled(TaskFooterListBtn)`
  color: ${props => props.theme.color.gray};
`
export const HtmlFooterTasksWrapper = styled(TaskFooterTasksWrapper)`
  background-color: #ff595e;
  background-image: linear-gradient(135deg, #ffca3a 25%, transparent 25%), linear-gradient(225deg, #1982c4 25%, transparent 25%), linear-gradient(315deg, #ffca3a 25%, transparent 25%), linear-gradient(45deg, #1982c4 25%, transparent 25%);
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`

//decorations
export const HtmlDecorationIntroduction = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  z-index: -1;
  width: 43%;
  height: 74px;
  background: repeating-linear-gradient(0deg, ${props => props.theme.color.red} 0px, ${props => props.theme.color.red} 5px, white 5px, white 10px);
`
export const HtmlDecorationFooter = styled(TaskFooterDecoration)`
  background: repeating-linear-gradient(0deg, #ff595e 0px,
  #ff595e 5px, #1982c4 5px, #1982c4 10px);
`
