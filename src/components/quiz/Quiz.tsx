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

/** Component which is rendering 10 random quiz question */
export const Quiz: FunctionComponent<IFPropsQuiz> = (): JSX.Element => {

    // references
    // @ts-ignore
    const { quizType } = useParams();

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
    useEffect(() : any => {
        // reset quiz
        setCurrQuestionIndex(0);

        // fetch data
        return getQuizQuestions(quizType, setQuizData);
    }, [quizType])

    // set the ProgrammingLanguageData state based on the path
    useEffect(() => {
        switch (quizType) {
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

    }, [quizType])

    // listening for quizData state changes, needed to restart quiz
    useEffect(()=> {
        // set first question
       return setCurrQuestionIndex(0);
    },[quizData]);
    
    /** change currIndexState -> switch to next questions */
    const handleChangeCurrIndex = (): void => setCurrQuestionIndex(prev => prev + 1);

    /** change points state -> add new point */
    const addPoints = (): void => setPoints(prev => prev + 1);

    /** change coins state - add coins */
    const addCoins = (coins: number): void => setCoins(prev => {
        console.log(typeof coins)
      return prev + coins  
    });

    /** change quizData state -> reset quiz */
    const resetQuiz = () => getQuizQuestions(quizType, setQuizData);
    
    /** get dynamic background image */
    const getDynamicBg = () => {
        if(quizType === 'html'){
            return HTMLBg;
        }
        else if (quizType === 'css'){
            return CSSBg;
        }
        else if (quizType === 'js'){
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
        {currQuestionIndex < 10 && <QuizQuestion data={quizData[currQuestionIndex]}
            currQuestionIndex={currQuestionIndex}
            switchToNextQuestion={handleChangeCurrIndex}
            questionsLeft={quizData.length - currQuestionIndex}
            addPoint={addPoints}
            addCoins={addCoins}
            characterGraphic={programmingLanguageData.figureSrc}
        />}

        {/*summary panel*/}
        {currQuestionIndex >= 10 && <QuizSummary 
            languageLanguageData={programmingLanguageData}
            questionsAmount={quizData.length}
            correctQuestions={points}
            coinsAmount={coins}
            resetQuiz={resetQuiz}
        />}

    </QuizContainer>
}