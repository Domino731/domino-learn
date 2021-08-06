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
  position: absolute;
  top: 0;
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
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

export const TaskFooterTaskNumber = styled.div`
  font-size: 2.75rem;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
`

export const TaskFooterSwitchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`

export const TaskFooterSwitchButton = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0.438rem 0.875rem;
`
export const TaskFooterListBtn = styled.button`
  display: block;
  border-radius: 5px;
  padding: 0.438rem 0.875rem;
  margin-right: 10px;
  border: 2px solid ${props => props.theme.color.gray}
`