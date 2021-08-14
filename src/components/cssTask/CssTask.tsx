import {FunctionComponent, useEffect, useState} from "react";
import {TaskContainer} from "../../style/elements/tasks/task";
import {CssTaskContent} from "./CssTaskContent";
import {IFAllTasks, IFCssTask, IFPropsTask} from "../../types/types";
import {getAllTasks, getCssTask} from "../../firebase/operations";

export const CssTask : FunctionComponent<IFPropsTask> = (props) : JSX.Element => {
    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState<IFCssTask | null>(null)

    //state with all tasks
    const [allTasks, setAllTasks] = useState<IFAllTasks[] | null >(null)


    // when component mounted fetch information about task and save upcoming data into states
    useEffect(() => {
        getCssTask(parseFloat(props.match.params.taskNumber), setTask)
        getAllTasks("cssTasks", setAllTasks)
    }, [props.match.params.taskNumber])


    if(task  === null || allTasks === null){
        return <h1>Loading...</h1>
    }
    return  <TaskContainer>
        <CssTaskContent task={task} allTaskLength={allTasks.length}/>
    </TaskContainer>
}
