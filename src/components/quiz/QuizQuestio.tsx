import {FunctionComponent, useState} from "react";
import {IFPropsQuizQuestion} from "../../types/types";
import {
    QuizQuestionWrapper,
    QuizQuestionTitle,
    QuizQuestionNumber,
    QuizAnswer,
    QuizAnswerLetter,
    QuizQuestionBtn,
    QuizQuestionRow,
    QuizCoins, QuizFreepik,
    QuizQuestionsLeft
} from "../../style/elements/quiz/quiz";
import {alphabet} from "../../properties/other";
import coins from "../../images/coins.png"
export const QuizQuestion: FunctionComponent<IFPropsQuizQuestion> = ({
                                                                         data,
                                                                         currQuestionIndex,
                                                                         switchToNextQuestion, questionsLeft,
                                                                         addPoint,
                                                                         addCoins
                                                                     }): JSX.Element => {

    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    // selecting answer
    const handleChangeSelectedAnswer = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // checking if user already select the answer
        if (selectedAnswer === "") {
            setSelectedAnswer(e.target.value)
        }
    }

    const switchToNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // clear answer
        setSelectedAnswer("")
        // switch to next
        switchToNextQuestion()
    }

    // function that change checkbox background color when user select his answer
    const validateAnswer = (e: any) => {
        if (selectedAnswer !== "") {
            if (e.correct === true) {
                return true
            }
            if (e.text === selectedAnswer && e.correct) {
                addCoins(data.coins)
                addPoint()
                return true
            }
            if (e.text === selectedAnswer && e.correct === false) {
                return false
            }
        }
    }

    return <QuizQuestionWrapper onSubmit={switchToNext}>
        <QuizQuestionRow>
            <QuizQuestionsLeft>Questions left: {questionsLeft}</QuizQuestionsLeft>
        </QuizQuestionRow>
        <QuizQuestionRow>
            <QuizQuestionNumber>{currQuestionIndex + 1}.</QuizQuestionNumber>
            <QuizCoins><img src={coins} alt="coints"/><span>{data.coins}</span></QuizCoins>
        </QuizQuestionRow>

        <QuizQuestionTitle>{data.question}</QuizQuestionTitle>

        {/*show only if user hasn't chosen answer*/}
        {
            data.answers.map((el: any, num: any) => <QuizAnswer correct={validateAnswer(el)}>
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


        {selectedAnswer !== "" && <QuizQuestionBtn>Next</QuizQuestionBtn>}
        <QuizFreepik>
            <img src={coins} alt="coins"/>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel
                perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </QuizFreepik>

    </QuizQuestionWrapper>
}