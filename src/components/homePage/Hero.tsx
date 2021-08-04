import {
    HeroContainer, HeroIntroduction,
    HeroImg, HeroFigure, HeroTitleH2,
    HeroTitleH3, HeroIntroductionImg
} from "../../style/elements/homePage/hero";
import figure from "../../images/welcome_figure_full.png"
import monitor from "../../images/monitor1.png"
import {FunctionComponent} from "react";
export const Hero : FunctionComponent = () => {
    return <HeroContainer>
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

        </HeroIntroduction>
    </HeroContainer>
}