import {FunctionComponent} from "react";
import {QuizSummaryWrapper} from "../../style/elements/quiz/quiz";
import {QuizSummaryBar, QuizSummaryTitle, QuizSummaryImages, QuizSummaryTable, QuizSummaryPanel, QuizSummaryCoins} from "../../style/elements/quiz/quiz";

export const QuizSummary : FunctionComponent = () : JSX.Element => {
    return <QuizSummaryWrapper>
         <QuizSummaryTitle>Summary</QuizSummaryTitle>
        <QuizSummaryImages>asd</QuizSummaryImages>
        <QuizSummaryTable>asd</QuizSummaryTable>
        <QuizSummaryBar>asd</QuizSummaryBar>
        <QuizSummaryCoins>asd</QuizSummaryCoins>
        <QuizSummaryPanel>asdasdasdasd</QuizSummaryPanel>
    </QuizSummaryWrapper>
}