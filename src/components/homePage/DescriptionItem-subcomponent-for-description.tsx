import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import {FunctionComponent, useState} from "react";
import {DscItem, DscContent,
    DscTitleContainer, DscTitle
    , DscTitleImg,
    DscDescription, DscExemplaryCodeBtn, DscFigure,
DscFigureImg, DscItemContainer, DscCode, DscEditorWrapper, DscArrow, DscCodeResultWrapper} from "../../style/elements/homePage/description";
import {IFProgramingCode, IFPropsDescriptionItem} from "../../types/types";
import {
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar, WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";

export const DescriptionItem: FunctionComponent<IFPropsDescriptionItem> = ({language, reverse= false}) => {
    const code : IFProgramingCode = language.getCode()

    const [flag, setFlag] = useState<boolean>(false)

    const handleChangeFlag = () => setFlag(!flag)


    return <DscItemContainer reverse={reverse}>
        <DscItem reverse={reverse}>
            {flag === false && <>
                <DscContent>
                    <DscTitleContainer>
                        <DscTitleImg src={language.getIconSrc()} alt={language.getIconAlt()}/>
                        <DscTitle>{language.getLanguageName()}</DscTitle>
                    </DscTitleContainer>
                    <DscDescription>
                        {language.getDsc()}
                    </DscDescription>
                    <DscExemplaryCodeBtn onClick={handleChangeFlag}>See exemplary code</DscExemplaryCodeBtn>
                </DscContent>
                <DscFigure>
                    <DscFigureImg src={language.getFigureSrc()} alt={language.getFigureAlt()} />
                </DscFigure>
            </>
            }

            {flag && <DscCode reverse={false}>
                <DscEditorWrapper>
                    <AceEditor
                        enableBasicAutocompletion={true}
                        enableLiveAutocompletion={true}
                        enableSnippets={true}
                        mode={code.type}
                        theme="monokai"
                        width="100%"
                        height="100%"
                        value={code.code}
                        fontSize={"1.3rem"}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                            readOnly: true
                        }}
                    />
                </DscEditorWrapper>

                <DscArrow>
                    <i className="fas fa-long-arrow-alt-right"/>
                    <div onClick={handleChangeFlag}>
                        <i className="fas fa-times"/>
                    </div>
                </DscArrow>

                <DscCodeResultWrapper>
                    <WebBrowserWindow>
                        <WebBrowserTopBar>
                            <WebBrowserGreenBox/>
                            <WebBrowserYellowBox/>
                            <WebBrowserRedBox/>
                        </WebBrowserTopBar>
                        <iframe srcDoc={code.srcDoc}
                                width="100%" height="100%" frameBorder="0" sandbox="allow-scripts" title="output"
                        />
                    </WebBrowserWindow>
                </DscCodeResultWrapper>
            </DscCode>}
        </DscItem>



    </DscItemContainer>

}

