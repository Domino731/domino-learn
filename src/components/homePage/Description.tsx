import { FunctionComponent } from "react";
import { DscCardContainer, DscContainer } from "../../style/elements/homePage/description";
import { DescriptionCard } from "./DescriptionCard";
import { htmlClass } from "../../properties/htmlClass";
import { cssClass } from "../../properties/cssClass";
import { jsClass } from "../../properties/jsClass";

// Subcomponent for HomePage, renders description for every language
export const Description: FunctionComponent = (): JSX.Element => {
    return <DscContainer>
        <DscCardContainer reverse={false}>
            <DescriptionCard language={htmlClass} />
        </DscCardContainer>

        <DscCardContainer reverse>
            <DescriptionCard language={cssClass} reverse />
        </DscCardContainer>

        <DscCardContainer reverse={false}>
            <DescriptionCard language={jsClass} />
        </DscCardContainer>

    </DscContainer>
}