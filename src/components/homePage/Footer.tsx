import {FunctionComponent} from "react";
import {FooterContainer, FooterMediaList, FooterMediaItem} from "../../style/elements/homePage/footer";
import {FreepikThanks} from "../../style/general/generalStyles";
import saturnPlanet from "../../images/planet_saturn.png";
import colorfulPlanet from "../../images/planet_colorful.png";
import neptunePlanet from "../../images/planet_neptune.png"
import jupiterPlanet from "../../images/planet_jupiter.png"
import coding from "../../images/coding.png"
import quiz from "../../images/quiz.png"
export const Footer: FunctionComponent = (): JSX.Element => {
    return <FooterContainer>

        <FreepikThanks>
            <div>
                <span><img src={saturnPlanet} alt="saturn"/></span>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>

            <div>
                <span><img src={colorfulPlanet} alt="colorful planet"/></span>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik
                </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>

            <div>
                <span><img src={neptunePlanet} alt="neptune"/></span>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>

            <div>
                <span><img src={jupiterPlanet} alt="jupiter"/></span>
                <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26"
                                      title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/"
                                                                                title="Flaticon">www.flaticon.com</a>
                </div>
            </div>

            <div>
                <span><img src={coding} alt="coding"/></span>
                <div>Icons made by <a href="https://www.flaticon.com/authors/prettycons"
                                      title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/"
                                                                                title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
            <div>
                <span><img src={quiz} alt="quiz"/></span>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </FreepikThanks>

        <FooterMediaList>
            <FooterMediaItem>
                <a href="https://www.linkedin.com/in/dominik-orzechowski-2aa553212/" target="_blank"
                   rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
            </FooterMediaItem>
            <FooterMediaItem>
                <a href="https://github.com/Domino731?tab=repositories" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-github"/></a>
            </FooterMediaItem>
            <FooterMediaItem>
                <a href="https://discord.gg/QhpjmMBj" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-discord"/></a>
            </FooterMediaItem>
            <FooterMediaItem>
                <a href="https://www.facebook.com/dominik.orzechowski.1088/" target="_blank"
                   rel="noopener noreferrer"><i
                    className="fab fa-facebook-square"/></a>
            </FooterMediaItem>
        </FooterMediaList>
    </FooterContainer>
}