import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizQuestion} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";
import {QuizContainer, QuizFreepik} from "../../style/elements/quiz/quiz";
import {QuizQuestion} from "./QuizQuestio";
import {QuizSummary} from "./QuizSummary";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";

export const Quiz: FunctionComponent<IFPropsQuiz> = (props): JSX.Element => {

    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null>(null)

    const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0)

    const [points, setPoints] = useState<number>(0)

    const [coins, setCoins] = useState<number>(0)

    const [item, setItem] = useState<any>(null)
    useEffect(() => {
        getQuizQuestions(props.match.params.item, setQuizData)
    }, [props.match.params])

    useEffect(() => {
        switch (props.match.params.item) {
            case "html":
                return setItem({
                    figureSrc: htmlClass.getFigureSrc(),
                    figureAlt: htmlClass.getFigureAlt(),
                    iconSrc: htmlClass.getIconSrc(),
                    iconAlt: htmlClass.getIconAlt()
                })
            case "css":
                return setItem({
                    figureSrc: cssClass.getFigureSrc(),
                    figureAlt: cssClass.getFigureAlt(),
                    iconSrc: cssClass.getIconSrc(),
                    iconAlt: cssClass.getIconAlt()
                })
            case "js":
                return setItem({
                    figureSrc: jsClass.getFigureSrc(),
                    figureAlt: jsClass.getFigureAlt(),
                    iconSrc: jsClass.getIconSrc(),
                    iconAlt: jsClass.getIconAlt()
                })
        }

    }, [props.match.params])

    useEffect(()=>{
        console.log(coins)
    },[coins])
    const handleChangeCurrIndex = (): void => setCurrQuestionIndex(prev => prev + 1)
    const addPoints = (): void => setPoints(prev => prev + 1)
    const addCoins = (coins: number): void => setCoins(prev => prev + coins)



    if (quizData === null || item === null) {
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
        {currQuestionIndex >= quizData.length && <QuizSummary item={item}
                                                              restartPath={props.match.params.item}
         questionsAmount={quizData.length}
                                                              correctQuestions={points}
                                                              coinsAmount={coins}
        />}



    </QuizContainer>
}