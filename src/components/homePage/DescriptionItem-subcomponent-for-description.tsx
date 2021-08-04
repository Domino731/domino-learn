import {FunctionComponent, useEffect, useState} from "react";
import {DscItem, DscContent,
    DscTitleContainer, DscTitle
    , DscTitleImg,
    DscDescription, DscExemplaryCodeBtn, DscFigure,
DscFigureImg, DscCodeContainer, DscCodeItem, DscCodeTitle, DscCodeExample} from "../../style/elements/homePage/description";

type DescriptionItemProps = {
    language: {
        getDsc: () => string,
        getIconAlt: () => string,
        getIconSrc: () => string,
        getLanguageName: () => string,
        getFigureSrc: () => string,
        getFigureAlt: () => string,
        getCodeSrc: () => string,
        getCodeAlt: () => string
    }
}

export const DescriptionItem: FunctionComponent<DescriptionItemProps> = ({language}) => {
    const [flag, setFlag] = useState<boolean>(false)

    const handleChangeFlag = () => setFlag(!flag)

    return <DscItem>
            <DscContent>
                <DscTitleContainer>
                    <DscTitleImg src={language.getIconSrc()} alt={language.getIconAlt()}/>
                    <DscTitle>{language.getLanguageName()}</DscTitle>
                </DscTitleContainer>
                <DscDescription>
                    {language.getDsc()}
                </DscDescription>
                <DscExemplaryCodeBtn onClick={handleChangeFlag}>See exemplary code <i className="fas fa-code"/></DscExemplaryCodeBtn>
            </DscContent>

            {flag === false && <DscFigure>
                <DscFigureImg src={language.getFigureSrc()} alt={language.getFigureAlt()} />
            </DscFigure>}
            {
                flag &&  <DscCodeExample>
                    <img src={language.getCodeSrc()} alt={language.getCodeAlt()}/>
                </DscCodeExample>
            }
    </DscItem>
}

