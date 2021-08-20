import {FunctionComponent} from "react";
import {IFPropsQuiz} from "../../types/types";

export const Quiz : FunctionComponent <IFPropsQuiz>= (props) : JSX.Element => {
    return <h1>${(props.match.params.item)}</h1>
}