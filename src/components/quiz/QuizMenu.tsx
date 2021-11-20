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
import { HTMLData } from "../../properties/htmlData";
import { CSSData } from "../../properties/cssData";
import { JSData } from "../../properties/jsData";
import coins from "../../images/coins.svg";
import { getQuizCoins } from "../../functions/localStorage";
import { BackgroundAttachmentFixed } from "../../style/general/generalStyles";
import bg from "../../images/quiz_menu_background.svg";
// Component renders menu by which the user can select the particular quiz
export const QuizMenu: FunctionComponent = (): JSX.Element => {
    return <BackgroundAttachmentFixed bgSource={bg} >

        {/* header */}
        <QuizHeader>
            <QuizHeaderLink><Link to="/">DOMINO LEARN</Link></QuizHeaderLink>
        </QuizHeader>

        {/* available quizes */}
        <QuizMenuWrapper>
            <QuizMenuTitle>
                CHOOSE THE QUIZ
            </QuizMenuTitle>

            {/* html card */}
            <QuizHTMLColumn>

                <Link to="/quiz/html">
                    <QuizMenuCard>
                        {/* graphic */}
                        <QuizMenuGraphic src={HTMLData.getFigureSrc()} />

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
                        <QuizMenuGraphic src={CSSData.getFigureSrc()} />

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
                        <QuizMenuGraphic src={JSData.getFigureSrc()} />

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
    </BackgroundAttachmentFixed>
}