import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import {FunctionComponent, useState} from "react";
import {
    DscItem, DscContent,
    DscTitleContainer, DscTitle
    , DscTitleImg,
    DscDescription, DscExemplaryCodeBtn, DscFigure,
    DscFigureImg, DscItemContainer, DscCode, DscEditorWrapper, DscArrow, DscCodeResultWrapper
} from "../../style/elements/homePage/description";
import {IFProgramingCode, IFPropsDescriptionItem} from "../../types/types";
import {
    WebBrowserGreenBox,
    WebBrowserRedBox,
    WebBrowserTopBar, WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";

/**
 * Subcomponent for Description, which render description for a single language and sample code
 * @param language - object with language data - icon, figure, text, code...
 * @param reverse - boolean, with which the description will be rotated horizontally (only above 768px width)
 */
export const DescriptionItem: FunctionComponent<IFPropsDescriptionItem> = ({language, reverse = false}) => {
    const code: IFProgramingCode = language.getCode()

    // state which is responsible for displaying code example
    const [flag, setFlag] = useState<boolean>(false)

    // change flag state -> show or hide code example
    const handleChangeFlag = (): void => setFlag(!flag)


    return <DscItemContainer reverse={reverse}>
        <DscItem reverse={reverse}>
            {/* description*/}
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
                    <DscFigureImg src={language.getFigureSrc()} alt={language.getFigureAlt()}/>
                </DscFigure>

            </>
            }
            {/*code example*/}
            {flag && <DscCode reverse={reverse}>
                {/*editor with code*/}
                <DscEditorWrapper mode={language.getLanguageName()}>
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

                {/*arrow toward the window iframe*/}
                <DscArrow reverse={reverse}>
                    <i className="fas fa-long-arrow-alt-right"/>
                    <div onClick={handleChangeFlag}>
                        <i className="fas fa-times"/>
                    </div>
                </DscArrow>

                {/*iframe with code result*/}
                <DscCodeResultWrapper mode={language.getLanguageName()}>
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

