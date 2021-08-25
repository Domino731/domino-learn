import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizItem, IFQuizQuestion} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";
import {QuizContainer} from "../../style/elements/quiz/quiz";
import {QuizQuestion} from "./QuizQuestio";
import {QuizSummary} from "./QuizSummary";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";
import {Loading} from "../other/Loading";
import {Error404} from "../other/Error404";


export const Quiz: FunctionComponent<IFPropsQuiz> = (props): JSX.Element => {

    // state with quiz data -> questions, answers..
    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null>(null)

    // using this state, a single  QuizQuestion  component will be rendered
    const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0)

    // state which containing number of correct answers, which are visible on the summary
    const [points, setPoints] = useState<number>(0)

    // state containing coins, each question has a certain amount of coins,
    // if the user answers well they will be added to this state,
    // in the summary will be saved to local storage
    const [coins, setCoins] = useState<number>(0)

    // an object with data about a particular language quiz -> figure src , icon src
    const [item, setItem] = useState< IFQuizItem | null | undefined>(null)

    // when component mounted get quiz questions data
    useEffect(() => {
        getQuizQuestions(props.match.params.item, setQuizData)
    }, [props.match.params])

    // set the item state based on the path
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
            default:
                return setItem(undefined)
        }

    }, [props.match.params])

    //  change currIndexState -> switch to next questions
    const handleChangeCurrIndex = (): void => setCurrQuestionIndex(prev => prev + 1)
    // add points
    const addPoints = (): void => setPoints(prev => prev + 1)
    // add coins
    const addCoins = (coins: number): void => setCoins(prev => prev + coins)

    if(item === undefined){
        return <Error404 redirectPath={`/quiz-menu`}/>
    }
    if (quizData === null || item === null) {
        return <Loading/>
    }

    return <QuizContainer>

        {/*questions*/}
        {currQuestionIndex < quizData.length && <QuizQuestion data={quizData[currQuestionIndex]}
                                                              currQuestionIndex={currQuestionIndex}
                                                              switchToNextQuestion={handleChangeCurrIndex}
                                                              questionsLeft={quizData.length - currQuestionIndex}
                                                              addPoint={addPoints}
                                                              addCoins={addCoins}
        />}

        {/*summary*/}
        {currQuestionIndex >= quizData.length && <QuizSummary item={item}
                                                              itemPath={props.match.params.item}
                                                              questionsAmount={quizData.length}
                                                              correctQuestions={points}
                                                              coinsAmount={coins}
        />}

    </QuizContainer>
}