import {FunctionComponent, useState} from "react";
import {IFPropsQuizQuestion} from "../../types/types";
import {QuizQuestionWrapper, QuizQuestionTitle, QuizQuestionNumber, QuizAnswer, QuizAnswerLetter, QuizQuestionBtn} from "../../style/elements/quiz/quiz";
import {alphabet} from "../../properties/other";

export const QuizQuestion: FunctionComponent<IFPropsQuizQuestion> = ({data, currQuestionIndex, switchToNextQuestion}): JSX.Element => {


    const [userAnswers, setUserAnswers] = useState<any>(data.answers)

    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    // selecting answer
    const handleChangeSelectedAnswer = async (e:React.ChangeEvent<HTMLInputElement>)  => {
        // checking if user already select the answer
      if(selectedAnswer === ""){
          setSelectedAnswer(e.target.value)
      }
    }

    const switchToNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        switchToNextQuestion()
    }
const validateAnswer = (e : any) => {
        if(selectedAnswer !== ""){
            if(e.correct === true){
                return true
            }
            if(e.text === selectedAnswer && e.correct){
                return true
            }
            if(e.text === selectedAnswer && e.correct === false){
                return false
            }
        }


}
    return <QuizQuestionWrapper onSubmit={switchToNext}>
        <QuizQuestionNumber>{currQuestionIndex + 1}.</QuizQuestionNumber>
        <QuizQuestionTitle>{data.question}</QuizQuestionTitle>

        {/*show only if user hasn't chosen answer*/}
        {
            userAnswers.map((el : any, num : any) => <QuizAnswer correct={validateAnswer(el)}>
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



        {selectedAnswer !== "" &&  <QuizQuestionBtn>Next</QuizQuestionBtn>}



    </QuizQuestionWrapper>
}