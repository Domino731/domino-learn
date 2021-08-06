import {TasksSelectWrapper, TasksSelectIcon, TasksSelectFigure, TasksSelectTitle} from "../../style/elements/homePage/choseTask";
import {FunctionComponent} from "react";

type TaskSelectProps = {
    task: "htmlTasks" | "jsTasks" | "cssTasks"
    chosenTask: string,
    setTasks: (e: React.ChangeEvent<HTMLInputElement>) => void
    language: {
        getIconAlt: () => string,
        getIconSrc: () => string,
        getLanguageName: () => string,
        getFigureSrc: () => string,
        getFigureAlt: () => string,
    }
}
export const TaskSelectSingle: FunctionComponent<TaskSelectProps> = ({
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
        <input type="radio" value={task} onChange={changeTasks} checked={chosenTask === task}/>
        <span/>
        <TasksSelectTitle>
            <TasksSelectIcon src={language.getIconSrc()} alt={language.getIconAlt()}/>
            <label>{language.getLanguageName()}</label>
        </TasksSelectTitle>
    </TasksSelectWrapper>
}