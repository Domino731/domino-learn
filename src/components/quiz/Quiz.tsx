import { FunctionComponent, useEffect, useState } from "react";
import { IFPropsQuiz, IFQuizItem, IFQuizQuestion } from "../../types/types";
import { getQuizQuestions } from "../../firebase/operations";
import { QuizContainer } from "../../style/elements/quiz/quiz";
import { QuizQuestion } from "./QuizQuestio";
import { QuizSummary } from "./QuizSummary";
import { htmlClass } from "../../properties/htmlClass";
import { cssClass } from "../../properties/cssClass";
import { jsClass } from "../../properties/jsClass";
import { Loading } from "../other/Loading";
import { Error404 } from "../other/Error404";
import { useParams } from "react-router";
import HTMLBg from "../../images/quiz_html_background.svg";
import CSSBg from "../../images/quiz_css_background.svg";
import JSBg from "../../images/quiz_js_background.svg";

export const Quiz: FunctionComponent<IFPropsQuiz> = (props): JSX.Element => {

    // references
    // @ts-ignore
    const { language } = useParams();

    // state with quiz data -> questions, answers..
    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null>(null);

    // using this state, a single  QuizQuestion  component will be rendered with the particular question
    const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0);

    // state which containing number of correct answers, using in the summary panel
    const [points, setPoints] = useState<number>(0);

    // state containing coins, each question has a specific amount of coins,
    // if the user answers well they will be added to this state,
    // in the summary coins will be saved to local storage
    const [coins, setCoins] = useState<number>(0);

    // an object with data about a particular language quiz -> figure src , icon src. Set by useEffect() hook which is listening for route path changes ->
    const [programmingLanguageData, setProgrammingLanguageData] = useState<IFQuizItem | null | undefined>(null);

    // when component mounted get quiz questions data
    useEffect(() => {
        // reset quiz
        setCurrQuestionIndex(0);

        // fetch data
        return getQuizQuestions(language, setQuizData);
    }, [language])

    // set the item state based on the path
    useEffect(() => {
        switch (language) {
            case "html":
                return setProgrammingLanguageData({
                    figureSrc: htmlClass.getFigureSrc(),
                    figureAlt: htmlClass.getFigureAlt(),
                    iconSrc: htmlClass.getIconSrc(),
                    iconAlt: htmlClass.getIconAlt()
                });
            case "css":
                return setProgrammingLanguageData({
                    figureSrc: cssClass.getFigureSrc(),
                    figureAlt: cssClass.getFigureAlt(),
                    iconSrc: cssClass.getIconSrc(),
                    iconAlt: cssClass.getIconAlt()
                })
            case "js":
                return setProgrammingLanguageData({
                    figureSrc: jsClass.getFigureSrc(),
                    figureAlt: jsClass.getFigureAlt(),
                    iconSrc: jsClass.getIconSrc(),
                    iconAlt: jsClass.getIconAlt()
                })
            default:
                return setProgrammingLanguageData(undefined);
        }

    }, [language])

    /** change currIndexState -> switch to next questions */
    const handleChangeCurrIndex = (): void => setCurrQuestionIndex(prev => prev + 1);

    /** change points state -> add new point */
    const addPoints = (): void => setPoints(prev => prev + 1);

    /** add coins */
    const addCoins = (coins: number): void => setCoins(prev => prev + coins);

    /** get dynamic background image */
    const getDynamicBg = () => {
        if(language === 'html'){
            return HTMLBg;
        }
        else if (language === 'css'){
            return CSSBg;
        }
        else if (language === 'js'){
            return JSBg;
        }
        else {
           return 'white'; 
        } 
    }

    // check if language param is correct
    if (programmingLanguageData === undefined) {
        return <Error404 redirectPath={`/quiz-menu`} />
    }

    // wait for data
    if (quizData === null || programmingLanguageData === null) {
        return <Loading />
    }

    return <QuizContainer background={getDynamicBg()}>

        {/*quiz*/}
        {currQuestionIndex <= quizData.length && <QuizQuestion data={quizData[currQuestionIndex]}
            currQuestionIndex={currQuestionIndex}
            switchToNextQuestion={handleChangeCurrIndex}
            questionsLeft={quizData.length - currQuestionIndex}
            addPoint={addPoints}
            addCoins={addCoins}
            languageName={language}
            characterGraphic={programmingLanguageData.figureSrc}
        />}

        {/*summary panel*/}
        {currQuestionIndex > quizData.length && <QuizSummary item={programmingLanguageData}
            itemPath={language}
            questionsAmount={quizData.length}
            correctQuestions={points}
            coinsAmount={coins}
        />}

    </QuizContainer>
}