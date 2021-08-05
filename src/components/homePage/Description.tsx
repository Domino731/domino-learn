import {FunctionComponent} from "react";
import {DscContainer} from "../../style/elements/homePage/description";
import {DescriptionItem} from "./DescriptionItem-subcomponent-for-description";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";
import {DscPlanetColorful, DscPlanetJupiter, DscPlanetMercury} from "../../style/elements/homePage/description";
import colorfulPlanet from "../../images/planet_colorful.png";
import jupiterPlanet from "../../images/planet_jupiter.png";
import mercuryPlanet from "../../images/planet_mercury.png"
export const Description: FunctionComponent = () : JSX.Element => {
    return <DscContainer>
        <DescriptionItem language={htmlClass}/>
        <DescriptionItem language={cssClass} reverse/>
        <DescriptionItem language={jsClass}/>

        <DscPlanetColorful src={colorfulPlanet} alt="colorful planet"/>
        <DscPlanetJupiter src={jupiterPlanet} alt="jupiter"/>
        <DscPlanetMercury src={mercuryPlanet} alt="mercury"/>
    </DscContainer>
}