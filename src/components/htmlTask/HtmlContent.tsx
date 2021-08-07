import {FunctionComponent} from "react";
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
    TaskTargetCheckbox,
    CodeEditorPanel,
    CodeEditorPanelBtn
} from "../../style/general/generalStyles";
import {htmlClass} from "../../properties/htmlClass";
import AceEditor from "react-ace"
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


        {/*code editor - ace*/}
        <HtmlTaskCodeEditor>
            <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                width="100%"
                height="100%"
                fontSize={20}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={`console.log(1)`}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,}}
            />
            <CodeEditorPanel>
                  <CodeEditorPanelBtn><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>

        </HtmlTaskCodeEditor>

        <HtmlTaskResult>

        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}