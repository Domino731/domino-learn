import styled from "styled-components";

export const CssTaskContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  width: 100%;
`

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

// decorations
export const CssDecorationIntroduction = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  z-index: -1;
  width: 43%;
  height: 74px;
  background: repeating-linear-gradient(
          90deg
          ,#b5179e 0px,#b5179e 5px,white 5px,white 10px);
`