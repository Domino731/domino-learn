import {FunctionComponent, useEffect, useState} from "react";
import {TaskContainer} from "../../style/elements/tasks/task";
import {IFAllTasks, IFCssTask, IFPropsTask} from "../../types/types";
import {getAllTasks, getSpecificCssTask} from "../../firebase/operations";
import {Error404} from "../other/Error404";
import {Loading} from "../other/Loading";
import { useParams } from "react-router";
import { CSSTaskFooter } from "./CSSTaskFooter";
import { CSSTaskContent } from "./CSSTaskContent";

/** Component with CSS Task */
export const CSSTask: FunctionComponent<IFPropsTask> = (): JSX.Element => {

    // references
    // @ts-ignore
    const {taskNumber} = useParams();

    // state with task data -> introduction, target, solution..
    const [task, setTask] = useState<IFCssTask | null | undefined>(null);

    // state with all tasks, used in footer
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null>(null);

    // when component mounted fetch information about task and save upcoming data into state
    useEffect( () => {
        getSpecificCssTask(parseFloat(taskNumber), setTask, setAllTasks);
    }, [taskNumber]);

    // wait for data
    if (task === null || allTasks === null) {
        return <Loading/>
    }

    // 404 error handling
    if (task === undefined || allTasks === undefined) {
        return <Error404 redirectPath={"/"}/>
    }

    return <TaskContainer>
        <CSSTaskContent taskData={task} allTaskLength={allTasks.length}/>
        <CSSTaskFooter allTasks={allTasks} taskNumber={task.number}/>
    </TaskContainer>
}
