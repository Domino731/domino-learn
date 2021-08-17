import styled from "styled-components";
import {TaskFooter, TaskFooterDecoration, TaskFooterTasksWrapper, TaskIntroductionDecoration} from "./task";

export const JsResult = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
  
  padding: 10px;
  background: ${props => props.theme.color.gray};

  & > div {
    background: #fff;
  }
 
  &::-webkit-scrollbar {
    width: 7px;
    background: ${props => props.theme.color.gray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${props => props.theme.color.blue};
  }
`

export const JsCodeEditorWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
  padding-bottom: 53px;
`

export const JsIntroduction = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  max-width: 100%;
  position: relative;
  overflow: auto;

`

export const JsTargets = styled.div`
  grid-column: 1/ 1;
  grid-row: 2 / 2;
  max-width: 100%;
  position: relative;
  overflow: auto;`
export const JsConsoleWrapper = styled.div`
 & > div {
   & > div {
     color: black !important;
   }
 }
  summary{
    color: #ff8080 !important;
  }
`
export const JsTaskSuccessful = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1/ 1;
  grid-row: 1 / 3;
  background-color: #4cc9f0;
  background-image: linear-gradient(
          135deg
          ,#480ca8 25%,transparent 25%), linear-gradient(
          225deg
          ,#b5179e 25%,transparent 25%), linear-gradient(
          315deg
          ,#480ca8 25%,transparent 25%), linear-gradient(
          45deg
          ,#b5179e 25%,transparent 25%);
  background-position: -30px 0,-30px 0,0 0,0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`
export const JsFooter = styled(TaskFooter)`
  background-color: #4cc9f0;
`


export const JsFooterTasksWrapper = styled(TaskFooterTasksWrapper)`
  background-color: #4cc9f0;
  background-image: linear-gradient(
          135deg
          ,#480ca8 25%,transparent 25%), linear-gradient(
          225deg
          ,#b5179e 25%,transparent 25%), linear-gradient(
          315deg
          ,#480ca8 25%,transparent 25%), linear-gradient(
          45deg
          ,#b5179e 25%,transparent 25%);
  background-position: -30px 0,-30px 0,0 0,0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
`
export const JsFooterDecorations = styled(TaskFooterDecoration)`
  background: repeating-linear-gradient(0deg, #4cc9f0 0px,
  #4cc9f0 5px, #b5179e 5px, #b5179e 10px);
`
export const JsDecorationIntroduction = styled(TaskIntroductionDecoration)`
  background: repeating-linear-gradient(
          90deg
          ,#b5179e 0px,#b5179e 5px,white 5px,white 10px);
`