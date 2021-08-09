import {FunctionComponent, useEffect, useState} from "react";
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
    CodeEditorPanelBtn,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserYellowBox
} from "../../style/general/generalStyles";
import {htmlClass} from "../../properties/htmlClass";
import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/webpack-resolver'
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/python";

type HtmlTaskContentProps = {
    task: {
        title: string,
        introduction: string,
        targets: string[],
        number: number
    } | undefined
}

export const HtmlTaskContent: FunctionComponent<HtmlTaskContentProps> = ({task}): JSX.Element | null => {

    // state with user html code
    const [userCode, setUserCode] = useState<string>("<h1>Welcome</h1>")

    // code
    const srcDoc = `
        <!DOCTYPE html>
          <html lang="en">
          <head></head>
          <body>${userCode}</body>
          </html>`


    const changeUserCode = (newValue: any) => {
        setUserCode(newValue)
    }

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
                {task.targets.map((el, num) => <TaskTarget key={`${task.title}_taskTarget_${num}`}>
                    <TaskTargetCheckbox/>
                    <TaskTargetText dangerouslySetInnerHTML={{__html: el}}/>
                </TaskTarget>)}
            </TaskTargetsWrapper>
        </HtmlTaskTarget>

        {/*code editor - ace*/}
        <HtmlTaskCodeEditor>
            <AceEditor

                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                onChange={changeUserCode}
                mode="html"
                theme="monokai"
                width="100%"
                height="100%"
                value={userCode}
                fontSize={20}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
            <CodeEditorPanel>
                <CodeEditorPanelBtn><i className="fas fa-eraser"/> Reset </CodeEditorPanelBtn>
                <CodeEditorPanelBtn><i className="fas fa-play"/> Run </CodeEditorPanelBtn>
            </CodeEditorPanel>
        </HtmlTaskCodeEditor>

        {/*user code*/}
        <HtmlTaskResult>
            <WebBrowserWindow>
                <WebBrowserTopBar>
                    <WebBrowserGreenBox/>
                    <WebBrowserYellowBox/>
                    <WebBrowserRedBox/>
                </WebBrowserTopBar>
                <iframe srcDoc={srcDoc}
                        width="100%" height="100%" frameBorder="0" sandbox="allow-scripts" title="output"
                />
            </WebBrowserWindow>
        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}