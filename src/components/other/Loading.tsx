import {FunctionComponent} from "react";
import {LoadingContainer,
    LoadingBox,
    LoadingRadius1 ,
    LoadingRadius2,
    LoadingRadius3,
    LoadingRadius4,
    LoadingAstronaut} from "../../style/elements/other/loading";
import astronaut from "../../images/astronaut.png"
export const Loading : FunctionComponent = () : JSX.Element => {
    return <LoadingContainer>
        <LoadingBox>
            <LoadingRadius1/>
            <LoadingRadius2/>
            <LoadingRadius3/>
            <LoadingRadius4/>
            <LoadingAstronaut src={astronaut} alt="astronaut"/>
        </LoadingBox>
        <h1>Loading</h1>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </LoadingContainer>
}