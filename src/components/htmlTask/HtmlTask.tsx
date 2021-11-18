import { FunctionComponent, useEffect, useState } from "react";
import { TaskContainer } from "../../style/elements/tasks/task";
import { HtmlTaskFooter } from "./HtmlTaskFooter";
import { HtmlTaskContent } from "./HtmlContent";
import { getSpecificHtmlTask } from "../../firebase/operations";
import { IFAllTasks, IFPropsTask, IFHtmlTask } from "../../types/types";
import { Loading } from "../other/Loading";
import { Error404 } from "../other/Error404";
import { useParams } from "react-router";

/** Component with HTML Task */
export const HtmlTask: FunctionComponent<IFPropsTask> = (): JSX.Element => {

    // references
    // @ts-ignore
    const { taskNumber } = useParams();

    // state with task data -> introduction, target, solution..
    const [task, setTask] = useState<IFHtmlTask | null | undefined>(null);

    // state with all tasks, used in footer
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null>(null);

    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getSpecificHtmlTask(parseFloat(taskNumber), setTask, setAllTasks);
    }, [taskNumber]);

    // wait for data
    if (task === null || allTasks === null) {
        return <Loading />
    }
    // 404 error handling
    else if (task === undefined) {
        return <Error404 redirectPath={"/"} />
    }

    return <TaskContainer>
        <HtmlTaskContent taskData={task} allTaskLength={allTasks.length} />
        <HtmlTaskFooter taskNumber={task.number} allTasks={allTasks} />
    </TaskContainer>
};