import {FunctionComponent} from "react";
import {FooterContainer, FooterMediaList, FooterMediaItem, CopyrightWrapper, FooterFreepik} from "../../style/elements/homePage/footer";

/** subcomponent for HomePage, renders freepik icons authors, and socials links  */
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
        <FooterFreepik>
             <a href='https://www.freepik.com/vectors/star' rel="noopener noreferrer" target="_blank">Star vector created by vectorpouch - www.freepik.com</a> 
        </FooterFreepik>
      
    </FooterContainer>
}