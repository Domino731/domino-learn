
import { FunctionComponent } from "react";
import {
    DscCard, DscContent,
    DscTitleContainer, DscTitle
    , DscTitleImg,
    DscDescription, DscExemplaryCodeLink, DscFigure,
    DscFigureImg
} from "../../style/elements/homePage/description";
import { IFPropsDescriptionCard } from "../../types/types";

/**
 * Subcomponent for Description, which render description card for a single programming language
 * @param language - object with language data - icon, figure, text, code...
 * @param reverse - boolean, with which the description card will be reversed
 */
export const DescriptionCard: FunctionComponent<IFPropsDescriptionCard> = ({ language, reverse = false }) => {
    return <DscCard reverse={reverse}>

        <DscContent>
            {/* title */}
            <DscTitleContainer>
                <DscTitleImg src={language.getIconSrc()} alt={language.getIconAlt()} />
                <DscTitle>{language.getLanguageName()}</DscTitle>
            </DscTitleContainer>

            {/* description*/}
            <DscDescription>
                {language.getDsc()}
            </DscDescription>

            {/* link to page with exemplay code */}
            <DscExemplaryCodeLink href={language.getExemplaryCodeLink()} target="_blank"
                rel="noopener noreferrer">See exemplary code</DscExemplaryCodeLink >
        </DscContent>

        {/* graphic which is representing hero of particular programing language */}
        <DscFigure>
            <DscFigureImg src={language.getFigureSrc()} alt={language.getFigureAlt()} />
        </DscFigure>
        
    </DscCard>
}

