import styled from "styled-components";

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