import {FunctionComponent, useState} from "react";
import {IFPropsQuizQuestion} from "../../types/types";
import {
    QuizQuestionWrapper,
    QuizQuestionTitle,
    QuizQuestionNumber,
    QuizAnswer,
    QuizAnswerLetter,
    QuizQuestionBtn,
    QuizQuestionRow,
    QuizCoins,
    QuizQuestionsLeft,
    QuizSpecs
} from "../../style/elements/quiz/quiz";
import {alphabet} from "../../properties/other";
import coins from "../../images/coins.png";
import { useParams } from "react-router";

/**
 * component which renders a single question for a quiz
 * @param data - question data - question, answers, coins
 * @param currQuestionIndex - number of current question
 * @param switchToNextQuestion - function that will switch to next question,
 * by changing the state of the component that is above it
 * @param questionsLeft - number of questions that have been left
 * @param addPoint - function that add point
 * @param addCoins - function that add coins
 * @param characterGraphic - graphic of selected type of quiz - html,js or css
 */
export const QuizQuestion: FunctionComponent<IFPropsQuizQuestion> = ({
                                                                         data,
                                                                         currQuestionIndex,
                                                                         switchToNextQuestion, questionsLeft,
                                                                         addPoint,
                                                                         addCoins,
                                                                         characterGraphic,
                                                                     }): JSX.Element => {

                                                                          
    // references
     // @ts-ignore
    const {quizType} = useParams();      

    // state with selected answer by user
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    //
    /**  choose an answer, it can be only selected once */
    const handleChangeSelectedAnswer = async (e: React.ChangeEvent<HTMLInputElement>, answer: any) => {
        // checking if user already selected the answer
        if (selectedAnswer === "") {
            // set the state
            setSelectedAnswer(e.target.value);

            // add points and coins if answer is correct
            if (answer.correct) {
                addCoins(data.coins);
                addPoint();
            }
        }
    }

    /** show next question */
    const switchToNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // clear answer
        setSelectedAnswer("");
        // switch to next
        switchToNextQuestion();
    };

    /** function that change checkbox background color when user select his answer */ 
    const changeCheckboxBg = (e: any) => {
        if (selectedAnswer !== "") {
            if (e.correct === true) {
                return true
            }
            if (e.text === selectedAnswer && e.correct) {
                return true
            }
            if (e.text === selectedAnswer && e.correct === false) {
                return false
            }
        }
    }

    return <QuizQuestionWrapper onSubmit={switchToNext}>

        {/*questions left*/}
        <QuizQuestionRow>
            <QuizQuestionsLeft>Questions left: {questionsLeft}</QuizQuestionsLeft>
        </QuizQuestionRow>


        <QuizQuestionRow>
            {/*current question number*/}
            <QuizQuestionNumber>{currQuestionIndex + 1}.</QuizQuestionNumber>

            {/*question coins which ara available to gain by user*/}
            <QuizCoins title='Available coins to gain at correct answer'><img src={coins} alt="coints"/><span>{data.coins}</span></QuizCoins>
        </QuizQuestionRow>

        {/*question title*/}
        <QuizQuestionTitle dangerouslySetInnerHTML={{__html:data.question}}/>

        {/* rendering questions */}
        {
            data.answers.map((el: any, num: any) => <QuizAnswer correct={changeCheckboxBg(el)}
                                                                key={`answer_${alphabet[num]}_${num}`}>
                <QuizAnswerLetter>{alphabet[num]}</QuizAnswerLetter>
                <label>
                    {/* question text */}
                    <p dangerouslySetInnerHTML={{__html:el.text}}/>
                      
                    {/* input whose color will change when user select the answer -> 
                    correct answer: green background
                    incorrect answer: red background
                    */}
                    <input type="checkbox"
                           value={el.text}
                           checked={selectedAnswer === el.text}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeSelectedAnswer(e, el)}
                           name={`${data.question}_${alphabet[num]}`}
                    />
                </label>
            </QuizAnswer>)
        }

        {/*show only if user has selected the answer*/}
        {selectedAnswer !== "" && <QuizQuestionBtn>Next</QuizQuestionBtn>}


        {/*bottom wrapper with current quiz type name*/}
        <QuizSpecs>
            <img src={characterGraphic} alt="Programming"/>
            <strong>{quizType.toUpperCase()} quiz </strong>
        </QuizSpecs>

    </QuizQuestionWrapper>
}