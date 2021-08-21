import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizQuestion} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";
import {QuizContainer, QuizFreepik} from "../../style/elements/quiz/quiz";
import {QuizQuestion} from "./QuizQuestio";
import {QuizSummary} from "./QuizSummary";

export const Quiz: FunctionComponent<IFPropsQuiz> = (props): JSX.Element => {

    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null>(null)

    const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0)

    const [points, setPoints] = useState<number>(0)

    const [coins, setCoins] = useState<number>(0)

    useEffect(() => {
        getQuizQuestions(props.match.params.item, setQuizData)
    }, [props.match.params])


    useEffect(() => {
        if (quizData !== null) {
            console.log(quizData[currQuestionIndex])
        }
    }, [currQuestionIndex])

    const handleChangeCurrIndex = (): void => setCurrQuestionIndex(prev => prev + 1)
    const addPoints = (): void => setPoints(prev => prev + 1)
    const addCoins = (coins: number): void => setCoins(prev => prev + coins)


    useEffect(() => {
        console.log(quizData?.length)
    }, [quizData])
    if (quizData === null) {
        return <h1>Loading...</h1>
    }
    return <QuizContainer>
        {currQuestionIndex < quizData.length && <QuizQuestion data={quizData[currQuestionIndex]}
                                                              currQuestionIndex={currQuestionIndex}
                                                              switchToNextQuestion={handleChangeCurrIndex}
                                                              questionsLeft={quizData.length - currQuestionIndex}
                                                              addPoint={addPoints}
                                                              addCoins={addCoins}
        />}
        {currQuestionIndex >= quizData.length && <QuizSummary/>}
    </QuizContainer>
}