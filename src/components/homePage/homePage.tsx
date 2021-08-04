import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {Navigation} from "./Navigation";
import {Hero} from "./Hero";

export const HomePage : FunctionComponent = () =>{
    return <Container>
        <Navigation/>
        <Hero/>
    </Container>
}