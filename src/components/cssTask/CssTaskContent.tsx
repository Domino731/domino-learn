import {FunctionComponent} from "react";
import {
    CssTaskContentWrapper,
    CssResult,
    CssCodeEditorWrapper,
    CssIntroduction,
    CssTarget
} from "../../style/elements/tasks/cssTask";
import {TaskIntroductionBar, TaskSectionHeader, TaskIntroductionText} from "../../style/elements/tasks/task";
import {cssClass} from "../../properties/cssClass";
import {IFPropsCssTaskContent} from "../../types/types";

export const CssTaskContent: FunctionComponent<IFPropsCssTaskContent> = ({task}): JSX.Element => {

    return <CssTaskContentWrapper>
        <CssResult>

        </CssResult>

        <CssCodeEditorWrapper>

        </CssCodeEditorWrapper>

        <CssIntroduction>
            <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
            <TaskIntroductionBar>
                <img src={cssClass.getFigureSrc()} alt={cssClass.getFigureAlt()}/>
                <h3>{task.title}</h3>
            </TaskIntroductionBar>

             {/*@ts-ignore*/}
            <TaskIntroductionText dangerouslySetInnerHTML={{__html: task.introduction}}/>

        </CssIntroduction>

        < CssTarget>
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
        </CssTarget>

    </CssTaskContentWrapper>
}