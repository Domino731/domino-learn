import styled, {keyframes} from "styled-components";
import {device} from "../../general/breakpoints";

export const TaskContainer = styled.div`
  width: 100%;

  code {
    display: inline-block;
    padding: 0 3px;
    border-radius: 4px;
    background: ${props => props.theme.color.white};
  }

`
export const TaskContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  width: 100%;

  @media ${device.tablet} {
    height: 150vh;
  }
`
export const TaskSuccessfulImg = styled.img`
  width: 60%;
  height: auto;
  @media ${device.desktopS}{
    width: 57%;
  }
  @media ${device.laptopL}{
    width: 50%;
  }
  @media ${device.tablet}{
    width: 35%;
  }
  @media (max-width: 650px) {
    width: 45%;
  }
  @media ${device.mobileM} {
    margin-top: 10px;
    width: 45%;
  }
`
export const TaskSuccessfulTitle = styled.h2`
  margin-top: 10px;
  padding: 10px 0;
  color: ${props => props.theme.color.white};
  font-size: 39px;
  text-align: center;
  background: ${props => props.theme.color.gray};
  @media ${device.desktopS}{
    margin-top: 9px;
    padding: 9px 31px;
    font-size: 30px;
  }
  @media ${device.laptopL} {
    margin-top: 8px;
    padding: 7px 31px;
    font-size: 28px;
  }
  @media ${device.laptopM} {
    font-size: 28px;
  }
  @media ${device.laptopSM} {
    padding: 7px 13px;
    font-size: 23px;
  }
  @media ${device.tablet}{
    padding: 7px 3px;
    font-size: 20px;
  }
  @media (max-width: 650px) {
    padding: 7px 3px;
    font-size: 17px;
  }
`

interface TaskSuccessfulBarProps {
    color: string
}

export const TaskSuccessfulBar = styled.div<TaskSuccessfulBarProps>`
  width: 100%;
  background: ${props => props.color};
  display: flex;
  justify-content: center;

  a, button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 50%;
    flex-grow: 1;
    border-radius: 0;
    padding: 5px 0;
    color: ${props => props.theme.color.gray};
    font-weight: 600;
    transition: 0.1s;

    &:hover {
      background: ${props => props.theme.color.gray};
      color: ${props => props.color};
      transition: 0.1s;
      letter-spacing: 0.125rem;
    }
  }
  @media ${device.laptopL}{
    a, button {
      font-size: 21px;
    }
  }
  @media ${device.laptopM}{
    a, button {
      font-size: 18px;
    }
  }
  @media ${device.laptopSM} {
    a, button {
      font-size: 17px;
    }
  }
  @media ${device.tablet}{
    a, button {
      font-size: 16px;
    }
  }
  @media (max-width: 650px) {
    a, button {
      padding: 3px 0;
      font-size: 15px;
    }
  }
  @media (max-width: 360px) {
    a, button {
      padding: 0;
      font-size: 12px;
    }

  }
`

interface PropsTaskFooter {
  background: string;
  reverse?: boolean;
}
export const TaskFooter = styled.footer< PropsTaskFooter >`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.background});
  font-size: 20px;
  @media ${device.desktopS}{
    padding: 5px;
    font-size: 18px;
  }
  @media ${device.laptopL}{
    font-size: 17px;
  }
  @media ${device.laptopM}{
    font-size: 16px;
  }
  @media ${device.laptopS}{
    font-size: 14px;
  }
  @media ${device.tablet}{
    font-size: 16px;
  }
  @media screen and (max-width: 709px){
    font-size: 15px;
  }
  @media screen and (max-width: 667px) {
    ${props => props.reverse && 'flex-flow: row wrap-reverse'};
  }
  @media ${device.mobileL}{
    font-size: 14px;
  }
  @media ${device.mobileM}{
    font-size: 13px;
  }
`

export const TaskFooterTitle = styled.div`
  display: block;
  width: 33%;
  font-size: 2em;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  text-align: center;
  transition: 0.2s;

  a {
    color: ${props => props.theme.color.gray};
     &:hover {
    transition: 0.2s;
    letter-spacing: 0.188rem;
  }
  }


  @media screen and (max-width: 667px){
    width: 100%;
    margin-top: 10px;
    text-align: left;
  }
  @media ${device.mobileM}{
    margin-top: 7px;
  }
  @media screen and (max-width: 340px){
    margin-top: 4px;
  }
`
export const TaskFooterIcons = styled.div`
  display: block;
  width: 33%;
