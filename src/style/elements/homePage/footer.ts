import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const FooterContainer = styled.footer`
  padding: 10px 0;
  background: ${props => props.theme.color.yellow};
`
export const FooterMediaList = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const FooterMediaItem = styled.li`
padding: 0 10px;
font-size: 51px;
  a {   
    color: ${props => props.theme.color.gray};
    transition: 0.2s;
    
    &:hover {
      transition: 0.2s;
      color: ${props => props.theme.color.red};
    }

  }
  @media ${device.desktopS}{
    font-size: 46px;
  }
  @media ${device.laptopL}{
    font-size: 39px;
  }
  @media ${device.laptopSM} {
      font-size: 41px;

  }
  @media (max-width: 961px) {
      font-size: 30px;
  }
  @media ${device.tablet} {
      font-size: 40px;

  }
`
export const CopyrightWrapper = styled.div`
text-align: center;
margin-top: 10px;
font-size: 16px;
font-weight: 500;
`