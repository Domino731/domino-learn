import {FunctionComponent, useEffect, useState} from "react";
import {TaskContainer} from "../../style/elements/tasks/task";
import {HtmlTaskFooter} from "./HtmlTaskFooter";
import {HtmlTaskContent} from "./HtmlContent";
import {getAllTasks, getSpecificHtmlTask} from "../../firebase/operations";
import {IFAllTasks, IFPropsTask, IFHtmlTask} from "../../types/types";

export const HtmlTask: FunctionComponent<IFPropsTask> = (props): JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<IFHtmlTask | null>(null)

    //state with all tasks
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null >(null)

    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getSpecificHtmlTask(parseFloat(props.match.params.taskNumber), setTask)
        getAllTasks("htmlTasks", "solvedHtmlTasks", setAllTasks)
    }, [props.match.params.taskNumber])

    if (task === null || allTasks === null) {
        return <h1>Loading...</h1>
    }

    return <TaskContainer>
        <HtmlTaskContent task={task} allTaskLength={allTasks.length}/>
        <HtmlTaskFooter taskNumber={task.number} allTasks={allTasks}/>
    </TaskContainer>
}