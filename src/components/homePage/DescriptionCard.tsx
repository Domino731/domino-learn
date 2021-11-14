
import { FunctionComponent} from "react";
import {
    DscCard, DscContent,
    DscTitleContainer, DscTitle
    , DscTitleImg,
    DscDescription, DscExemplaryCodeLink , DscFigure,
    DscFigureImg
} from "../../style/elements/homePage/description";
import {  IFPropsDescriptionCard } from "../../types/types";

/**
 * Subcomponent for Description, which render description for a single language and sample code
 * @param language - object with language data - icon, figure, text, code...
 * @param reverse - boolean, with which the description will be rotated horizontally (only above 768px width)
 */
export const DescriptionCard: FunctionComponent<IFPropsDescriptionCard> = ({ language, reverse = false }) => {

    
    return <DscCard reverse={reverse}>
            {/* description*/}

                <DscContent>
                    <DscTitleContainer>
                        <DscTitleImg src={language.getIconSrc()} alt={language.getIconAlt()} />
                        <DscTitle>{language.getLanguageName()}</DscTitle>
                    </DscTitleContainer>
                    <DscDescription>
                        {language.getDsc()}
                    </DscDescription>
                    <DscExemplaryCodeLink href={language.getExemplaryCodeLink()} target="_blank"
                   rel="noopener noreferrer">See exemplary code</DscExemplaryCodeLink >
                </DscContent>
                <DscFigure>
                    <DscFigureImg src={language.getFigureSrc()} alt={language.getFigureAlt()} />
                </DscFigure>

  
       
        </DscCard>
}