`

interface PropsTaskFooterTaskNumber  {
  reverse?: boolean;
}
export const TaskFooterTaskNumber = styled.div<PropsTaskFooterTaskNumber >`
  font-size: 2em;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  width: 32%;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 21px;
  }
  @media screen and (max-width: 667px){
    width: 50%;
    text-align: ${props => props.reverse ? 'left' : 'end'};
  }
`

export const TaskFooterSwitchBar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 1;
  width: 33%;
  padding: 4px 0;
  @media ${device.laptopS} {
    margin-right: 0;
  }
  @media screen and (max-width: 667px){
    width: 50%;
  }
`

interface TaskFooterSwitchButtonProps {
    color: string
}

export const TaskFooterSwitchButton = styled.div<TaskFooterSwitchButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1.2em;
  border-radius: 0.2em;
  padding: 0.2em 0.4em;
  background: ${props => props.theme.color.gray};
  transition: 0.1s;
  margin: 0 0.313rem;
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.gray};
    background: transparent;

    a {
      color: ${props => props.theme.color.gray};
    }
  }

  a {
    color: ${props => props.color};
  }
`
export const TaskFooterListBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3em;
  height: 100%;
  padding: 0 13px;
  margin-right: 0.1em;
  font-size: 1.6em;
  color: ${props => props.theme.color.gray};
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    cursor: pointer;
    border: 2px solid ${props => props.theme.color.gray};
  }
  @media ${device.laptopL}{
    font-size: 1.4em;
  }
`
export const TaskFooterTasksWrapper = styled.div`
  position: absolute;
  top: -353px;
  width: 202px;
  height: 346px;
  overflow: auto;
  border-radius: 10px 10px 0 0;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.gray};
  }
  @media ${device.desktopS}{
    top: -351px;
  }
  @media ${device.laptopS} {
    width: 170px;
    height: 290px;
    top: -295px;
  }
`
export const TaskFooterTasksList = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  top: 0;
  z-index: 3;
  width: 100%;
`

interface props__TaskFooterTaskItem {
    solved: boolean
}

export const TaskFooterTasksItem = styled.li<props__TaskFooterTaskItem>`
  width: 30%;
  height: 53px;
  border: 5px solid ${props => props.theme.color.gray};
  border-radius: 7px;
  margin: 3px;
  font-size: 2.063rem;
  background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparent};
  font-weight: 900;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    font-size: 2.625rem;
    background: ${props => props.solved ? props.theme.background.transparentGreen : props.theme.background.transparentBlue};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.color.gray};
  }

  @media ${device.laptopS} {
    border: 3px solid ${props => props.theme.color.gray};
    margin: 2px;
    height: 47px;
  }
`
export const TaskFooterTasksPlanets = styled.div`
  position: absolute;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
`
export const TaskFooterTasksPlanet1 = styled.img`
  position: absolute;
  width: 211px;
  top: 34px;
  right: -63px;
  height: auto;
  object-fit: cover;

  @media ${device.laptopS} {
    width: 162px;
    right: -50px;
  }
`
export const TaskFooterTasksPlanet2 = styled.img`
  position: absolute;
  top: -37px;
  left: -71px;
  width: 117px;
  height: auto;
  object-fit: cover;
`
export const TaskFooterTasksPlanet3 = styled.img`
  position: absolute;
  bottom: 6px;
  left: -77px;
  width: 156px;
  height: auto;
  object-fit: cover;

  @media ${device.laptopS} {
    bottom: 18px;
    left: -59px;
    width: 119px;
  }
`

export const TaskSectionHeader = styled.h2`
  position: sticky;
  top: 0;
  z-index: 1;
  font-size: 1.1em;
  padding: 0.2em 0.5em;
  background: ${props => props.theme.color.white};
  box-shadow: 0 0.05em 0.3em ${props => props.theme.color.gray};
`
export const TaskIntroductionBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.7em;
  padding-left: 0.2em;

  img {
    width: 2.3em;
    object-fit: cover;
  }

  h3 {
    font-size: 32px;
    padding-right: 2px;
    background: #fff;
    padding: 0.1em 0.3em;
    border-radius: 0.4em;
    font-weight: 550;
  }
  @media ${device.desktopS}{
    h3 {
      font-size: 29px;
    }
  }
  @media ${device.laptopM}{
    h3 {
      font-size: 24px;
    }
  }
  @media ${device.laptopSM}{
    h3 {
      font-size: 22px;
    }
  }
  @media ${device.laptopS}{
    h3 {
      font-size: 18px;
    }
  }
  @media ${device.mobileL}{
    h3 {
      font-size: 16px;
    }
  }
`

