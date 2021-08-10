import {FunctionComponent} from "react";
import {TaskAidItemVideo,
    TaskAidIconVideo,
    TaskAidTitleVideo,
    TaskAidAuthorVideo,
    TaskAidItemArticle,
    TaskAidIconArticle,
    TaskAidTitleArticle

} from "../../style/general/generalStyles";

// type TaskAidProps = {
//     aid: {
//         type: "video" | "article"
//         title: string
//         author?: string
//         link?: string
//     }
// }
type TaskAidProps = {
    aid: "video" | "article"
}
export const TaskAid : FunctionComponent<TaskAidProps> = ({aid}) : JSX.Element | null => {
    if(aid === "video"){
        return <TaskAidItemVideo>
            <TaskAidIconVideo>
                <i className="fab fa-youtube"/>
            </TaskAidIconVideo>
            <div>
                  <TaskAidTitleVideo>123</TaskAidTitleVideo>
                   <TaskAidAuthorVideo>Author: James</TaskAidAuthorVideo>
            </div>
        </TaskAidItemVideo>
    }
    else if (aid === "article"){
        return <TaskAidItemArticle>
            <TaskAidIconArticle>
                <i className="fab fa-youtube"/>
            </TaskAidIconArticle>
            <div>
                <TaskAidTitleArticle>123</TaskAidTitleArticle>
            </div>
        </TaskAidItemArticle>
    }
    else {
        return null
    }
}