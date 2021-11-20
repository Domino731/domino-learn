import styled from "styled-components";

export {}
export const Container = styled.div`
  max-width: 1920px;
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
interface PropsBackgroundAttachmentFixed{
  bgSource: string
}
export const BackgroundAttachmentFixed = styled.div<PropsBackgroundAttachmentFixed>`
overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url(${props => props.bgSource}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

