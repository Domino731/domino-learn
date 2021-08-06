import {FunctionComponent} from "react";
import {HtmlFooter, HtmlSwitchButton, HtmlFooterListBtn} from "../../style/elements/htmlTask/htmlTask";
import {TaskFooterTaskNumber, TaskFooterSwitchBar} from "../../style/general/generalStyles";

export const HtmlTaskFooter : FunctionComponent = () : JSX.Element => {
    return <HtmlFooter>
        <span/>
        <TaskFooterTaskNumber>1 / 3</TaskFooterTaskNumber>
        <TaskFooterSwitchBar>

            <HtmlFooterListBtn><i className="fas fa-clipboard-list"/></HtmlFooterListBtn>
            <HtmlSwitchButton>Back</HtmlSwitchButton>
            <HtmlSwitchButton>Next</HtmlSwitchButton>
        </TaskFooterSwitchBar>
    </HtmlFooter>
}