export const TaskIntroductionText = styled.div`
  margin-top: 1em;
  padding: 0.3em 0.4em 0;
  padding-bottom: 13px;
  line-height: 1.438rem;
  background: white;
  p {
    margin-top: 0.4em;
    text-align: justify;
    code {
      display: inline-block;
      padding: 0 0.2em;
      border-radius: 0.4em;
      background: ${props => props.theme.color.white};
    }

  }

  h3 {
    font-weight: 700;
    font-size: 1.2em;
    margin-top: 0.3em;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.blue};
  }

  ul, ol {
    margin: 0.7em 0.5em;

    li {
      margin: 0.5em 0;
    }
  }

  ol {
    margin: 0 1.6em;
    list-style-type: decimal;
  }

  ul {
    li {
      &:before {
        content: "";
        display: inline-block;
        width: 0.8em;
        height: 0.8em;
        border-radius: 1em;
        margin-right: 0.313em;
        background: ${props => props.theme.color.blue};
      }
    }
  }
  a{
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.blue};
    code {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.blue};
    }
  }
`

export const TaskTargetsWrapper = styled.div`
  padding-top: 0.8em;
`
export const TaskTarget = styled.div`
  display: flex;
  padding: 0.6em 0.6em;

`
type TaskTargetCheckboxProps = {
    backgroundColor: string
}
export const TaskTargetCheckbox = styled.div<TaskTargetCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  min-width: 1.5em;
  margin-right: 0.5em;
  border-radius: 0.3em;
  background: ${props => props.backgroundColor};
  color: ${props => props.theme.color.white};
`
export const TaskTargetNumber = styled.div`
  font-size: 1.25em;
  font-weight: 900;
  margin-right: 0.313em;
  @media ${device.laptopSM}{
    font-size: 1em;
  }
`
export const TaskTargetText = styled.div`
  font-size: 1.1em;
  line-height: 25px;
  span {
    display: inline-block;
    position: relative;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.red};
  }

  a {
    color: ${props => props.theme.color.gray};
    code{
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.color.blue};
    }
  }
  @media ${device.laptopSM}{
    font-size: 1em;
  }
  @media ${device.laptopL}{
    line-height: 23px;
  }
  @media ${device.laptopM}{
    line-height: 22px;
  }
  @media ${device.laptopSM}{
    line-height: 20px;
  }
  @media ${device.laptopS}{
    line-height: 17px;
  }
  @media ${device.tablet} {
    a {
      &::after {
        height: 3px;
        top: 0;
        background-size: 4px;
      }
    }
  }

`
export const TaskCodeEditorMultiple = styled.div`
  position: absolute;
  padding: 53px 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.color.gray};
  @media ${device.desktopS}{
    padding: 49px 0;
  }
  @media ${device.laptopL}{
    padding: 47px 0;
  }
  @media ${device.laptopM}{
    padding: 41px 0;
  }
  @media ${device.laptopS}{
    padding: 34px 0;
  }
  @media ${device.tablet} {
    padding: 48px 0;
  }
  @media ${device.mobileL}{
    padding: 43px 0;
  }
  @media screen and (max-width: 340px){
    padding: 40px 0;
  }
`
export const CodeEditorPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  padding-left: 10px;
  width: 100%;
  height: 53px;
  background: ${props => props.theme.color.gray};
  @media ${device.desktopS}{
    height: 49px;
  }
  @media ${device.laptopL}{
    height: 47px;
  }
  @media ${device.laptopM}{
    height: 41px;
  }
  @media ${device.laptopS}{
    height: 34px;
  }
  @media ${device.tablet} {
    z-index: 4;
    height: 48px;
  }
  @media ${device.mobileL}{
    height: 43px;
  }
  @media screen and (max-width: 340px){
    height: 40px;
  }
`
export const CodeEditorPanelBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
  transition: 0.1s;
  color: ${props => props.theme.color.blue};
  font-size: 25px;
  padding: 5px 4px;
  img {
    margin-right: 0.2em;
    height: 1.2em;
  }
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.blue};
  }
  @media ${device.desktopS}{
    font-size: 24px;
  }
  @media ${device.laptopL}{
    font-size: 22px;
  }
  @media ${device.laptopM}{
    font-size: 20px;
  }
  @media ${device.laptopSM}{
    font-size: 18px;
  }
  @media ${device.laptopS}{
    font-size: 16px;
  }
  @media ${device.tablet}{
    font-size: 19px;
  }
  @media ${device.mobileL}{
    font-size: 17px;
  }
