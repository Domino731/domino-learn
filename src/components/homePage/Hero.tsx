import { FunctionComponent } from "react";
import { HeroAustronaut, HeroAustronautWrapper, HeroContainer, HeroMainPlanetGraphic,HeroPlanet4, HeroPlanet5, HeroPlanet1, HeroPlanet2, HeroPlanet3, HeroTitle} from '../../style/elements/homePage/hero';
import austronautGraphic from "../../images/hero_astronaut.svg";
import earth from "../../images/earth.svg";
import planet1 from "../../images/hero_planet_1.svg";
import planet2 from "../../images/hero_planet_2.svg";
import planet3 from "../../images/hero_planet_3.svg";
import planet4 from "../../images/hero_planet_4.svg";
import planet5 from "../../images/hero_planet_5.svg";
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

        {/* comets */}
       <HeroPlanet1 src={planet1} alt='Planet'/>
       <HeroPlanet2 src={planet2} alt='Planet'/>
       <HeroPlanet3 src={planet3} alt='Planet'/>
       <HeroPlanet4 src={planet4} alt='Planet'/>
       <HeroPlanet5 src={planet5} alt='Planet'/>
    </HeroContainer>
}