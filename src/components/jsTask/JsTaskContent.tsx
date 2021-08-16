import {FunctionComponent} from "react";
import {TaskContentWrapper} from "../../style/elements/tasks/task";
import {IFPropsJsTask} from "../../types/types";
import {JsResult, JsIntroduction, JsCodeEditorWrapper, JsTargets} from "../../style/elements/tasks/jsTask";

export const JsTaskContent : FunctionComponent<IFPropsJsTask> = ({task, allTaskLength}) : JSX.Element => {
    return <TaskContentWrapper>
        <JsIntroduction>

        </JsIntroduction>

        <JsTargets>

        </JsTargets>

        <JsResult>

        </JsResult>

        <JsCodeEditorWrapper>

        </JsCodeEditorWrapper>

    </TaskContentWrapper>
}