`
const an__CodeEditorError = keyframes`
  100% {
    transform: scale(100%);
  }
`
export const CodeEditorError = styled.div`
  transform: scale(0%);
  position: absolute;
  bottom: 120px;
  z-index: 5;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: ${props => props.theme.color.red};
  color: #fff;
  font-size: 1.313rem;
  animation: 0.4s ${an__CodeEditorError} forwards ease-in-out;

  i {
    margin-right: 0.5rem;
  }

  @media ${device.tablet} {
    padding: 7px 16px;
    bottom: 46px;
  }
`
const an__TaskResultLoadingWrapper = keyframes`
  100% {
    transform: rotate(620deg);
  }
`
export const TaskResultLoadingWrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15.625rem;

  i {
    display: block;
    animation: 4s ${an__TaskResultLoadingWrapper} infinite alternate-reverse ease-in-out;
  }
`
export const WebBrowserWindow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 37px;
  border-radius: 4px;
  box-shadow: 0 0 2px #404040;
`
export const WebBrowserTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 32px;
  background: ${props => props.theme.color.white};
  font-size: 20px;
  span {
    width: 1.9em;
    height: 1em;
    border-radius: 0.3em;
    margin-right: 0.3em;
  }
  @media ${device.laptopL}{
    height: 27px;
    font-size: 17px;
  }
  @media ${device.laptopM}{
    height: 22px;
    font-size: 15px;
  }
  @media ${device.laptopSM}{
    height: 20px;
    font-size: 13px;
  }
  @media ${device.laptopS}{
    height: 17px;
    font-size: 11px;
  }
`
export const WebBrowserGreenBox = styled.span`
  background: #06d6a0;
`
export const WebBrowserRedBox = styled.span`
  background: #e71d36;
`
export const WebBrowserYellowBox = styled.span`
  background: #ff9f1c;
`
export const ChangeEditor = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  padding-left: 10px;
  width: 100%;
  height: 53px;
  background: ${props => props.theme.color.gray};
  @media ${device.desktopS}{
    height: 49px;
  }
  @media ${device.laptopL}{
    height: 47px;
  }
  @media ${device.laptopM}{
    height: 41px;
  }
  @media ${device.laptopS}{
    height: 34px;
  }
  @media ${device.tablet} {
    height: 48px;
  }
  @media ${device.mobileL}{
    height: 43px;
  }
  @media screen and (max-width: 340px){
    height: 40px;
  }
`

interface ChangeEditorCheckboxProps {
    lineColor: string
}

export const ChangeEditorCheckbox = styled.div<ChangeEditorCheckboxProps>`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 0.9em;
  position: relative;
  padding: 0.75rem 0.313rem;
  color: #fff;

  i {
    margin-left: 0.4em;
    font-size: 0.8em;
  }

  span {
    position: absolute;
    display: block;
    bottom: 4px;
    background: ${props => props.lineColor};
    height: 4px;
  }

  label {
    font-size: 1em;
  }

  input {
    appearance: none;
    border-radius: 0;
    border-color: transparent;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &:hover {
      cursor: pointer;
    }
  }

  input:checked {
    & ~ span {
      width: 100%;
    }

    & ~ i {
      color: ${props => props.lineColor};
    }
  }
  @media ${device.laptopL}{
    font-size: 19px;
  }
  @media ${device.laptopM}{
    font-size: 18px;
  }
  @media ${device.laptopSM}{
    font-size: 16px;
    span {
      height: 3px;
    }
  }
  @media ${device.laptopM}{
    font-size: 15px;
  }
  @media ${device.tablet}{
    font-size: 20px;
  }
  @media ${device.mobileL}{
    font-size: 18px;
  }
