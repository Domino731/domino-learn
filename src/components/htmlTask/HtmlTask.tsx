import {FunctionComponent} from "react";
import {HtmlTaskContainer} from "../../style/elements/htmlTask/htmlTask";
import {TaskOverview} from "./TaskOverview";
import {HtmlTaskHeader} from "./HtmlTaskHeader";
import {HtmlTaskFooter} from "./HtmlTaskFooter";
import {HtmlTaskContent} from "./HtmlContent";

export const HtmlTask : FunctionComponent = () : JSX.Element => {
    return <HtmlTaskContainer>
        <HtmlTaskHeader/>
        <HtmlTaskContent/>
        <HtmlTaskFooter/>
    </HtmlTaskContainer>
}