import {FunctionComponent} from "react";
import {HtmlTaskContentWrapper} from "../../style/elements/htmlTask/htmlTask";
import {
    HtmlTaskIntroduction,
    HtmlTaskTarget,
    HtmlTaskCodeEditor,
    HtmlTaskResult
} from "../../style/elements/htmlTask/htmlTask";
import {TaskIntroductionBar,
    TaskSectionHeader,
    TaskIntroductionText,
    TaskTargetsWrapper,
    TaskTarget,
TaskTargetText,
    TaskTargetCheckbox} from "../../style/general/generalStyles";
import {htmlClass} from "../../properties/htmlClass";



export const HtmlTaskContent: FunctionComponent<any> = ({task}): JSX.Element => {
    return <HtmlTaskContentWrapper>

        {/*introduction*/}
        <HtmlTaskIntroduction>
            <TaskSectionHeader><i className="fas fa-book-open"/> <span>Introduction</span></TaskSectionHeader>
            <TaskIntroductionBar>
                <img src={htmlClass.getFigureSrc()} alt={htmlClass.getFigureAlt()}/>
                <h2>{task.title}</h2>
            </TaskIntroductionBar>

            <TaskIntroductionText>
                <div>
                <p>Headers in HTML are used to title pages. They are similar to those of newspaper articles, for
                    example.
                    Just as with the newspaper we use, we have to equip each article with a headline. They are also used
                    to
                    attract the user's attention.</p>

                <p>
                    In HTML we have 6 headers. To give a header we need to create an element
                    from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.
                    The number at the end indicates the hierarchy starting from 1 ending with 6.
                </p>

                <p>
                    An article usually has a main title and is divided into smaller articles. We must remember to assign
                    headings according to the hierarchy. For the main title we give <code>&lt;h1&gt;</code>, and for smaller
                    articles we give <code>&lt;h2&gt;</code>.
                </p>
            </div>
            </TaskIntroductionText>
        </HtmlTaskIntroduction>

        {/*task target and instructions*/}
        <HtmlTaskTarget>
            <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
            <TaskTargetsWrapper>

                <TaskTarget>
                    <TaskTargetCheckbox/>
                    <TaskTargetText>
                        Create title by using <code>&lt;h2&gt;</code> tag
                    </TaskTargetText>
                </TaskTarget>

            </TaskTargetsWrapper>
        </HtmlTaskTarget>


        <HtmlTaskCodeEditor>

        </HtmlTaskCodeEditor>

        <HtmlTaskResult>

        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}