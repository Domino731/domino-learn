import styled from "styled-components";
import {
    TaskFooter,
    TaskFooterDecoration,
    TaskFooterSwitchBar,
    TaskFooterTasksWrapper, TaskIntroductionDecoration,
} from "./task";


export const CssIntroduction = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 2;
  max-width: 100%;
  position: relative;
  overflow: auto;
`
export const CssTarget = styled.div`
  grid-column: 3 / 3;
  grid-row: 2 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
`

export const CssCodeEditorWrapper = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
`

export const CssResult = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
  padding: 10px;
  background: ${props => props.theme.color.gray};
  
  & > div {
    background: #fff;
  }
`
export const CssTaskSuccessful = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 3 / 3;
  grid-row: 1 / -1;
  background-color: #00f5d4;
  background-image: linear-gradient(
          135deg
          ,#f15bb5 25%,transparent 25%), linear-gradient(
          225deg
          ,#00bbf9 25%,transparent 25%), linear-gradient(
          315deg
          ,#f15bb5 25%,transparent 25%), linear-gradient(
          45deg
          ,#00bbf9 25%,transparent 25%);
  background-position: -30px 0,-30px 0,0 0,0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`

export const CssFooter = styled(TaskFooter)`
  background: #00f5d4;
`
export const CssFooterSwitchBar = styled(TaskFooterSwitchBar)`
 justify-content: flex-start;
`
export const CssFooterTasksWrapper = styled(TaskFooterTasksWrapper)`
  background-color: #00f5d4;
  background-image: linear-gradient(
          135deg
          ,#f15bb5 25%,transparent 25%), linear-gradient(
          225deg
          ,#00bbf9 25%,transparent 25%), linear-gradient(
          315deg
          ,#f15bb5 25%,transparent 25%), linear-gradient(
          45deg
          ,#00bbf9 25%,transparent 25%);
  background-position: -30px 0,-30px 0,0 0,0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`
// decorations
export const CssDecorationIntroduction = styled(TaskIntroductionDecoration)`
  background: repeating-linear-gradient(
          90deg
          ,#f15bb5 0px,#f15bb5 5px,white 5px,white 10px);
`
export const CssFooterDecoration = styled(TaskFooterDecoration)`
  background: repeating-linear-gradient(0deg, #00f5d4 0px,
  #00f5d4 5px, #f15bb5 5px, #f15bb5 10px);
`