`
export const EditorSettingsWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: -262px;
  left: 0;
  width: 100%;
  padding: 9px 11px;
  background: ${props => props.theme.color.gray};
  font-size: 20px;
  input {
    border-radius: 0.3em;
  }
  @media ${device.desktopS}{
    font-size: 17px;
    padding: 7px 14px;
    top: -224px;
  }
  @media ${device.laptopL}{
    font-size: 14px;
    padding: 6px 12px;
    top: -189px;
  }
  @media ${device.laptopM}{
    font-size: 14px;
    top: -189px;
  }
  @media ${device.laptopSM}{
    font-size: 11px;
    padding: 6px 12px;
    top: -134px;
  }
  @media screen and (max-width: 1240px){
    top: -163px;
  }
  @media screen and (max-width: 870px){
    top: -193px;
  }
  @media ${device.tablet}{
    font-size: 17px;
    top: -180px;
  }
  @media screen and (max-width: 554px){
    font-size: 16px;
    top: -171px;
  }
  @media screen and (max-width: 530px){
    font-size: 15px;
    top: -199px;
  }
  @media ${device.laptopL}{
    font-size: 13px;
    top: -180px;
  }
  @media screen and (max-width: 331px){
    font-size: 13px;
    top: -180px;
  }
`
export const EditorSettingsLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.blue};
  font-size: 1.1em;
`
export const EditorSettingsFSize = styled.input`
  margin-top: 0.4em;
    margin-bottom: 0.6em;
  width: 3.2em;
  padding: 0.2em 0;
  font-size: 1em;
  border: none;
  background: ${props => props.theme.color.blue};
  color: #fff;

`
const an__EditorSettingsCheckbox = keyframes`
  0% {
    font-size: 0;
  }
  100% {
    font-size: inherit;
  }
`
export const EditorSettingsThemesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 11px;
  label {
    flex-grow: 1;
    margin: 0.2em 0.4em;
    position: relative;
    color: #fff;
    border: 3px solid ${props => props.theme.color.blue};
    border-radius: 0.3em;
    padding: 5px 20px;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    font-size: 1em;
    color: #fff;
    top: 0;
    left: 0;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: none;
    margin-left: 0.25em;
  }

  input:checked ~ span {
    display: inline-block;
    animation: 0.2s ${an__EditorSettingsCheckbox} forwards;
  }

  @media ${device.desktopS}{
    label {
      padding: 4px 16px;
    }
  }
  @media ${device.laptopL}{
    label {
      padding: 4px 12px;
    }
  }
  @media ${device.laptopL}{
    margin-top: 8px;
  }
`
export const EditorSettingsCloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.color.red};
  font-size: 2.1em;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    font-size: 2.75rem;
  }

  @media ${device.tablet} {
    margin-right: 20px;
  }
`

export const TaskAidsTitle = styled.h3`
  font-size: 1.25rem;
  border-bottom: 2px solid ${props => props.theme.color.red};
`
export const TaskAidsWrapper = styled.div`
  margin-top: 0.7em;
  padding: 0 0.7em;
`
export const TaskAidsList = styled.div`
padding-bottom: 13px;
`

const TaskAidItem = styled.a`
  display: flex;
  width: 100%;
  height: 88px;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 12px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    transform: translate(7px, -7px);
    box-shadow: -7px 7px #000;
  }

  div:last-child {
    width: 100%;
  }
  @media ${device.desktopS}{
    height: 80px;
  }
  @media ${device.laptopL} {
    height: 75px;
    margin-top: 10px;
  }
  @media ${device.laptopSM}{
    height: 67px;
    margin-top: 8px;
  }
  @media ${device.laptopS} {
    height: 50px;
  }
  @media ${device.tablet}{
    height: 47px;
  }
