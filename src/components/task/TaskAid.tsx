import { FunctionComponent } from "react";
import {
    TaskAidItemVideo,
    TaskAidIconVideo,
    TaskAidTitleVideo,
    TaskAidAuthorVideo,
    TaskAidItemArticle,
    TaskAidIconArticle,
    TaskAidTitleArticle,
    TaskAidAuthorArticle
} from "../../style/elements/tasks/task";
import { TaskAidProps } from "../../types/types";


/**
 * Component which renders aid for task - link to a page that helps the user solve the task,or become fimiliar with specific technology
 * there are two color themes which are depending on the type
 * @param aid - data about task aid with title, link, type, author
 */
export const TaskAid: FunctionComponent<TaskAidProps> = ({ aid }): JSX.Element | null => {

    // video type
    if (aid.type === "video") {
        return <TaskAidItemVideo href={aid.link} target="_blank"
            rel="noopener noreferrer">
            {/* youtube icon */}
            <TaskAidIconVideo>
                <i className="fab fa-youtube" />
            </TaskAidIconVideo>

            {/* title and author */}
            <div>
                <TaskAidTitleVideo>{aid.title}</TaskAidTitleVideo>
                <TaskAidAuthorVideo>Author: {aid.author}</TaskAidAuthorVideo>
            </div>
        </TaskAidItemVideo>

    }

    // article type 
    else if (aid.type === "article") {
        return <TaskAidItemArticle href={aid.link} target="_blank"
            rel="noopener noreferrer">

            {/* text icon */}
            <TaskAidIconArticle>
                <i className="fas fa-align-justify" />
            </TaskAidIconArticle>

            {/* title and author */}
            <div>
                <TaskAidTitleArticle>{aid.title}</TaskAidTitleArticle>
                <TaskAidAuthorArticle>Website: {aid.author}</TaskAidAuthorArticle>
            </div>
        </TaskAidItemArticle>
    }  
    else {
        return null
    }
}