import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {Navigation} from "./Navigation";
import {Hero} from "./Hero";
import {Description} from "./Description";
import {ChoseTask} from "./ChoseTask";

export const HomePage : FunctionComponent = () =>{
    return <Container>
        <Navigation/>
        <Hero/>
        <Description/>
        <ChoseTask/>
    </Container>
}