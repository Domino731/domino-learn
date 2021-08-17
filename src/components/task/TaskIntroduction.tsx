import {FunctionComponent} from "react";
import {TaskIntroductionBar, TaskIntroductionText, TaskSectionHeader} from "../../style/elements/tasks/task";
import {CssDecorationIntroduction} from "../../style/elements/tasks/cssTask";
import {IFPropsTaskIntroduction} from "../../types/types";

export const TaskIntroduction : FunctionComponent<IFPropsTaskIntroduction > = ({title, introductionInnerHtml,imgAlt, imgSrc}) : JSX.Element => {
    return <>
        <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
        <TaskIntroductionBar>
            <img src={imgSrc} alt={imgAlt}/>
            <h3>{title}</h3>
        </TaskIntroductionBar>

        {/*@ts-ignore*/}
        <TaskIntroductionText dangerouslySetInnerHTML={{__html: introductionInnerHtml}}/>

        {/*decorations*/}
        <CssDecorationIntroduction/>
    </>
}