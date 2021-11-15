import {FunctionComponent} from "react";
import {
    QuizCSSColumn,
    QuizHeader,
    QuizHeaderLink,
    QuizHTMLColumn,
    QuizJSColumn,
    QuizMenuTitle,
    QuizMenuWrapper,
} from "../../style/elements/quiz/quizMenu";
import {Link} from "react-router-dom";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";
import coins from "../../images/coins.png"
import {getQuizCoins} from "../../functions/localStorage";

// Component renders menu by which the user can select the quiz
export const QuizMenu: FunctionComponent = (): JSX.Element => {
    return <main>
        <QuizHeader>
            <QuizHeaderLink><Link to="/">DOMINO LEARN</Link></QuizHeaderLink>
        </QuizHeader>

        <QuizMenuWrapper>
              <QuizMenuTitle/>
             <QuizHTMLColumn>
                  <Link to="/quiz/html"></Link>
             </QuizHTMLColumn>
        
            <QuizCSSColumn>
            <Link to="/quiz/css"></Link>
            </QuizCSSColumn>
            
            <QuizJSColumn>
                 <Link to="/quiz/js"></Link>
            </QuizJSColumn>
           
        </QuizMenuWrapper>
    </main>
}