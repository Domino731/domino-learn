import {FunctionComponent, useEffect} from "react";
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
import {Link, useHistory} from "react-router-dom";
import {getQuizCoins, saveQuizCoinsToLS} from "../../functions/localStorage";

/**
 * Component which renders quiz summary - gained coins, all coins, correct answers,
 * @param item - an object with data about a particular language quiz -> figure src , icon src
 * @param itemPath - the path the user will be redirected to when he choose to do a quiz again
 * @param coinsAmount - gained coins
 * @param correctQuestions - correct questions
 * @param questionsAmount - the number of all questions that are needed to display the bar with the correct tasks (QuizSummaryBar)
 */
export const QuizSummary: FunctionComponent<IFPropsQuizSummary> = ({
                                                                       item,
                                                                       itemPath,
                                                                       coinsAmount,
                                                                       correctQuestions,
                                                                       questionsAmount
                                                                   }): JSX.Element => {

    // save quiz coins into local storage.
    useEffect(() => {
        saveQuizCoinsToLS(coinsAmount, itemPath);
    }, []);

    const history = useHistory()

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

        <QuizSummaryBar questions={questionsAmount} correct={correctQuestions}>
            <div/>
        </QuizSummaryBar>

        <QuizSummaryCoins>
            <div>
                <img src={coins} alt="coins"/> Coins earned: <span>{coinsAmount}</span>
            </div>
            <div>
                <img src={coins} alt="coins"/> Coins owned: <span>{getQuizCoins(itemPath) + coinsAmount}</span>
            </div>
        </QuizSummaryCoins>

        <QuizSummaryPanel>

            {/*do a quiz again*/}
            <div>
                <strong onClick={() => history.go(0)}>Once more!</strong>
            </div>

            {/*return to quiz menu*/}
            <div>
                <Link to="/quiz-menu">Return</Link>
            </div>
        </QuizSummaryPanel>

        {/*freepik icons authors*/}
        <QuizSummaryIcons>
            <QuizFreepik>
                <img src={coins} alt="coins"/>
                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel
                    perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </QuizFreepik>
        </QuizSummaryIcons>

    </QuizSummaryWrapper>


}