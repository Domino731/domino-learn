import {
    TasksSelectWrapper,
    TasksSelectIcon,
    TasksSelectFigure,
    TasksSelectTitle
} from "../../style/elements/homePage/choseTask";
import {FunctionComponent} from "react";
import {IFPropsTaskSelect} from "../../types/types";

/**
 * subcomponent for ChoseTask, renders single box with checkbox, whose change will retrieve jobs from a specific category
 * @param task -  value that is needed to check if the checkbox is checked
 * @param chosenTask - currently selected task type by the user
 * @param setTasks - change selected tasks type
 * @param language - language data -> figure src, icon src, name
 * @constructor
 */
export const TaskSelectSingle: FunctionComponent<IFPropsTaskSelect> = ({
                                                                           task,
                                                                           chosenTask,
                                                                           setTasks,
                                                                           language
                                                                       }): JSX.Element => {

    return <TasksSelectWrapper>

        <TasksSelectFigure src={language.getFigureSrc()} alt={language.getFigureAlt()}/>
        <input type="radio" name={`${language.getLanguageName()}_checkbox`} value={task} onChange={setTasks}
               checked={chosenTask === task}/>
        <span/>
        <TasksSelectTitle>
            <TasksSelectIcon src={language.getIconSrc()} alt={language.getIconAlt()}/>
            <strong>{language.getLanguageName()}</strong>
        </TasksSelectTitle>
    </TasksSelectWrapper>
}