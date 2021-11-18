import {FunctionComponent} from "react";
import {TaskIntroductionBar, TaskIntroductionText, TaskSectionHeader, TaskSectionScale} from "../../style/elements/tasks/task";
import {IFPropsTaskIntroduction} from "../../types/types";

/**
 * Component which renders introduction for task
 * @param title - task title
 * @param introductionInnerHtml - html code for introduction
 * @param imgAlt - figure alt
 * @param imgSrc - figure src
 */
export const TaskIntroduction: FunctionComponent<IFPropsTaskIntroduction> = ({
                                                                                 title,
                                                                                 introductionInnerHtml,
                                                                                 imgAlt,
                                                                                 imgSrc
                                                                             }): JSX.Element => {
    return <TaskSectionScale>
        {/* header */}
        <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>

        {/* title */}
        <TaskIntroductionBar>
            <img src={imgSrc} alt={imgAlt}/>
            <h3>{title}</h3>
        </TaskIntroductionBar>

        {/* task introduction, description */}
        {/*@ts-ignore*/}
        <TaskIntroductionText dangerouslySetInnerHTML={{__html: introductionInnerHtml}}/>
    </TaskSectionScale>
}

