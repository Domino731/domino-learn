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
`
export const TaskSuccessfulTitle = styled.h2`
  margin-top: 10px;
  padding: 10px 0;
  color: ${props => props.theme.color.white};
  font-size: 44px;
  text-align: center;
  background: ${props => props.theme.color.gray};

  @media ${device.laptopL} {
    font-size: 36px;
  }
  @media ${device.laptopSM} {
    font-size: 30px;
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
    font-size: 1.938rem;
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

  @media ${device.laptopSM} {
    a, button {
      font-size: 24px;
    }
  }
`
export const TaskHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`

export const TaskHeaderTitle = styled.h1`
  font-size: 41px;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;

  a {
    color: ${props => props.theme.color.gray}
  }
`

export const TaskFooter = styled.footer`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  width: 100%;
`
export const TaskFooterTitle = styled.div`
  display: block;
  width: 33%;
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
export const TaskFooterIcons = styled.div`
  display: block;
  width: 33%;
`
export const TaskFooterTaskNumber = styled.div`
  font-size: 2.75rem;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  width: 32%;
  text-align: center;
`

export const TaskFooterSwitchBar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 1;
  width: 33%;
  height: 50px;
  padding: 4px 0;

  @media ${device.laptopS} {
    margin-right: 0;
  }
`

interface TaskFooterSwitchButtonProps {
    color: string
}

export const TaskFooterSwitchButton = styled.div<TaskFooterSwitchButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 13px;
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
export const TaskFooterListBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 100%;
  padding: 0 13px;
  margin-right: 10px;
  font-size: 31px;
  color: ${props => props.theme.color.gray};
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    cursor: pointer;
    border: 2px solid ${props => props.theme.color.gray};
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

  @media ${device.laptopS} {
    width: 170px;
    height: 290px;
    top: -297px;
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
  font-size: 1.25rem;
  padding: 7px 10px;
  background: ${props => props.theme.color.white};
  box-shadow: 0 2px 5px ${props => props.theme.color.gray};
`
export const TaskIntroductionBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: 5px;

  img {
    width: 41px;
    height: auto;
    object-fit: cover;
  }

  h3 {
    font-size: 2.125rem;
  }
`

export const TaskIntroductionText = styled.div`
  font-size: 1.25rem;
  margin-top: 20px;
  padding: 8px 11px;

  p {
    text-align: left;
    margin-top: 20px;

    code {
      display: inline-block;
      padding: 0 3px;
      border-radius: 4px;
      background: ${props => props.theme.color.white};
    }

  }

  h3 {
    font-weight: 700;
    font-size: 1.313rem;
    margin-bottom: 0.5rem;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.blue};
  }

  ul, ol {
    margin: 0.5rem 0.625rem;

    li {
      margin: 0.563rem 0;
    }
  }

  ol {
    margin: 0.5rem 2rem;
    list-style-type: decimal;
  }

  ul {

    li {
      &:before {
        content: "";
        display: inline-block;
        width: 1.05rem;
        height: 1.05rem;
        border-radius: 0.8rem;
        margin-right: 0.313rem;
        background: ${props => props.theme.color.blue};
      }
    }
  }
`
export const TaskTargetsWrapper = styled.div`
  padding-top: 12px;
`
export const TaskTarget = styled.div`
  display: flex;
  padding: 12px 9px;
`
type TaskTargetCheckboxProps = {
    backgroundColor: string
}
export const TaskTargetCheckbox = styled.div<TaskTargetCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 30px;
  margin-right: 11px;
  border-radius: 5px;
  background: ${props => props.backgroundColor};
  color: ${props => props.theme.color.white};

  @media ${device.tablet} {
    height: 24px;
    min-width: 24px;
    font-size: 20px;
  }
`
export const TaskTargetNumber = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  margin-right: 0.313rem;
`
export const TaskTargetText = styled.div`
  font-size: 1.25rem;

  span {
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      height: 5px;
      width: 100%;
      position: absolute;
      background: url("https://cldup.com/MiGVGBh-0U.png");
      background-size: 8px;
      top: 1.188rem;
      bottom: 0;
      left: 0;
    }
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.blue};
  }
`
export const TaskCodeEditorMultiple = styled.div`
  position: absolute;
  padding: 53px 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.color.gray};
  @media ${device.tablet}{
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
  @media ${device.tablet} {
    z-index: 4;
    height: 40px;
  }
`
export const CodeEditorPanelBtn = styled.div`
  display: block;
  border-radius: 5px;
  padding: 0.375rem 0.875rem;
  margin-right: 10px;
  transition: 0.1s;
  color: ${props => props.theme.color.blue};
  font-size: 1.313rem;

  &:hover {
    cursor: pointer;
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.blue};
  }

  @media ${device.laptopS} {
    margin-right: 0;
    padding: 12px 6px;
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
  @media ${device.tablet}{
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

  span {
    width: 53px;
    height: 19px;
    border-radius: 6px;
    margin-right: 8px;
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
export const ChangeEditor = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  padding-left: 10px;
  width: 100%;
  height: 53px;
  background: ${props => props.theme.color.gray};

  @media ${device.tablet} {
    height: 40px;
  }
`

interface ChangeEditorCheckboxProps {
    lineColor: string
}

export const ChangeEditorCheckbox = styled.div<ChangeEditorCheckboxProps>`
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  position: relative;
  padding: 0.75rem 0.313rem;
  color: #fff;

  i {
    margin-left: 0.563rem;
    font-size: 20px;
  }

  span {
    position: absolute;
    display: block;
    bottom: 4px;
    background: ${props => props.lineColor};
    height: 4px;
  }

  label {
    font-size: 1.313rem;
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
`
export const EditorSettingsWrapper = styled.form`
  position: absolute;
  z-index: 10;
  top: -200px;
  left: 0;
  width: 100%;
  padding: 9px 11px;
  background: ${props => props.theme.color.gray};

  input {
    border-radius: 5px;
  }

  @media (max-width: 1760px) {
    top: -261px;
    height: 263px;
  }

  @media ${device.tablet} {
    top: -189px;
    height: 190px;
  }
`
export const EditorSettingsLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.blue};
  font-size: 1.25rem;
`
export const EditorSettingsFSize = styled.input`
  margin-top: 11px;
  width: 44px;
  height: 31px;
  font-size: 1.125rem;
  border: none;
  background: ${props => props.theme.color.blue};
  color: #fff;
  margin-bottom: 7px;
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
    margin: 5px;
    position: relative;
    border-radius: 5px;
    color: #fff;
    border: 3px solid ${props => props.theme.color.blue};
    padding: 5px 20px;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    font-size: 19px;
    color: #fff;
    top: 0;
    left: 0;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: none;
    margin-left: 0.25rem;
  }

  input:checked ~ span {
    display: inline-block;
    animation: 0.2s ${an__EditorSettingsCheckbox} forwards;
  }
