import {FunctionComponent} from "react";
import {FooterContainer, FooterMediaList, FooterMediaItem, CopyrightWrapper} from "../../style/elements/homePage/footer";
import {FreepikThanks} from "../../style/general/generalStyles";
import saturnPlanet from "../../images/planet_saturn.png";
import colorfulPlanet from "../../images/planet_colorful.png";
import neptunePlanet from "../../images/planet_neptune.png"
import jupiterPlanet from "../../images/planet_jupiter.png"
import coding from "../../images/coding.png"
import quiz from "../../images/quiz.png"
import astronautHappy from "../../images/astronautHappy.png"

// subcomponent for HomePage, renders freepik icons authors, and socials links
export const Footer: FunctionComponent = (): JSX.Element => {
    return <FooterContainer>
    
        {/*socials*/}
        <FooterMediaList>
            <FooterMediaItem>
                <a href="https://www.linkedin.com/in/dominik-orzechowski-2aa553212/" target="_blank"
                   rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
            </FooterMediaItem>
            <FooterMediaItem>
                <a href="https://github.com/Domino731" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-github"/></a>
            </FooterMediaItem>
            <FooterMediaItem>
                <a href="https://www.facebook.com/dominik.orzechowski.1088/" target="_blank"
                   rel="noopener noreferrer"><i
                    className="fab fa-facebook-square"/></a>
            </FooterMediaItem>
        </FooterMediaList>

        <CopyrightWrapper>2021 &copy; Copyright Dominik Orzechowski</CopyrightWrapper>
        <a href='https://www.freepik.com/vectors/star'>Star vector created by vectorpouch - www.freepik.com</a>
    </FooterContainer>
}