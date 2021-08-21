import {FunctionComponent, useState} from "react";
import {IFPropsQuizQuestion} from "../../types/types";
import {QuizQuestionWrapper, QuizQuestionTitle, QuizQuestionNumber, QuizAnswer, QuizAnswerLetter, QuizQuestionBtn} from "../../style/elements/quiz/quiz";
import {alphabet} from "../../properties/other";

export const QuizQuestion: FunctionComponent<IFPropsQuizQuestion> = ({data, currQuestionIndex}): JSX.Element => {


    const [userAnswers, setUserAnswers] = useState<any>(data.answers)

    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    // selecting answer
    const handleChangeSelectedAnswer = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        // checking if user already select the answer
      if(selectedAnswer === ""){
          setSelectedAnswer(e.target.value)
          const userAnswerIndex = data.answers.findIndex(el => el.text === e.target.value)
          const correctAnswerIndex = data.answers.findIndex(el => el.correct === true)
          let updatedUserAnswers : any = data.answers
          if(e.target.value === data.answers[correctAnswerIndex].text){
              updatedUserAnswers[currQuestionIndex] = {
                  ...data.answers[correctAnswerIndex],
                  selected: true
              }
          }
          else{
              updatedUserAnswers[currQuestionIndex] = {
                  ...data.answers[correctAnswerIndex],
                  selected: true
              }
              updatedUserAnswers[userAnswerIndex] = {
                  ...data.answers[correctAnswerIndex],
                  selected: false
              }
          }
          setUserAnswers(updatedUserAnswers)
      }
    }

    return <QuizQuestionWrapper>
        <QuizQuestionNumber>{currQuestionIndex + 1}.</QuizQuestionNumber>
        <QuizQuestionTitle>{data.question}</QuizQuestionTitle>


        {
            userAnswers.map((el : any, num : any) => <QuizAnswer correct={el.selected}>
                  <QuizAnswerLetter>{alphabet[num]}</QuizAnswerLetter>
                <label>{el.text}
                    <input type="checkbox"
                           value={el.text}
                           checked={selectedAnswer === el.text}
                           onChange={handleChangeSelectedAnswer}
                           name={`${data.question}_${alphabet[num]}`}
                    />
                </label>
            </QuizAnswer>)
        }

        {/*show only if user hasn't chosen answer*/}

        {selectedAnswer !== "" &&  <QuizQuestionBtn>Next</QuizQuestionBtn>}



    </QuizQuestionWrapper>
}