`
export const EditorSettingsCloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.color.red};
  font-size: 2.25rem;
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
  margin-top: 20px;
  padding: 0 9px;
`
export const TaskAidsList = styled.div`

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

  @media ${device.laptopL} {
    height: 75px;
  }
  @media ${device.laptopS} {
    height: 65px;
  }
  @media ${device.tablet} {
    height: 68px;
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
`

const TaskAidIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 100%;
  font-size: 55px;

  @media ${device.laptopL} {
    width: 88px;
    font-size: 50px;
  }

  @media ${device.laptopS} {
    font-size: 40px;
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
  font-size: 1.313rem;
  padding: 3px 7px;
  max-height: 47px;
  overflow: hidden;
  @media ${device.laptopS} {
    padding: 1px 3px;
    max-height: 33px;
  }
  @media ${device.tablet} {
    padding: 2px 3px;
    font-size: 20px;
    max-height: 45px;
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
  padding: 7px 12px;
  width: auto;
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

  @media ${device.laptopSM} {
    height: 60px;
  }
`

export const MobileTaskContentWrapper = styled.main`
  width: 100%;
`
export const MobileTaskDetailsWrapper = styled.div`
  display: flex;
`
export const MobileTaskDetail = styled.div`
  width: 50%;
`

export const MobileTaskEditorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  padding-bottom: 30px;
  background: black;
`
export const MobileTaskResult = styled.div`
  height: 85vh;
  padding: 30px;
`