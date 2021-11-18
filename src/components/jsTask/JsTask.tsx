import { FunctionComponent, useEffect, useState } from "react";
import { TaskContainer } from "../../style/elements/tasks/task";
import { IFAllTasks, IFJsTask, IFPropsTask } from "../../types/types";
import { JsTaskContent } from "./JsTaskContent";
import { getAllTasks, getSpecificJsTask } from "../../firebase/operations";
import { JsTaskFooter } from "./JsTaskFooter";
import { Loading } from "../other/Loading";
import { useParams } from "react-router";
import { Error404 } from "../other/Error404";

/** Component with JavaScript Task */
export const JsTask: FunctionComponent<IFPropsTask> = (): JSX.Element => {

    // references
    // @ts-ignore
    const { taskNumber } = useParams();

    // state with task data -> introduction, target, solution..
    const [task, setTask] = useState<IFJsTask | null | undefined>(null);

    // state with all tasks, used in footer
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null | undefined>(null);

    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getSpecificJsTask(parseFloat(taskNumber), setTask);
        getAllTasks("jsTasks", "solvedJsTasks", setAllTasks);
    }, [taskNumber]);

    // wait for data
    if (task === null || allTasks === null) {
        return <Loading />
    }

    // 404 error handling
    if (task === undefined || allTasks === undefined) {
        return <Error404 redirectPath={"/"} />
    }
    return <TaskContainer>
        <JsTaskContent task={task} allTaskLength={allTasks.length} />
        <JsTaskFooter taskNumber={task.number} allTasks={allTasks} />
    </TaskContainer>
}