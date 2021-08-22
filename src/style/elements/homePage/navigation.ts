import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  height: 80px;
  border-bottom: 3px solid ${props => props.theme.color.gray};
`
export const NavTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
 
  font-size: 3.438rem;
  font-family: 'Recursive', sans-serif;
  font-weight: 900;
  &:hover{
    cursor: default;
  }
  
`
export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  height: 100%;
  padding-right: 122px;
  background: ${props => props.theme.color.blue};
`

export const NavListItem = styled.li`
  font-weight: bold;
  padding: 24px 27px;
  font-size: 1.625rem;
  position: relative;
  overflow: hidden;
  transition: 1s;
  a{
    color: ${props => props.theme.color.gray};
  }
  &:after, &:before{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0.313rem;
    background: ${props => props.theme.color.red};
  }
  &:after{
    left: 50%;
  }
  &:before{
    right: 50%;
  }
  
  &:hover{
    cursor: pointer;
  }
  &:hover:after, &:hover:before {
    transition: 0.6s;
 width: 100%;
  }
  
`
export {}