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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(11, 1fr);
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
const QuizSummaryItem = styled.div`
  padding: 0.5rem;
`
export const QuizSummaryImages = styled(QuizSummaryItem)`
  grid-column: 1 / 2;
  grid-row: 2 / 7;
  position: relative;
  overflow: hidden;
`
export const QuizSummaryGeneral = styled(QuizSummaryItem)`
  grid-column: 2 / 3;
  grid-row: 2 / 5;
  font-size: 1.125rem;
  border-bottom: 5px solid ${props => props.theme.color.gray};

  div {
    margin-bottom: 0.625rem;

    span {
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.color.purple};
    }
  }
`

interface props__QuizSummaryBar {
    questions: number
    correct: number
}

export const QuizSummaryBar = styled(QuizSummaryItem)<props__QuizSummaryBar>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 5 / 7;

  div {
    width: 98%;
    position: relative;
    height: 50px;
    border: 4px solid ${props => props.theme.color.gray};
    border-radius: 15px;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      background: ${props => props.theme.color.green};
      display: block;
      height: 100%;
      width: ${props => ((props.correct / props.questions) * 100) + "%"};
    }
  }
`
export const QuizSummaryPanel = styled(QuizSummaryItem)`
  grid-column: 1 / 3;
  grid-row: 9 / 11;
  display: flex;
  font-size: 1.375rem;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    a, strong{
      margin: 0.125rem auto 1.625rem;
      padding: 0.563rem 1.438rem;
      background: ${props => props.theme.color.purple};
      color: #fff;
      transition: 0.2s;
      border-radius: 0.813rem;
      &:hover {
        cursor: pointer;
        padding: 0.563rem 2.25rem;
      }
    }
  }
`

export const QuizSummaryCoins = styled(QuizSummaryItem)`
  grid-column: 1 / 3;
  grid-row: 7 / 9;
  display: flex;
  border-top: 5px solid ${props => props.theme.color.gray};
  border-bottom: 5px solid ${props => props.theme.color.gray};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    span {
      display: block;
      margin-left: 0.188rem;
      padding: 0.188rem 0.438rem;
      border-radius: 0.25rem;
      background: ${props => props.theme.color.red};
      color: ${props => props.theme.color.white};
    }

    img {
      width: 3.125rem;
      margin-right: 0.625rem;
    }
  }
`
export const QuizSummaryIcons = styled.div`
  grid-column: 1 / 3;
  grid-row: 11 / 12;
`
export const QuizSummaryFigure = styled.img`
  position: absolute;
  z-index: 3;
  right: 0;
  width: 148px;
  height: auto;
  object-fit: cover;
`
export const QuizSummaryIcon = styled.img`
  position: absolute;
  width: 148px;
  z-index: 2;
  top: -44px;
`