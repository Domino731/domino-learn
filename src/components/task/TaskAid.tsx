import {FunctionComponent} from "react";
import {
    TaskAidItemVideo,
    TaskAidIconVideo,
    TaskAidTitleVideo,
    TaskAidAuthorVideo,
    TaskAidItemArticle,
    TaskAidIconArticle,
    TaskAidTitleArticle,
       TaskAidAuthorArticle
} from "../../style/general/generalStyles";

type TaskAidProps = {
    aid: {
        type: "video" | "article"
        title: string
        author?: string | null
        link?: string
    }
}

export const TaskAid: FunctionComponent<TaskAidProps> = ({aid}): JSX.Element | null => {
    if (aid.type === "video") {
        return <TaskAidItemVideo href={aid.link}  target="_blank"
                                 rel="noopener noreferrer">
            <TaskAidIconVideo>
                <i className="fab fa-youtube"/>
            </TaskAidIconVideo>
            <div>
                <TaskAidTitleVideo>{aid.title}</TaskAidTitleVideo>
                <TaskAidAuthorVideo>Author: {aid.author}</TaskAidAuthorVideo>
            </div>
        </TaskAidItemVideo>
    } else if (aid.type === "article") {
        return <TaskAidItemArticle   href={aid.link} target="_blank"
                                   rel="noopener noreferrer">
            <TaskAidIconArticle>
                <i className="fas fa-align-justify"/>
            </TaskAidIconArticle>
            <div>
                <TaskAidTitleArticle>{aid.title}</TaskAidTitleArticle>
                <TaskAidAuthorArticle>Website: {aid.author}</TaskAidAuthorArticle>
            </div>
        </TaskAidItemArticle>
    } else {
        return null
    }
}