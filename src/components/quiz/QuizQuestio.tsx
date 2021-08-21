import {FunctionComponent, useState} from "react";
import {IFPropsQuizQuestion} from "../../types/types";
import {QuizQuestionWrapper, QuizQuestionTitle, QuizQuestionNumber, QuizAnswer, QuizAnswerLetter, QuizQuestionBtn} from "../../style/elements/quiz/quiz";
import {alphabet} from "../../properties/other";

export const QuizQuestion: FunctionComponent<IFPropsQuizQuestion> = ({data, currQuestionIndex}): JSX.Element => {


    const [userAnswers, setUserAnswers] = useState<any>([])

    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    // selecting answer
    const handleChangeSelectedAnswer = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        // checking if user already select the answer
      if(selectedAnswer === ""){
           setSelectedAnswer(e.target.value)
          const answerIndex = data.answers.findIndex(el => el.text === e.target.value)
          console.log(answerIndex);
      }
    }

    return <QuizQuestionWrapper>
        <QuizQuestionNumber>{currQuestionIndex + 1}.</QuizQuestionNumber>
        <QuizQuestionTitle>{data.question}</QuizQuestionTitle>

      {/*show only if user hasn't chosen answer*/}
        {
            selectedAnswer === "" && data.answers.map((el, num) => <QuizAnswer>
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

        <QuizQuestionBtn>Next</QuizQuestionBtn>

    </QuizQuestionWrapper>
}