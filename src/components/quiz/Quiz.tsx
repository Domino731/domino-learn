import {FunctionComponent, useEffect, useState} from "react";
import {IFPropsQuiz, IFQuizElement} from "../../types/types";
import {getQuizQuestions} from "../../firebase/operations";

export const Quiz : FunctionComponent <IFPropsQuiz>= (props) : JSX.Element => {

    const [quizData, setQuizData] = useState<IFQuizElement[] | null >(null)
    useEffect(()=>{
       getQuizQuestions(props.match.params.item, setQuizData)
    },[props.match.params])

    if(quizData === null){
        return  <h1>Loading...</h1>
    }
    return <h1>${(props.match.params.item)}</h1>
}