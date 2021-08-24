import styled, {keyframes} from "styled-components";
import {device} from "../../general/breakpoints";

export const EditorHeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
  background: ${props => props.theme.color.yellow};
  padding: 0 41px;
`
export const EditorHeaderLink = styled.div`
  font-size: 2.75rem;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  text-align: center;
  transition: 0.2s;

  a {
    color: ${props => props.theme.color.gray};
  }

  &:hover {
    transition: 0.2s;
    letter-spacing: 0.188rem;
  }
`
export const EditorHeaderSettingsIcon = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48px;
  margin-right: 89px;
  transition: 0.2s;

  i {
    font-size: 2.75rem;
  }

  span {
    font-size: 1.813rem;
    margin-left: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`
export const EditorSettingsForm = styled.form`
  position: absolute;
  width: 33%;
  height: 100vh;
  overflow: auto;
  right: 0;
  background: ${props => props.theme.color.gray};
  bottom: -100vh;
  z-index: 11;
  padding-top: 40px;
  
  ::-webkit-scrollbar{
    width: 1px;
  }
`
export const EditorFormItem = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 3.125rem;
    margin-left: 10px;
    font-size: 1.25rem;
    background: ${props => props.theme.color.purple};
    color: ${props => props.theme.color.white};
    border: none;
    border-radius: 5px;
    outline: none;
    transition: 0.1s;

    &:focus {
      width: 4rem;
    }
  }
`
export const EditorFormLabel = styled.label`

  display: block;
  margin-top: 1.563rem;
  font-size: 1.25rem;
  color: ${props => props.theme.color.white};
`
export const EditorFormThemes = styled.div`
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.color.white};
  font-weight: 600;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 5px;
    padding: 5px 20px;
    border: 3px solid ${props => props.theme.color.purple};
    border-radius: 5px;
    overflow: hidden;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      letter-spacing: 2px;
    }
  }

  span {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 120%;
    height: 110%;
    background: ${props => props.theme.color.purple};
  }

  input {
    visibility: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  input:checked ~ span {
    display: none;
  }
`
export const EditorFormThemesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface props__EditorFormTheme {
    areas: string
}

export const EditorFormTheme = styled.label<props__EditorFormTheme>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 45%;
  height: 180px;
  grid-template-areas: ${props => props.areas};
  margin: 5px;
  position: relative;

  &:hover{
    cursor: pointer;
  }
  input {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:checked ~ span i {
      display: block;
    }
  }
  @media ${device.laptopL}{
    height: 150px;
  }
  @media ${device.laptopSM}{
    height: 125px;
    margin: 3px;
  }
`

const EditorFormThemeItem = styled.span`
  display: block;
  margin: 3px;
  border-radius: 6px;
`
export const EditorFormThemeHtml = styled(EditorFormThemeItem)`
  grid-area: html;
  background: #eb5a22;
`
export const EditorFormThemeCss = styled(EditorFormThemeItem)`
  grid-area: css;
  background: #2b9fd0;
`
export const EditorFormThemeJs = styled(EditorFormThemeItem)`
  grid-area: js;
  background: #d4b60e;
`
const an__EditorFormThemeResult = keyframes`
  100% {
    transform: scale(100%);
  }
`
export const EditorFormThemeResult = styled(EditorFormThemeItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: result;
  background: ${props => props.theme.color.white};

  i {
    transform: scale(0%);
    animation: 0.3s ${an__EditorFormThemeResult} forwards;
    display: none;
    font-size: 78px;
    color: ${props => props.theme.color.green}
  }
  @media ${device.laptopSM}{
    i{
      font-size: 50px;
    }
  }
`


interface props__EditorContentWrapper {
    areas: string
}

export const EditorContentWrapper = styled.main<props__EditorContentWrapper>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas: ${props => props.areas};

  width: 100%;
  height: 100vh;
`
const EditorElement = styled.div`
  position: relative;
  padding: 10px;
  background: ${props => props.theme.color.gray};
`
export const EditorHtml = styled(EditorElement)`
  grid-area: html;
`
export const EditorCss = styled(EditorElement)`
  grid-area: css;
`
export const EditorJs = styled(EditorElement)`
  grid-area: js;
`
export const EditorResult = styled(EditorElement)`
  grid-area: result;
  position: relative;

  & > div {
    background: #fff;
  }
`
export const EditorName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 5px;
  left: 3px;
  width: 47px;
  height: 47px;
  border-radius: 25px;
  border: 2px solid ${props => props.theme.color.yellow};
  background: ${props => props.theme.color.gray};

  img {
    width: 24px;
    height: auto;
    object-fit: cover;
  }
`
export const EditorConsoleSwitchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.313rem;
  height: 32px;
  position: absolute;
  background: transparent;
  z-index: 10;
  top: 10px;
  left: 8px;
  border-radius: 0 9px 9px 0;
  border: 2px solid ${props => props.theme.color.gray};
  padding: 0 1.438rem 0 0.25rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    padding-right: 2.813rem;
  }

  i {
    margin: 0 9px;
  }
`



// for small devices
export const PocketEditorContentWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: green;
`