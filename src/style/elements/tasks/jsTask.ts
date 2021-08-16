import styled from "styled-components";

export const JsResult = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 3;
  max-width: 100%;
  position: relative;
  overflow: auto;
  background: red;
 
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
  background: rgba(57, 196, 199, 0.57);
`

export const JsIntroduction = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  max-width: 100%;
  position: relative;
  overflow: auto;
  background: rgba(101, 16, 172, 0.57);
`

export const JsTargets = styled.div`
  grid-column: 1/ 1;
  grid-row: 2 / 2;
  max-width: 100%;
  position: relative;
  overflow: auto;
  background: rgba(31, 145, 234, 0.57);`