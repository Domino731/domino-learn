import styled from "styled-components";
export {}
export const Container = styled.section`
  max-width: 1980px;
  margin: 0 auto;
`
export const FreepikThanks = styled.div`
  padding: 7px 13px;
  & > div{
    display: flex;
  }
  span{
    margin-right: 0.313rem;
    img{
      width: 16px;
      height: auto;
      object-fit: cover;
    }
  }
`