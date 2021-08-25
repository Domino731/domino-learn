import {FunctionComponent, useEffect, useState} from "react";
import {TaskContainer} from "../../style/elements/tasks/task";
import {CssTaskContent} from "./CssTaskContent";
import {IFAllTasks, IFCssTask, IFPropsTask} from "../../types/types";
import {getAllTasks, getSpecificCssTask} from "../../firebase/operations";
import {CssTaskFooter} from "./CssTaskFooter";
import {Error404} from "../other/Error404";
import {Loading} from "../other/Loading";

export const CssTask: FunctionComponent<IFPropsTask> = (props): JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<IFCssTask | null>(null);

    //state with all tasks
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null>(null);

    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getSpecificCssTask(parseFloat(props.match.params.taskNumber), setTask);
        getAllTasks("cssTasks", "solvedCssTasks", setAllTasks);
    }, [props.match.params.taskNumber]);


    if (task === null || allTasks === null) {
        return <Loading/>
    }

    if (task === undefined || allTasks === undefined) {
        return <Error404 redirectPath={"/"}/>
    }

    return <TaskContainer>
        <CssTaskContent task={task} allTaskLength={allTasks.length}/>
        <CssTaskFooter allTasks={allTasks} taskNumber={task.number}/>
    </TaskContainer>
}
