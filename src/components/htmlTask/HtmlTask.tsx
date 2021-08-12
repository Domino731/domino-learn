import {FunctionComponent, useEffect, useState} from "react";
import {HtmlTaskContainer} from "../../style/elements/tasks/htmlTask";
import {HtmlTaskFooter} from "./HtmlTaskFooter";
import {HtmlTaskContent} from "./HtmlContent";
import {getAllTasks, getTask} from "../../firebase/operations";
import {RouteComponentProps} from "react-router";
import {TypeAllTasks, TypeTask} from "../../firebase/operations";

interface MatchParams {
    taskNumber: string
}

interface HtmlTaskProps extends RouteComponentProps<MatchParams> {
}


export const HtmlTask: FunctionComponent<HtmlTaskProps> = (props): JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<TypeTask | undefined>(undefined)

    //state with all tasks
    const [allTasks, setAllTasks] = useState<TypeAllTasks[] | undefined>(undefined)
    useEffect(() => {
        getTask("htmlTasks", parseFloat(props.match.params.taskNumber), setTask)
        getAllTasks("htmlTasks", setAllTasks)
    }, [props.match.params.taskNumber])

    if (task === undefined || allTasks === undefined) {
        return <h1>Loading...</h1>
    }

    return <HtmlTaskContainer>
        <HtmlTaskContent task={task}/>
        <HtmlTaskFooter taskNumber={task?.["number"]} allTasks={allTasks}/>
    </HtmlTaskContainer>
}