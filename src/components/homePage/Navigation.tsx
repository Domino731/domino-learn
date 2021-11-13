import { FunctionComponent } from "react";
import { NavContainer, NavTitle, NavList, NavListItem, NavWave } from "../../style/elements/homePage/navigation";
import { Link } from "react-router-dom";

// subcomponent and navigation for HomePage, renders title and links list
export const Navigation: FunctionComponent = () => {

    return <>
        {/* navigation container */}
        <NavContainer>
            {/* title */}
            <NavTitle>DOMINO LEARN</NavTitle>

            {/* links and hooks */}
            <NavList>
                <NavListItem><a href="#worlds">Worlds</a></NavListItem>
                <NavListItem><Link to="/code-editor">Code Editor</Link></NavListItem>
                <NavListItem><Link to="/quiz-menu">Quiz</Link></NavListItem>
                <NavListItem> <a href="https://github.com/Domino731" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-github" />Github</a></NavListItem>
            </NavList>

        </NavContainer>

        <NavWave>
        
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
        </NavWave>
    </>
}