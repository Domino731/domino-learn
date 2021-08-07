import styled from "styled-components";
import {
    TaskFooter,
    TaskFooterListBtn,
    TaskFooterSwitchBar,
    TaskFooterSwitchButton,
    TaskHeader
} from "../../general/generalStyles";

export const HtmlTaskContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`
export const HtmlTaskContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;

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
`

export const HtmlTaskTarget = styled.div`
  grid-column: 2 / 1;
  max-width: 100%;
`
export const HtmlTaskCodeEditor = styled.div`
  position: relative;
  grid-column: 2 / 2;
  grid-row: 1 / -1;
  max-width: 100%;
  padding-bottom: 53px;
`

export const HtmlTaskResult = styled.div`
  background: burlywood;
  grid-column: 3 / 3;
  grid-row: 1 / -1;
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
    color: ${props => props.theme.color.gray};
    background: ${props => props.theme.color.blue};
  }
`
export const HtmlFooterListBtn = styled(TaskFooterListBtn)`
  color: ${props => props.theme.color.gray};
`