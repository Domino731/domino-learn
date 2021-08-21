import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizQuestion} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";
import {QuizContainer} from "../../style/elements/quiz/quiz";
import {QuizQuestion} from "./QuizQuestio";

export const Quiz : FunctionComponent <IFPropsQuiz>= (props) : JSX.Element => {

    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null >(null)

    const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0)
    useEffect(()=>{
       getQuizQuestions(props.match.params.item, setQuizData)
    },[props.match.params])

    const handleChangeCurrIndex = () : void => setCurrQuestionIndex(prev => prev + 1)

    useEffect(()=>{
        if(quizData !== null){
            console.log(quizData[currQuestionIndex])
        }
    },[currQuestionIndex])
    if(quizData === null){
        return  <h1>Loading...</h1>
    }
    return <QuizContainer>
        <QuizQuestion data={quizData[0]} currQuestionIndex={currQuestionIndex} switchToNextQuestion={handleChangeCurrIndex}/>
    </QuizContainer>
}