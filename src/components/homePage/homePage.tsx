import {FunctionComponent} from "react";
import {Container} from "../../style/general/generalStyles";
import {Navigation} from "./Navigation";
import {Hero} from "./Hero";
import {Description} from "./Description";
import {ChoseTask} from "./ChoseTask";
import {Footer} from "./Footer";
import {Additions} from "./Additions";

// Home page component
export const HomePage : FunctionComponent = () =>{
    return <Container>
        <Navigation/>
        <main>
            <Hero/>
            <Description/>
            <ChoseTask/>
            <Additions/>
        </main>
        <Footer/>
    </Container>
}