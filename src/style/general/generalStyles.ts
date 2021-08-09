import styled from "styled-components";

export {}
export const Container = styled.div`
  max-width: 1980px;
  margin: 0 auto;
`
export const FreepikThanks = styled.div`
  padding: 7px 13px;
  font-size: 1.375rem;

  & > div {
    display: flex;
  }

  span {
    margin-right: 0.313rem;
    margin-bottom: 3px;

    img {
      width: 1.375rem;
      height: auto;
      object-fit: cover;
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
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  width: 100%;
`
export const TaskFooterIcons = styled.div`
  flex-shrink: 1;
  display: block;
  width: 33%;
`
export const TaskFooterTaskNumber = styled.div`
  flex-shrink: 1;
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
`

export const TaskFooterSwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 13px;

  &:hover {
    cursor: pointer;
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
  border-radius: 10px 10px  0 0;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.gray};
  }
`
export const TaskFooterTasksList = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  z-index: 3;
  width: 100%;
`
export const TaskFooterTasksItem = styled.li`
  width: 53px;
  height: 53px;
  border: 5px solid ${props => props.theme.color.gray};
  border-radius: 7px;
  margin: 3px;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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
`

export const TaskSectionHeader = styled.div`
  font-size: 1.25rem;
  padding: 7px 10px;
  background: ${props => props.theme.color.white};
  
`
export const TaskIntroductionBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: 5px;
  background: ${props => props.theme.background.transparent};
  img {
    width: 41px;
    height: auto;
    object-fit: cover;
  }

  h2 {
    font-size: 34px;
  }
`

export const TaskIntroductionText = styled.div`
  font-size: 1.25rem;
  margin-top: 20px;
  padding: 8px 11px;
  background: ${props => props.theme.background.transparent};
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
`
export const TaskTargetsWrapper = styled.div`
  padding-top: 12px;
`
export const TaskTarget = styled.div`
  display: flex;
  padding: 12px 9px;
  background: ${props => props.theme.background.transparent};
`
export const TaskTargetCheckbox = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 11px;
  background: ${props => props.theme.color.white};
`
export const TaskTargetText = styled.p`
  font-size: 1.25rem;
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
`
export const CodeEditorPanelBtn = styled.button`
  display: block;
  border-radius: 5px;
  padding: 0.375rem 0.875rem;
  margin-right: 10px;
  transition: 0.1s;
  color: ${props => props.theme.color.blue};

  &:hover {
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.blue};
  }
`
export const WebBrowserWindow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 37px;
  border: 2px solid #1d1a1a;
  border-radius: 4px;
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