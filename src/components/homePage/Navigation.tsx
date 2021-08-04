import {FunctionComponent} from "react";
import {NavContainer, NavTitle, NavList, NavListItem} from "../../style/elements/homePage/navigation";

export const Navigation: FunctionComponent = () => {
    return <NavContainer>

        <NavTitle>DOMINO LEARN</NavTitle>

        <NavList>
            <NavListItem>Worlds</NavListItem>
           <NavListItem>GitHub</NavListItem>
            <NavListItem>Other Projects</NavListItem>
            <NavListItem>Contact</NavListItem>
        </NavList>
    </NavContainer>
}