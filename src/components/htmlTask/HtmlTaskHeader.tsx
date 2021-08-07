import {FunctionComponent} from "react";
import {HtmlHeader} from "../../style/elements/htmlTask/htmlTask";
import {TaskHeaderTitle} from "../../style/general/generalStyles";

export const HtmlTaskHeader : FunctionComponent = () : JSX.Element => {
    return <HtmlHeader>
      <TaskHeaderTitle><a href="/">DOMINO LEARN</a></TaskHeaderTitle>
    </HtmlHeader>

}