import {FunctionComponent} from "react";
import {NavContainer, NavTitle, NavList, NavListItem} from "../../style/elements/homePage/navigation";
import {Link} from "react-router-dom";

export const Navigation : FunctionComponent = () => {
    return <NavContainer>

        <NavTitle>DOMINO LEARN</NavTitle>

        <NavList>
            <NavListItem><a href="#worlds">Worlds</a></NavListItem>
            <NavListItem><Link to="/code-editor">Code Editor</Link></NavListItem>
            <NavListItem><Link to="/quiz-menu">Quiz</Link></NavListItem>
            <NavListItem> <a href="https://github.com/Domino731" target="_blank" rel="noopener noreferrer"><i
                className="fab fa-github"/>Github</a></NavListItem>
        </NavList>
    </NavContainer>
}