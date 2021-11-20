import { FunctionComponent } from "react";
import { DscCardContainer, DscContainer } from "../../style/elements/homePage/description";
import { DescriptionCard } from "./DescriptionCard";
import { HTMLData } from "../../properties/htmlData";
import { CSSData } from "../../properties/cssData";
import { JSData } from "../../properties/jsData";

/** Subcomponent for HomePage, renders description for every front-end language */
export const Description: FunctionComponent = (): JSX.Element => {
    return <DscContainer>
        
        <DscCardContainer reverse={false}>
            <DescriptionCard language={HTMLData} />
        </DscCardContainer>

        <DscCardContainer reverse>
            <DescriptionCard language={CSSData} reverse />
        </DscCardContainer>

        <DscCardContainer reverse={false}>
            <DescriptionCard language={JSData} />
        </DscCardContainer>

    </DscContainer>
}