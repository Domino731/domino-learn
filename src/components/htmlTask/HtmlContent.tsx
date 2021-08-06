import {FunctionComponent} from "react";
import {HtmlTaskContentWrapper} from "../../style/elements/htmlTask/htmlTask";
import {HtmlTaskIntroduction, HtmlTaskTarget, HtmlTaskCodeEditor, HtmlTaskResult} from "../../style/elements/htmlTask/htmlTask";

export const HtmlTaskContent : FunctionComponent = () : JSX.Element => {
    return <HtmlTaskContentWrapper>
        <HtmlTaskIntroduction>

        </HtmlTaskIntroduction>

        <HtmlTaskTarget>

        </HtmlTaskTarget>

        <HtmlTaskCodeEditor>

        </HtmlTaskCodeEditor>

        <HtmlTaskResult>

        </HtmlTaskResult>

    </HtmlTaskContentWrapper>
}