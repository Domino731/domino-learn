import {FunctionComponent} from "react";
import {AdditionsWrapper, AdditionItem, AdditionImg, AdditionTitle } from "../../style/elements/homePage/additions";
import quiz from "../../images/quiz.png"
import coding from "../../images/coding.png"
import {Link} from "react-router-dom";

export const Additions : FunctionComponent = ():JSX.Element => {
    return <AdditionsWrapper>
          <Link to="/quiz-menu">
              <AdditionItem>
                  <AdditionImg src={quiz} alt="quiz"/>
                  <AdditionTitle>Quiz</AdditionTitle>
              </AdditionItem>
          </Link>
           <Link to="/code-editor">
               <AdditionItem>
                   <AdditionImg src={coding} alt="coding"/>
                   <AdditionTitle>Code Editor</AdditionTitle>
               </AdditionItem>
           </Link>
    </AdditionsWrapper>
}