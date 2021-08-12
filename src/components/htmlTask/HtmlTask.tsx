import {FunctionComponent, useEffect, useState} from "react";
import {HtmlTaskContainer} from "../../style/elements/tasks/htmlTask";
import {HtmlTaskFooter} from "./HtmlTaskFooter";
import {HtmlTaskContent} from "./HtmlContent";
import {getAllTasks, getTask} from "../../firebase/operations";

import {IFAllTasks, IFPropsHtmlTask, IFTask} from "../../types/types";





export const HtmlTask: FunctionComponent<IFPropsHtmlTask> = (props): JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<IFTask | null>(null)

    //state with all tasks
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null >(null)

    useEffect(() => {
        getTask("htmlTasks", parseFloat(props.match.params.taskNumber), setTask)
        getAllTasks("htmlTasks", setAllTasks)
    }, [props.match.params.taskNumber])

    if (task === null || allTasks === null) {
        return <h1>Loading...</h1>
    }

    return <HtmlTaskContainer>
        <HtmlTaskContent task={task}/>
        <HtmlTaskFooter taskNumber={task.number} allTasks={allTasks}/>
    </HtmlTaskContainer>
}