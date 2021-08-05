import {FunctionComponent} from "react";
import {DscContainer} from "../../style/elements/homePage/description";
import {DescriptionItem} from "./DescriptionItem-subcomponent-for-description";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";

export const Description: FunctionComponent = () => {
    return <DscContainer>
        <DescriptionItem language={htmlClass}/>
        <DescriptionItem language={cssClass} reverse/>
        <DescriptionItem language={jsClass}/>
    </DscContainer>
}