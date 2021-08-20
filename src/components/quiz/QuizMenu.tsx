import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {QuizHeader, QuizHeaderLink, QuizMenuItem, QuizMenuWrapper} from "../../style/elements/quiz/quizMenu";
import {Link} from "react-router-dom";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";

export const QuizMenu : FunctionComponent = () : JSX.Element => {
    return <Container>
        <QuizHeader>
            <QuizHeaderLink><Link to="/">DOMINO LEARN</Link></QuizHeaderLink>
        </QuizHeader>
        <QuizMenuWrapper>

           <QuizMenuItem>
               <img src={htmlClass.getIconSrc()} alt={htmlClass.getIconAlt()}/>
           </QuizMenuItem>

            <QuizMenuItem>
                <img src={cssClass.getIconSrc()} alt={cssClass.getIconAlt()}/>
            </QuizMenuItem>

            <QuizMenuItem>
                <img src={jsClass.getIconSrc()} alt={jsClass.getIconAlt()}/>
            </QuizMenuItem>
        </QuizMenuWrapper>
    </Container>
}