import {FunctionComponent} from "react";
import {TaskResultLoadingWrapper} from "../../style/elements/tasks/task";

/** loading screen for task iframe*/ 
export const TaskResultLoading: FunctionComponent = (): JSX.Element => {
    return <TaskResultLoadingWrapper>
        <i className="fas fa-spinner"/>
    </TaskResultLoadingWrapper>
};