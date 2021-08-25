import {FunctionComponent, useEffect, useState} from "react";
import {TaskContainer} from "../../style/elements/tasks/task";
import {IFAllTasks, IFJsTask, IFPropsTask} from "../../types/types";
import {JsTaskContent} from "./JsTaskContent";
import {getAllTasks, getSpecificJsTask} from "../../firebase/operations";
import {JsTaskFooter} from "./JsTaskFooter";
import {Loading} from "../other/Loading";

export const JsTask: FunctionComponent<IFPropsTask> = (props): JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<IFJsTask | null>(null);

    //state with all tasks
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null>(null);

    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getSpecificJsTask(parseFloat(props.match.params.taskNumber), setTask);
        getAllTasks("jsTasks", "solvedJsTasks", setAllTasks);
    }, [props.match.params.taskNumber]);


    if (task === null || allTasks === null) {
        return <Loading/>
    }

    return <TaskContainer>
        <JsTaskContent task={task} allTaskLength={allTasks.length}/>
        <JsTaskFooter taskNumber={task.number} allTasks={allTasks}/>
    </TaskContainer>
}