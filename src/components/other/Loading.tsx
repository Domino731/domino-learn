import {FunctionComponent} from "react";
import {LoadingContainer,
    LoadingBox,
    LoadingRadius1 ,
    LoadingRadius2,
    LoadingRadius3,
    LoadingRadius4,
    LoadingAstronaut} from "../../style/elements/other/loading";
import astronaut from "../../images/astronaut_loading.svg";

/**Component responsible for loading screen with astronaut */ 
export const Loading : FunctionComponent = () : JSX.Element => {
    return <LoadingContainer>
        <LoadingBox>
            <LoadingRadius1/>
            <LoadingRadius2/>
            <LoadingRadius3/>
            <LoadingRadius4/>
            <LoadingAstronaut src={astronaut} alt="astronaut"/>
        </LoadingBox>
        <h1>Loading...</h1>
    </LoadingContainer>
}