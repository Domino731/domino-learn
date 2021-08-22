import {
    TasksSelectWrapper,
    TasksSelectIcon,
    TasksSelectFigure,
    TasksSelectTitle
} from "../../style/elements/homePage/choseTask";
import {FunctionComponent} from "react";
import {IFPropsTaskSelect} from "../../types/types";

export const TaskSelectSingle: FunctionComponent<IFPropsTaskSelect> = ({
                                                                           task,
                                                                           chosenTask,
                                                                           setTasks,
                                                                           language
                                                                       }): JSX.Element => {

    const changeTasks = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTasks(e)
    }
    return <TasksSelectWrapper>

        <TasksSelectFigure src={language.getFigureSrc()} alt={language.getFigureAlt()}/>
        <input type="radio" name={language.getLanguageName()} value={task} onChange={changeTasks} checked={chosenTask === task}/>
        <span/>
        <TasksSelectTitle>
            <TasksSelectIcon src={language.getIconSrc()} alt={language.getIconAlt()}/>
            <strong>{language.getLanguageName()}</strong>
        </TasksSelectTitle>
    </TasksSelectWrapper>
}