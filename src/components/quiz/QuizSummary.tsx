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

export const QuizSummary: FunctionComponent<IFPropsQuizSummary> = ({
                                                                       item,
                                                                       itemPath,
                                                                       coinsAmount,
                                                                       correctQuestions,
                                                                       questionsAmount
                                                                   }): JSX.Element => {

    useEffect(()=>{
        saveQuizCoinsToLS(coinsAmount, itemPath)
    },[])


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
            <div>
                <strong onClick={() => history.go(0)}>Once more!</strong>
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