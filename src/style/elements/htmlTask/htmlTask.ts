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
  grid-template-rows: repeat(2,1fr);
  height: 100%;
`
export const HtmlTaskIntroduction = styled.div`
background: yellow;
  grid-column: 1 / 1;
`

export const HtmlTaskTarget = styled.div`
background: blue;
  grid-column: 2 / 1 ;
`
export const HtmlTaskCodeEditor = styled.div`
background: aqua;
  grid-column: 2 / 2;
  grid-row: 1 / -1;
`

export const HtmlTaskResult = styled.div`
background: burlywood;
  grid-column: 3 / 3;
  grid-row: 1 / -1;
`
export const HtmlHeader = styled(TaskHeader)`
  background: ${props => props.theme.color.red};
`
export const HtmlFooter = styled(TaskFooter)`
  background: ${props => props.theme.color.red};
`

export const HtmlSwitchButton = styled(TaskFooterSwitchButton)`
  background: ${props => props.theme.color.gray};
  color: ${props => props.theme.color.red};
  border: 2px solid ${props => props.theme.color.red};
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.gray};
    color: ${props => props.theme.color.gray};
    background: ${props => props.theme.color.red};
  }
`
export const HtmlFooterListBtn = styled(TaskFooterListBtn)`
  color: ${props => props.theme.color.gray};
`