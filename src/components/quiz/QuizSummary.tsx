import {FunctionComponent} from "react";
import {QuizFreepik, QuizSummaryWrapper} from "../../style/elements/quiz/quiz";
import {
    QuizSummaryBar,
    QuizSummaryTitle,
    QuizSummaryImages,
    QuizSummaryGeneral,
    QuizSummaryPanel,
    QuizSummaryCoins,
    QuizSummaryIcons,
    QuizSummaryFigure,
    QuizSummaryIcon
} from "../../style/elements/quiz/quiz";
import coins from "../../images/coins.png";
import {IFPropsQuizSummary} from "../../types/types";
import {Link} from "react-router-dom";

export const QuizSummary: FunctionComponent<IFPropsQuizSummary> = ({item, restartPath, coinsAmount, correctQuestions , questionsAmount}): JSX.Element => {
    return <QuizSummaryWrapper>
        <QuizSummaryTitle>Summary</QuizSummaryTitle>
        <QuizSummaryImages>
            <QuizSummaryFigure src={item.figureSrc} alt={item.figureAlt}/>
            <QuizSummaryIcon src={item.iconSrc} alt={item.iconAlt}/>
        </QuizSummaryImages>
        <QuizSummaryGeneral>
            <div>
                Questions: <span>{questionsAmount}</span>
            </div>
            <div>
                Correct answers: <span>{correctQuestions}</span>
            </div>
            <div>
                Wrong answers: <span>{questionsAmount - correctQuestions}</span>
            </div>
        </QuizSummaryGeneral>
        <QuizSummaryBar questions={12} correct={6}>
            <div/>
        </QuizSummaryBar>
        <QuizSummaryCoins>
            <div>
                <img src={coins} alt="coins"/> Coins earned: <span>{coinsAmount}</span>
            </div>
            <div>
                <img src={coins} alt="coins"/> Coins owned: <span>1220</span>
            </div>
        </QuizSummaryCoins>
        <QuizSummaryPanel>
            <div>
              <Link to={`/quiz/${restartPath}`}>Once more!</Link>
            </div>
            <div>
                <Link to="/quiz-menu">Return</Link>
            </div>
        </QuizSummaryPanel>

        <QuizSummaryIcons>
            <QuizFreepik>
                <img src={coins} alt="coins"/>
                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel
                    perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </QuizFreepik>
        </QuizSummaryIcons>

    </QuizSummaryWrapper>


}