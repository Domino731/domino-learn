import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizQuestion} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";
import {QuizContainer} from "../../style/elements/quiz/quiz";
import {QuizQuestion} from "./QuizQuestio";

export const Quiz : FunctionComponent <IFPropsQuiz>= (props) : JSX.Element => {

    const [quizData, setQuizData] = useState<IFQuizQuestion[] | null >(null)

    const [currQuestionIndex] = useState<number>(0)
    useEffect(()=>{
       getQuizQuestions(props.match.params.item, setQuizData)
    },[props.match.params])

    if(quizData === null){
        return  <h1>Loading...</h1>
    }
    return <QuizContainer>
        <QuizQuestion data={quizData[0]} currQuestionIndex={currQuestionIndex}/>
    </QuizContainer>
}