import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const FooterContainer = styled.footer`
  padding: 10px 0;
  background: ${props => props.theme.color.yellow};
  @media ${device.laptopM}{
    padding: 8px 0;
  }
  @media ${device.laptopS}{
    padding: 6px 0;
  }
  @media screen and (max-width: 960px){
    padding: 5px 0;
  }
  @media ${device.tablet}{
    padding: 7px 0;
  }
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
  @media ${device.laptopM}{
    font-size: 34px;
  }
  @media ${device.laptopSM} {
      font-size: 31px;
     
  }
  @media (max-width: 960px) {
      font-size: 28px;
      padding: 0 8px;
  }
  @media ${device.tablet}{
    font-size: 31px;
    padding: 0 10px;
  }
`
export const CopyrightWrapper = styled.div`
text-align: center;
margin-top: 10px;
font-size: 16px;
font-weight: 500;
@media ${device.laptopM}{
  margin-top: 6px;
    font-size: 13px;
}
@media ${device.laptopSM}{
    font-size: 12px;
}
@media (max-width: 960px) {
  font-size: 10px;
}
@media ${device.tablet}{
    font-size: 12px;
}
`
export const FooterFreepik = styled.div`
font-size: 15px;
text-align: center;
@media ${device.laptopM}{
  margin-top: 6px;
    font-size: 12px;
}
@media ${device.laptopSM}{
    font-size: 11px;
}
@media (max-width: 960px) {
  font-size: 9px;
}
@media ${device.tablet}{
    font-size: 11px;
}
`