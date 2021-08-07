import {FunctionComponent, useEffect, useState} from "react";
import {HtmlTaskContainer} from "../../style/elements/htmlTask/htmlTask";
import {TaskOverview} from "./TaskOverview";
import {HtmlTaskHeader} from "./HtmlTaskHeader";
import {HtmlTaskFooter} from "./HtmlTaskFooter";
import {HtmlTaskContent} from "./HtmlContent";
import {getTask} from "../../firebase/operations";
import {RouteComponentProps} from "react-router";

interface MatchParams {
    taskNumber: string
}
interface HtmlTaskProps extends RouteComponentProps<MatchParams> {}


export const HtmlTask : FunctionComponent<HtmlTaskProps> = (props) : JSX.Element => {

    // state with task information -> introduction, target, solution..
    const [task, setTask] = useState(undefined)

    useEffect(()=>{
       getTask("htmlTasks", parseFloat(props.match.params.taskNumber), setTask)
    },[props.match.params.taskNumber])

    if(task === undefined){
        return <h1>Loading...</h1>
    }

    return <HtmlTaskContainer>
        <HtmlTaskHeader/>
        <HtmlTaskContent task={task}/>
        <HtmlTaskFooter/>
    </HtmlTaskContainer>
}