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
