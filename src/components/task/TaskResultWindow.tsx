import {FunctionComponent} from "react";
import {
    WebBrowserGreenBox, WebBrowserRedBox,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";
import {IFPropsTaskResultWindow} from "../../types/types";

/**
 * Component which return browser window in which there is an iframe with the user code
 * @param srcDoc - code which will be passed into iframe
 */
export const TaskResultWindow : FunctionComponent< IFPropsTaskResultWindow> = ({srcDoc}) : JSX.Element => {
    return  <WebBrowserWindow>
        <WebBrowserTopBar>
            <WebBrowserGreenBox/>
            <WebBrowserYellowBox/>
            <WebBrowserRedBox/>
        </WebBrowserTopBar>
        <iframe srcDoc={srcDoc}
                width="100%" height="100%" frameBorder="0" sandbox="allow-scripts" title="output"
        />
    </WebBrowserWindow>
}