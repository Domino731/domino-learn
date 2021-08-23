import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background: ${props => props.theme.color.yellow};
`
export const FooterMediaList = styled.ul`
 display: flex;
  justify-content: space-between;
  width: 261px;
  margin-right: 23px;
  @media ${device.laptopSM} {
    justify-content: space-around;
  }
`

export const FooterMediaItem = styled.li`
 a{
   font-size: 51px;
   color: ${props => props.theme.color.gray};
   transition: 0.2s;
   &:hover{
     transition: 0.2s;
     color: ${props => props.theme.color.red};
   }
   @media ${device.laptopSM} {
     font-size: 41px;
   }
 }
`