`

export const TaskAidItemVideo = styled(TaskAidItem)`

  background-color: #ffbe0b;
  background-image: linear-gradient(135deg, #ff006e 25%, transparent 25%),
  linear-gradient(225deg, #3a86ff 25%, transparent 25%),
  linear-gradient(315deg, #ff006e 25%, transparent 25%),
  linear-gradient(45deg, #3a86ff 25%, transparent 25%);
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
  @media ${device.laptopM}{
    background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  }
`
export const TaskAidItemArticle = styled(TaskAidItem)`
  background-color: #ffbe0b;
  background-image: linear-gradient(135deg, #3a86ff 25%, transparent 25%),
  linear-gradient(225deg, #ff006e 25%, transparent 25%),
  linear-gradient(315deg, #3a86ff 25%, transparent 25%),
  linear-gradient(45deg, #ff006e 25%, transparent 25%);
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
  @media ${device.laptopM}{
    background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  }
`

const TaskAidIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 100%;
  font-size: 55px;

  @media ${device.desktopS}{
    width: 94px;
    font-size: 50px;
  }
  @media ${device.laptopM}{
    width: 81px;
    font-size: 43px;
  }
  @media ${device.laptopSM}{
    width: 72px;
    font-size: 34px;
  }
  @media ${device.laptopS} {
    width: 56px;
    font-size: 27px;
  }
  @media ${device.tablet}{
    width: 53px;
    font-size: 25px;
  }
  @media ${device.mobileM}{
    width: 56px;
    font-size: 29px;
  }
`
export const TaskAidIconVideo = styled(TaskAidIcon)`
  background: #3a86ff;
  color: #ff006e;
`
export const TaskAidIconArticle = styled(TaskAidIcon)`
  color: #3a86ff;
  background: #ff006e;
`

const TaskAidTitle = styled.div`
  width: 100%;
  font-size: 21px;
  padding: 3px 7px;
  max-height: 47px;
  overflow: hidden;
  @media ${device.desktopS}{
    max-height: 41px;
    font-size: 19px;
  }
  @media ${device.laptopM} {
    font-size: 17px;
    max-height: 38px;
  }
  @media ${device.laptopSM}{
    font-size: 15px;
    max-height: 33px;
  }
  @media ${device.laptopS} {
    padding: 1px 3px;
    font-size: 13px;
    max-height: 27px;
  }
  @media ${device.tablet} {
    padding: 2px 3px;
    font-size: 13px;
    max-height: 28px;
  }
  @media ${device.mobileL}{
    font-size: 12px;
    max-height: 26px;
  }
  @media ${device.mobileM} {
    font-size: 13px;
    max-height: 28px;
  }
`
export const TaskAidTitleVideo = styled(TaskAidTitle)`
  background: #ff006e;
  color: #fff;
`
export const TaskAidTitleArticle = styled(TaskAidTitle)`
  background: #3a86ff;
  color: #fff;
`
const TaskAidAuthor = styled.span`
  display: inline-block;
  padding: 2px 7px;
  font-size: 21px;
  width: auto;
  @media ${device.desktopS}{
    font-size: 19px;
  }
  @media ${device.laptopM} {
    font-size: 16px;
  }
  @media ${device.laptopSM}{
    font-size: 15px;
  }
  @media ${device.laptopS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    padding: 2px 2px;
  }
  @media ${device.mobileL}{
    font-size: 11px;
  }
`
export const TaskAidAuthorVideo = styled(TaskAidAuthor)`
  background: #3a86ff;
  color: #fff;
`
export const TaskAidAuthorArticle = styled(TaskAidAuthor)`
  background: #ff006e;
  color: #fff;
`

//decorations
export const TaskFooterDecoration = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 0;
  width: 50%;
  height: 74px;
  @media ${device.laptopS} {
    height: 65px;
  }
`
export const TaskIntroductionDecoration = styled.div`
  position: absolute;
  top: 44px;
  right: 11px;
  z-index: -1;
  width: 43%;
  height: 74px;

  @media ${device.desktopS}{
    width: 29%;
    height: 68px;
  }
  @media ${device.laptopL}{
    width: 29%;
    height: 41px;
    top: 35px;
  }
  @media ${device.laptopSM} {
    width: 27%;
    height: 39px;
  }
  @media ${device.laptopS} {
    width: 24%;
    height: 25px;
    top: 30px;
  right: 11px;
  }
`

export const MobileTaskContentWrapper = styled.main`
  width: 100%;
`
export const MobileTaskDetailsWrapper = styled.div`
  display: flex;
  @media ${device.mobileM} {
    flex-direction: column;
  }
`
export const MobileTaskDetail = styled.div`
  width: 50%;
  @media ${device.mobileM} {
    width: 100%;
  }
`

export const MobileTaskEditorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 67vh;
  min-height: 620px;
  padding-bottom: 30px;
  background: black;
  @media ${device.mobileL}{
    min-height: 500px;
  }
`
export const MobileTaskResult = styled.div`
  height: 85vh;
  padding: 13px;
  @media ${device.mobileM} {
    padding: 10px;
  }
`
export const TaskSectionScale = styled.div`
font-size: 20px;
@media ${device.desktopS}{
  font-size: 18px;
}
@media ${device.laptopL}{
  font-size: 16px;
}
@media ${device.laptopM}{
  font-size: 15px;
}
@media ${device.laptopSM}{
  font-size: 14px;
}
@media ${device.laptopS}{
  font-size: 12px;
}
@media ${device.tablet}{
  font-size: 13px;
}
@media ${device.mobileL}{
  font-size: 12px;
}
`