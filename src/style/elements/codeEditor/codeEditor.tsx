import styled, {keyframes} from "styled-components";
import {device} from "../../general/breakpoints";

export const EditorContainer = styled.main`
  overflow-x: hidden;
  position: relative;
`
export const EditorHeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.color.yellow};
  padding: 5px 41px;

  @media ${device.desktopS}{
    padding: 4px 26px
  }

  @media ${device.laptopL}{
    padding: 3px 14px
  }
   @media ${device.laptopM}{
    padding: 2px 7px;
  }
  @media ${device.tablet} {
    padding: 4px 20px;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    padding: 3px 0;
    align-items: center;
  }
 
`
export const EditorHeaderLink = styled.div`
  font-size: 44px;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  text-align: center;
  transition: 0.2s;
  
  a {
    color: ${props => props.theme.color.gray};
    transition: 0.2s;
    &:hover {
    
    letter-spacing: 0.188rem;
  }
  }
 @media ${device.desktopS}{
    font-size: 38px;
  }
  @media ${device.laptopL}{
    font-size: 35px;
  }
  @media ${device.laptopM}{
    font-size: 32px
  }
  @media ${device.laptopSM}{
    font-size: 30px
  }
  @media ${device.laptopS}{
    font-size: 28px
  }
  @media screen and (max-width: 1023px){
    font-size: 36px
  }
  @media ${device.mobileXL}{
    font-size: 34px
  }
  @media screen and (max-width: 500px){
    font-size: 33px
  }
  @media ${device.mobileM}{
    font-size: 30px
  }
  @media screen and (max-width: 340px){
    font-size: 29px
  }
`
export const EditorHeaderSettingsBtn = styled.button`

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  font-size: 30px;
  i {
    font-size: 2rem;
  }

  span {
    font-size: 1.1em;
    margin-left: 0.3em;
  }

  &:hover {
    cursor: pointer;
  }
  @media ${device.desktopS}{
    font-size: 28px;
  }
  @media ${device.laptopL}{
    font-size: 26px;
  }
  @media ${device.laptopM}{
    font-size: 22px;
  }
  @media ${device.laptopS}{
    font-size: 19px;
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
  padding: 0 15px;
  border-left: 2px solid ${props => props.theme.color.yellow};
  ::-webkit-scrollbar {
    width: 1px;
  }

  @media ${device.laptopM}{
    padding: 0 12px;
  }
  @media (max-width: 900px) {
    padding: 0 7px;
    border-left: 2px solid ${props => props.theme.color.yellow};
  }
  @media screen and (max-width: 500px){
    width: 50%;
  }
  @media ${device.mobileM}{
    width: 100%;
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
  margin-top: 1em;
  font-size: 21px;
  color: ${props => props.theme.color.white};
  input {
    font-size: 1em;
    width: 4em;
    border-radius: .5em;
    padding: .2em .3em;
  }
  @media ${device.desktopS}{
    font-size: 19px;
  }
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopSM}{
    font-size: 15px;
  }
  @media ${device.laptopS}{
    font-size: 13px;
  }
  @media screen and (max-width: 900px){
    font-size: 16px;
  }
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
  @media ${device.mobileM}{
    font-size: 16px;
  }
`
export const EditorFormTitle = styled.div`
  display: block;
  margin-top: 1em;
  font-size: 21px;
  color: ${props => props.theme.color.white};
  @media ${device.desktopS}{
    font-size: 19px;
  }
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopSM}{
    font-size: 15px;
  }
  @media ${device.laptopS}{
    font-size: 13px;
  }
  @media screen and (max-width: 900px){
    font-size: 16px;
  }
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
  @media ${device.mobileM}{
    font-size: 16px;
  }
