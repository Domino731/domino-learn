import styled from "styled-components";
import {
    TaskFooter,
    TaskFooterListBtn,
    TaskFooterSwitchButton,
    TaskHeader,
    TaskFooterTasksWrapper
} from "../../general/generalStyles";

export const HtmlTaskContainer = styled.div`
  width: 100%;
`
export const HtmlTaskContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  width: 100%;
  overflow: hidden;
  code {
    display: inline-block;
    padding: 0 3px;
    border-radius: 4px;
    background: ${props => props.theme.color.white};
  }
`
export const HtmlTaskIntroduction = styled.div`
  grid-column: 1 / 1;
  max-width: 100%;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
`

export const HtmlTaskTarget = styled.div`
  grid-column: 2 / 1;
  max-width: 100%;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
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
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  & > div{
    background: #fff;
  }
`
export const HtmlHeader = styled(TaskHeader)`
  background: ${props => props.theme.color.blue};
`
export const HtmlFooter = styled(TaskFooter)`
  background: ${props => props.theme.color.blue};
`

export const HtmlSwitchButton = styled(TaskFooterSwitchButton)`
  background: ${props => props.theme.color.gray};
  color: ${props => props.theme.color.blue};
  border: 2px solid ${props => props.theme.color.blue};
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.gray};
    background: ${props => props.theme.color.blue};
    a{
      color: ${props => props.theme.color.gray};
    }
  }
  a{
    color: ${props => props.theme.color.blue};
  }
`
export const HtmlFooterListBtn = styled(TaskFooterListBtn)`
  color: ${props => props.theme.color.gray};
`
export const HtmlFooterTasksWrapper = styled(TaskFooterTasksWrapper)`
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
`
