import {FunctionComponent} from "react";
import {
    WebBrowserGreenBox, WebBrowserRedBox,
    WebBrowserTopBar,
    WebBrowserWindow,
    WebBrowserYellowBox
} from "../../style/elements/tasks/task";
import {IFPropsTaskResultWindow} from "../../types/types";

/**
 * Component which return iframe window with user's code inside
 * @param srcDoc - code which will be passed into iframe
 */
export const TaskResultWindow : FunctionComponent< IFPropsTaskResultWindow> = ({srcDoc}) : JSX.Element => {
    return  <WebBrowserWindow>
         {/* 'browers buttons' */}
        <WebBrowserTopBar>
            <WebBrowserGreenBox/>
            <WebBrowserYellowBox/>
            <WebBrowserRedBox/>
        </WebBrowserTopBar>

        {/* iframe with user's code */}
        <iframe srcDoc={srcDoc}
                width="100%" height="100%" frameBorder="0" sandbox="allow-scripts" title="output"
        />
    </WebBrowserWindow>
}