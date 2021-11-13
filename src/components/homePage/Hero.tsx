import { FunctionComponent } from "react";
import { HeroAustronaut, HeroAustronautWrapper, HeroContainer, HeroCSSComet, HeroCSSCometWrapper, HeroCSSGraphicWrapper, HeroEarthGraphic, HeroHTMLComet, HeroHTMLCometWrapper, HeroHTMLGraphicWrapper, HeroTitle } from '../../style/elements/homePage/hero';
import austronautGraphic from "../../images/astronautHappy.png";
import earth from "../../images/earth.svg";
import htmlIcon from "../../images/html_hero_icon.svg";
import cssIcon from "../../images/css_hero_icon.svg";

// subcomponent for HomePage, responsible for page introduction
export const Hero: FunctionComponent = (): JSX.Element => {
    return <HeroContainer>
        <HeroTitle>
            Meet front-end<br />Discover his worlds
        </HeroTitle>
        <HeroAustronautWrapper>
            <HeroAustronaut src={austronautGraphic} alt='astronautHappy' />
        </HeroAustronautWrapper>
        <HeroEarthGraphic src={earth} />

        {/* comets */}

        {/* html  */}
        <HeroHTMLCometWrapper>
            <HeroHTMLGraphicWrapper>
                <img src={htmlIcon} alt='HTML icon' />
            </HeroHTMLGraphicWrapper>
            <HeroHTMLComet />
        </HeroHTMLCometWrapper>

        {/* css */}
        <HeroCSSCometWrapper>
            <HeroCSSGraphicWrapper>
                <img src={cssIcon} alt='HTML icon' />
            </HeroCSSGraphicWrapper>
            <HeroCSSComet />
        </HeroCSSCometWrapper>
    </HeroContainer>
}