import styled from "styled-components";

export const EditorHeaderWrapper = styled.header`
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
  overflow: hidden;
  transition: 0.2s;

  i {
    font-size: 2.75rem;
  }

  span {
    font-size: 1.813rem;
    margin-left: 0.375rem;
  }

  &:hover {
    cursor: pointer;
    width: 167px;
    margin: 0;
  }
`
interface props__EditorContentWrapper {
    areas: string
}
export const EditorContentWrapper = styled.main<props__EditorContentWrapper>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: ${props => props.areas} ;

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
  img{
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
  left: 10px;
  border-radius:  0 9px 9px 0;
  border: 2px solid ${props => props.theme.color.gray};
  padding: 0 1.438rem 0 0.25rem;
  transition: 0.2s;
  &:hover{
    cursor: pointer;
    padding-right: 2.813rem;
  }
  i{
    margin: 0 9px;
  }
`