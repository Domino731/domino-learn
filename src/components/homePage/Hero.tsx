import { FunctionComponent } from "react";
import { HeroAustronaut, HeroAustronautWrapper, HeroContainer, HeroMainPlanetGraphic, HeroTitle} from '../../style/elements/homePage/hero';
import austronautGraphic from "../../images/hero_astronaut.svg";
import earth from "../../images/hero_waves.svg";

// subcomponent for HomePage, responsible for page introduction
export const Hero: FunctionComponent = (): JSX.Element => {
    return <HeroContainer>
        <HeroTitle>
            Meet front-end<br />Discover his worlds
        </HeroTitle>
        <HeroAustronautWrapper>
            <HeroAustronaut src={austronautGraphic} alt='astronautHappy' />
        </HeroAustronautWrapper>
        <HeroMainPlanetGraphic src={earth} />

    </HeroContainer>
}