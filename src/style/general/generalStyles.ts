import styled from "styled-components";
export {}
export const Container = styled.section`
  max-width: 1980px;
  margin: 0 auto;
`
export const FreepikThanks = styled.div`
  padding: 7px 13px;
  font-size: 1.375rem;
  & > div{
    display: flex;
  }
  span{
    margin-right: 0.313rem;
    margin-bottom: 3px;
    img{
      width: 1.375rem;
      height: auto;
      object-fit: cover;
    }
  }
`