import {FunctionComponent, useEffect} from "react";
import { QuizSummaryWrapper} from "../../style/elements/quiz/quiz";
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
import {getQuizCoins, saveQuizCoinsToLS} from "../../functions/localStorage";

/**
 * Component which renders quiz summary panel - gained coins, all coins, correct answers,
 * @param item - an object with data about a particular language quiz -> figure src , icon src
 * @param coinsAmount - gained coins
 * @param languageLanguageData - data about quiz type
 * @param correctQuestions - correct questions
 * @param questionsAmount - the number of all questions that are needed to display the bar with the correct tasks (QuizSummaryBar)
 */
export const QuizSummary: FunctionComponent<IFPropsQuizSummary> = ({
    languageLanguageData,
                                                                       coinsAmount,
                                                                       correctQuestions,
                                                                       questionsAmount,
                                                                       resetQuiz
                                                                   }): JSX.Element => {


    // references 
    // @ts-ignore
    const {quizType} = useParams();

    // save quiz coins into local storage.
    useEffect(() => {
        return saveQuizCoinsToLS(coinsAmount, quizType);
    }, []);

    
    return <QuizSummaryWrapper>
        {/* title */}
        <QuizSummaryTitle>Summary</QuizSummaryTitle>

        {/* graphics whose depends on the type of quiz */}
        <QuizSummaryImages>
            <QuizSummaryFigure src={languageLanguageData.figureSrc} alt={languageLanguageData.figureAlt}/>
            <QuizSummaryIcon src={languageLanguageData.iconSrc} alt={languageLanguageData.iconAlt}/>
        </QuizSummaryImages>

        {/* overview */}
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

        {/* bar with correct answers */}
        <QuizSummaryBar questions={questionsAmount} correct={correctQuestions}>
            <div/>
        </QuizSummaryBar>

        {/* coins */}
        <QuizSummaryCoins>
            <div>
                <img src={coins} alt="coins"/> Coins earned: <span>{coinsAmount}</span>
            </div>
            <div>
                <img src={coins} alt="coins"/> Coins owned: <span>{getQuizCoins(quizType) + coinsAmount}</span>
            </div>
        </QuizSummaryCoins>

        {/* whats next */}
        <QuizSummaryPanel>

            {/*do the quiz again*/}
            <div>
                <button onClick={resetQuiz}>Once more!</button>
            </div>

            {/*return to the quiz menu*/}
            <div>
                <Link to="/quiz-menu">Return</Link>
            </div>
        </QuizSummaryPanel>

    </QuizSummaryWrapper>


}