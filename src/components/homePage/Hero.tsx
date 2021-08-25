import {
    HeroContainer, HeroIntroduction,
    HeroImg, HeroFigure, HeroTitleH2,
    HeroTitleH3, HeroIntroductionImg, HeroPlanet
} from "../../style/elements/homePage/hero";
import figure from "../../images/welcome_figure_full.png"
import monitor from "../../images/monitor1.png"
import {FunctionComponent} from "react";
import astronaut from "../../images/astronautHappy.png";

// subcomponent for HomePage, responsible for user introduction ,renders a character that represents the author of the page,
// and the title along with a graphic of the monitor and the astronaut
export const Hero: FunctionComponent = (): JSX.Element => {
    return <HeroContainer>
        {/*character*/}
        <HeroFigure>
            <HeroImg src={figure} alt="figure"/>
        </HeroFigure>

        <HeroIntroduction>

            <HeroTitleH2>
                <span>MEET THE</span> FRONT END
            </HeroTitleH2>
            <HeroTitleH3>
                <span>DISCOVER</span> HIS WORLDS
            </HeroTitleH3>

            <HeroIntroductionImg src={monitor} alt="monitor"/>
            <HeroPlanet src={astronaut} alt="astronaut"/>
        </HeroIntroduction>

    </HeroContainer>
}