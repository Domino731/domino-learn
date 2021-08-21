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
  box-shadow: 20px 20px ${props => props.theme.color.gray};
  border-radius: 20px;
`

export const QuizQuestionsLeft = styled.span`
  display: block;
  margin-bottom: 0.688rem;
`
export const QuizFreepik = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-bottom: 1.563rem;
  margin-top: 2rem;

  img {
    width: 39px;
    margin-right: 5px;
  }
`
export const QuizQuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const QuizCoins = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 39px;
  }

  span {
    display: block;
    margin-left: 5px;
    font-size: 33px;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.gray};
  }
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

interface props__QuizAnswer {
    correct?: boolean | undefined
}

export const QuizAnswer = styled.div<props__QuizAnswer>`
  position: relative;
  display: flex;
  font-size: 1.25rem;
  margin: 0.625rem 0;
  padding: 0.375rem 0.313rem;
  border-radius: 0.813rem;
  transition: 0.1s;
  background: ${(props) => {
    switch (props.correct) {
      case true:
        return props.theme.color.green
      case false:
        return props.theme.color.red
    }
  }};

  &:hover {
    background: ${(props) => {
      switch (props.correct) {
        case true:
          return props.theme.color.green
        case false:
          return props.theme.color.red
        default:
          return props.theme.color.white
      }
    }};
  }

  label {
    margin-left: 0.563rem;
    padding-top: 0.438rem;
  }

  input {
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
  margin: 0.125rem auto 1.625rem;
  padding: 0.563rem 1.438rem;
  background: ${props => props.theme.color.purple};
  color: #fff;
  transition: 0.2s;

  &:hover {
    padding: 0.563rem 2.25rem;
  }
`

export const QuizSummaryWrapper = styled.div`
  width: 35%;
  height: 600px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(10,1fr);
  padding: 1.563rem 0.938rem;
  box-shadow: 20px 20px ${props => props.theme.color.gray};
  border-radius: 20px;
`
export const QuizSummaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  font-size: 33px;
  font-weight: 900;
`
export const QuizSummaryImages = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 7;
  background: purple;
`
export const QuizSummaryTable = styled.table`
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  background: aquamarine;
`

export const QuizSummaryBar = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 7;
  background: #3d1fb1;
`
export const QuizSummaryPanel = styled.div`
  grid-column: 1 / 3;
  grid-row: 9 / 11;
  background: #47db20;
`

export const QuizSummaryCoins = styled.div`
  grid-column: 1 / 3;
  grid-row: 7 / 9;
  background: #ee10f6;
`