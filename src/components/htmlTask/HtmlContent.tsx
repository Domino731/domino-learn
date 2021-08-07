import {FunctionComponent, useEffect} from "react";
import {HtmlTaskContentWrapper} from "../../style/elements/htmlTask/htmlTask";
import {
    HtmlTaskIntroduction,
    HtmlTaskTarget,
    HtmlTaskCodeEditor,
    HtmlTaskResult
} from "../../style/elements/htmlTask/htmlTask";
import {
    TaskIntroductionBar,
    TaskSectionHeader,
    TaskIntroductionText,
    TaskTargetsWrapper,
    TaskTarget,
    TaskTargetText,
    TaskTargetCheckbox
} from "../../style/general/generalStyles";
import {htmlClass} from "../../properties/htmlClass";

type HtmlTaskContentProps = {
    task: {
        title: string,
        introduction: string,
        targets: string[],
        number: number
    } | undefined
}

export const HtmlTaskContent: FunctionComponent<HtmlTaskContentProps> = ({task}): JSX.Element | null => {
    if (task === undefined) {
        return null
    }
    return <HtmlTaskContentWrapper>


        {/*introduction*/}
        <HtmlTaskIntroduction>
            <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
            <TaskIntroductionBar>
                <img src={htmlClass.getFigureSrc()} alt={htmlClass.getFigureAlt()}/>
                <h2>{task.title}</h2>
            </TaskIntroductionBar>
            <TaskIntroductionText dangerouslySetInnerHTML={{__html: task.introduction}}/>
        </HtmlTaskIntroduction>


        {/*task target and instructions*/}
        <HtmlTaskTarget>
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
            <TaskTargetsWrapper>

                {task.targets.map((el, num) => <TaskTarget>
                    <TaskTargetCheckbox/>
                    <TaskTargetText dangerouslySetInnerHTML={{__html: el}}/>
                </TaskTarget>)}


            </TaskTargetsWrapper>
        </HtmlTaskTarget>


        <HtmlTaskCodeEditor>

        </HtmlTaskCodeEditor>

        <HtmlTaskResult>

        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}