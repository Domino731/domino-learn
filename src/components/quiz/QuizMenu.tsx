import { FunctionComponent } from "react";
import {
    QuizCSSColumn,
    QuizHeader,
    QuizHeaderLink,
    QuizHTMLColumn,
    QuizJSColumn,
    QuizMenuCard,
    QuizMenuCoins,
    QuizMenuCoinsAmount,
    QuizMenuCoinsBar,
    QuizMenuCoinsImg,
    QuizMenuGraphic,
    QuizMenuName,
    QuizMenuTitle,
    QuizMenuWrapper,
} from "../../style/elements/quiz/quizMenu";
import { Link } from "react-router-dom";
import { htmlClass } from "../../properties/htmlClass";
import { cssClass } from "../../properties/cssClass";
import { jsClass } from "../../properties/jsClass";
import coins from "../../images/coins.svg";
import { getQuizCoins } from "../../functions/localStorage";

// Component renders menu by which the user can select the particular quiz
export const QuizMenu: FunctionComponent = (): JSX.Element => {
    return <main>

        {/* header */}
        <QuizHeader>
            <QuizHeaderLink><Link to="/">DOMINO LEARN</Link></QuizHeaderLink>
        </QuizHeader>

        {/* available quizes */}
        <QuizMenuWrapper>
            <QuizMenuTitle>
                CHOSE THE QUIZ
            </QuizMenuTitle>

            {/* html card */}
            <QuizHTMLColumn>

                <Link to="/quiz/html">
                    <QuizMenuCard>
                        {/* graphic */}
                        <QuizMenuGraphic src={htmlClass.getFigureSrc()} />

                        {/* name */}
                        <QuizMenuName>HTML</QuizMenuName>

                        {/* coins amount */}
                        <QuizMenuCoins>Your coins</QuizMenuCoins>
                        <QuizMenuCoinsBar>
                            <QuizMenuCoinsImg src={coins} />
                            <QuizMenuCoinsAmount>{getQuizCoins('html')}</QuizMenuCoinsAmount>
                        </QuizMenuCoinsBar>
                    </QuizMenuCard>
                </Link>

            </QuizHTMLColumn>

            {/* css card */}
            <QuizCSSColumn>

                <Link to="/quiz/css">
                <QuizMenuCard>
                        {/* graphic */}
                        <QuizMenuGraphic src={cssClass.getFigureSrc()} />

                        {/* name */}
                        <QuizMenuName>CSS</QuizMenuName>

                        {/* coins amount */}
                        <QuizMenuCoins>Your coins</QuizMenuCoins>
                        <QuizMenuCoinsBar>
                            <QuizMenuCoinsImg src={coins} />
                            <QuizMenuCoinsAmount>{getQuizCoins('css')}</QuizMenuCoinsAmount>
                        </QuizMenuCoinsBar>
                    </QuizMenuCard>
                </Link>
            </QuizCSSColumn>

            {/* js card */}
            <QuizJSColumn>
                <Link to="/quiz/js">
                <QuizMenuCard>
                        {/* graphic */}
                        <QuizMenuGraphic src={jsClass.getFigureSrc()} />

                        {/* name */}
                        <QuizMenuName>JavaScript</QuizMenuName>

                        {/* coins amount */}
                        <QuizMenuCoins>Your coins</QuizMenuCoins>
                        <QuizMenuCoinsBar>
                            <QuizMenuCoinsImg src={coins} />
                            <QuizMenuCoinsAmount>{getQuizCoins('js')}</QuizMenuCoinsAmount>
                        </QuizMenuCoinsBar>
                    </QuizMenuCard>
                </Link>
            </QuizJSColumn>

        </QuizMenuWrapper>
    </main>
}