`
export const EditorFormThemes = styled.div`
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.color.white};
  font-weight: 600;
  font-size: 20px;
  label {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0.3em;
    padding: 0.3em 20px;
    border: 3px solid ${props => props.theme.color.purple};
    border-radius: 0.5em;
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
  @media ${device.desktopS}{
    margin-top: 10px;
    font-size: 19px;
    label{
    font-size: 19px;
    padding: 0.3em 16px;
    }
  }
  @media ${device.laptopL}{
    margin-top: 9px;
    font-size: 19px;
    label{
    font-size: 15px;
    padding: 0.3em 12px;
    }
  }
  @media ${device.laptopSM}{
    margin-top: 9px;
    label{
    font-size: 12px;
    padding: 0.3em 9px;
    }
  }
  @media ${device.laptopS}{
    margin-top: 6px;
    label{
    font-size: 11px;
    padding: 0.3em 9px;
    }
  }
  @media screen and (max-width: 900px){
    label{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 500px){
    label{
      font-size: 12px;
    }
  }
  @media ${device.mobileM}{
    label {
     font-size: 15px; 
    }
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
  width: 50%;
  height: 180px;
  grid-template-areas: ${props => props.areas};
  padding: 9px;
  position: relative;

  &:hover {
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
 
 @media ${device.desktopS}{
  height: 157px;
  padding: 7px;
 }
 @media ${device.laptopL}{
  height: 143px;
  padding: 6px;
 }
 @media ${device.laptopM}{
  height: 126px;
  padding: 4px;
 }
 @media ${device.laptopSM}{
  height: 104px;
  padding: 3px;
 }
 @media ${device.desktopS}{
  height: 91px;
  padding: 2px;
 }
`

const EditorFormThemeItem = styled.span`
  display: block;
  margin: 3px;
  border-radius: 6px;
  @media ${device.laptopS}{
    margin: 2px;
    border-radius: 4px;
  }
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
  background: #fff;

  i {
    transform: scale(0%);
    animation: 0.3s ${an__EditorFormThemeResult} forwards;
    display: none;
    font-size: 70px;
    color: ${props => props.theme.color.green}
  }

  @media ${device.desktopS}{
    i{
     font-size: 49px; 
    }
  }
  @media ${device.laptopSM} {
    i {
      font-size: 37px;
    }
  }
  @media ${device.laptopS} {
    i {
      font-size: 33px;
    }
  }
`


interface props__EditorContentWrapper {
    areas: string
}

export const EditorContentWrapper = styled.section<props__EditorContentWrapper>`
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
  @media ${device.laptopM}{
    padding: 7px;
  }
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
interface PropsEditorResult {
  fullscreen: boolean;
}
export const EditorResult = styled(EditorElement)<PropsEditorResult>`
  grid-area: result;
  position: relative;
  position: ${props => props.fullscreen && 'absolute'};
  width: ${props => props.fullscreen && '100%'};
  height: 100%;
  z-index: 5;
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
  background: ${props => props.theme.color.white};
  top: 5px;
    left: 6px;
    width: 42px;
    padding: 7px 0;
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    @media ${device.laptopL}{
    top: 8px;
    left: 8px;
    width: 39px;
    padding: 5px 0;
    text-align: center;
    font-size: 13px;
    border-radius: 5px;
    }
    @media ${device.laptopM}{
      top: 7px;
    left: 8px;
    width: 36px;
    padding: 4px 0;;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    }
    @media ${device.laptopSM}{
    top: 7px;
    left: 9px;
    width: 30px;
    padding: 5px 0;
    text-align: center;
    font-size: 10px;
    border-radius: 3px;
    }
`
export const EditorDevPanel = styled.section`
  font-size: 21px;
  height: 32px;
   position: absolute;
    top: 10px;
    width: 100%;
    z-index: 1;
    display: flex;
    @media ${device.desktopS}{
      top: 9px;
    }
    @media ${device.laptopL}{
    height: 27px;
    font-size: 18px;
    }
    @media ${device.laptopM}{
      height: 22px;
      top: 7px;
      font-size: 16px;
    }
    @media ${device.laptopSM}{
    height: 20px;
    top: 7px;
    font-size: 13px;
  }
  @media ${device.laptopS}{
    height: 17px;
    top: 7px;
    font-size: 12px;
    }
`
export const EditorConsoleSwitchBtn = styled.button`
font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 10;
  border-radius: 0 0.4em 0.4em 0;
  border: 2px solid ${props => props.theme.color.gray};
  border-left: none;
  padding: 0 1.4em 0 0.25em;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    padding-right: 1.8em;
  }

  i {
    margin: 0 9px;
  }
  @media ${device.laptopS}{
    border: 1px solid ${props => props.theme.color.gray};
  border-left: none;
  }
`
export const EditorFullScreenBtn = styled(EditorConsoleSwitchBtn)`
 border-radius: 0.4em;
 margin-left: 0.5em;
 border: 2px solid ${props => props.theme.color.gray};
 @media ${device.laptopS}{
    border: 1px solid ${props => props.theme.color.gray};
  }
`

// for small devices
export const MobileEditorContentWrapper = styled.section`
  width: 100%;
  height: 100vh;
`
export const MobileEditorSwitchBar = styled.div`
  width: 100%;
  height: 39px;
  background: ${props => props.theme.color.gray};
  display: flex;
  @media ${device.tablet}{
    height: 36px;
  }
  @media ${device.mobileL}{
    height: 34px;
  }
`
export const MobileEditorSwitchOption = styled.div`
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.color.white};


  input {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;

    &:checked ~ span {
      border-bottom: 4px solid ${props => props.theme.color.yellow};
      @media ${device.mobileL}{
        border-bottom: 3px solid ${props => props.theme.color.yellow};
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    border-bottom: 4px solid ${props => props.theme.color.white};
    transition: 0.1s;
    @media ${device.mobileL}{
        border-bottom: 3px solid ${props => props.theme.color.white};
      }
  }
  @media ${device.tablet}{
    font-size: 15px;
  }
  @media ${device.mobileL}{
    font-size: 14px;
  }
`
export const MobileItemWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 39px);
  @media ${device.tablet}{
    height: calc(100vh - 36px);
  }
  @media ${device.mobileL}{
    height: calc(100vh - 34px);
  }
`
export const EditorResetCSSChekbox = styled.label`
  position: relative;
  display: block;
  font-size: 20px;
  margin-top: 10px;
  input{
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
    &:checked ~ i {
      background: #70e000;
    }
  }
  span:last-child{
    color: ${props => props.theme.color.white};
  }
  i {
    min-width: 0.6em;
    display: inline-block;
    padding: 0.2em;
    border-radius: 0.2em;
    margin-right: 0.4em;
    background: ${props => props.theme.color.white};
     transition: 0.2s;
  }
  @media ${device.desktopS}{
    font-size: 19px;
  }
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopSM}{
    font-size: 15px;
  }
  @media ${device.laptopS}{
    font-size: 13px;
  }
  @media screen and (max-width: 900px){
    font-size: 16px;
  }
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
  @media ${device.mobileM}{
    font-size: 16px;
  }
`