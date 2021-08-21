import styled from "styled-components";

export const QuizContainer = styled.main`
  max-width: 1980px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.yellow};
`
export const QuizQuestionWrapper = styled.form`
  width: 35%;
  background: #fff;
  padding: 1.563rem 0.938rem;
`
export const QuizQuestionNumber = styled.span`
  display: block;
  font-weight: 900;
  font-size: 2.75rem;
`
export const QuizQuestionTitle = styled.h2`
  padding: 0.75rem 0;
  font-size: 1.563rem;
`
export const QuizCheckboxWrapper = styled.div`
  display: flex;
`
export const QuizAnswerLetter = styled.span`
  max-width: 2.313rem;
  max-height: 2.313rem;
  min-width: 2.313rem;
  min-height: 2.313rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${props => props.theme.color.purple};
`
export const QuizAnswer = styled.div`
  position: relative;
  display: flex;
  font-size: 1.25rem;
  margin: 0.625rem 0;
  padding: 0.375rem  0.313rem;
  border-radius: 0.813rem;
  transition: 0.1s;
  &:hover{
    background: ${props => props.theme.color.white};
  }
  label{
    margin-left: 0.563rem;
    padding-top: 0.438rem;
  }
  input{
    position: absolute;
    left: 0;
    top: 0;
    appearance: none;
    width: 100%;
    height: 100%;
  }
`
export const QuizQuestionBtn = styled.button`
  display: block;
  margin: 2px auto;
  padding: 0.563rem 1.438rem;
  background: ${props => props.theme.color.purple};
  color: #fff;
  transition: 0.2s;
  &:hover{
    padding: 0.563rem 2.25rem;
  }
`