import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {QuizHeader,
    QuizHeaderLink,
    QuizMenuItem,
    QuizMenuWrapper,
    QuizMenuCoins,
    QuizMenuFreepik
} from "../../style/elements/quiz/quizMenu";
import {Link} from "react-router-dom";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";
import coins from "../../images/coins.png"
import {getQuizCoins} from "../../functions/localStorage";
export const QuizMenu: FunctionComponent = (): JSX.Element => {
    return <Container>
        <QuizHeader>
            <QuizHeaderLink><Link to="/">DOMINO LEARN</Link></QuizHeaderLink>
        </QuizHeader>
        <QuizMenuWrapper>

            <Link to="/quiz/html">
                <QuizMenuCoins><img src={coins} alt="coins"/><strong>{getQuizCoins("html")}</strong></QuizMenuCoins>
                <QuizMenuItem>
                    <img src={htmlClass.getIconSrc()} alt={htmlClass.getIconAlt()}/>
                </QuizMenuItem>

            </Link>
            <Link to="/quiz/css">
                <QuizMenuCoins><img src={coins} alt="coins"/><strong>{getQuizCoins("css")}</strong></QuizMenuCoins>
                <QuizMenuItem>
                    <img src={cssClass.getIconSrc()} alt={cssClass.getIconAlt()}/>
                </QuizMenuItem>
            </Link>

            <Link to="/quiz/js">
                <QuizMenuCoins><img src={coins} alt="coins"/><strong>{getQuizCoins("js")}</strong></QuizMenuCoins>
                <QuizMenuItem>
                    <img src={jsClass.getIconSrc()} alt={jsClass.getIconAlt()}/>
                </QuizMenuItem>
            </Link>
        </QuizMenuWrapper>
        <QuizMenuFreepik>
            <img src={coins} alt="coins"/>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel
                perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </QuizMenuFreepik>
    </Container>
}