import {FunctionComponent} from "react";
import {DscContainer} from "../../style/elements/homePage/description";
import {DescriptionItem} from "./DescriptionItem-subcomponent-for-description";
import {htmlClass} from "../../properties/front_end_languages";

export const Description : FunctionComponent = () => {
    return <DscContainer>
       <DescriptionItem language={htmlClass}/>
    </DscContainer>
}