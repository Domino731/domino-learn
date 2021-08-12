import {FunctionComponent} from "react";
import {
    TasksBoardContainer,
    TasksBoardTitleWrapper,
    TasksBoardTitle1,
    TasksBoardTitle2,
    TasksBoardTitle3,
    TasksBoardTitle6,
    TasksBoardTitle4,
    TasksBoardTitle5,
    TasksBoardTitle7,
    TasksPlanetWrapper,
    TasksPlanet1, TasksPlanet2, TasksBoardPosterContainer
} from "../../style/elements/homePage/choseTask";
import saturnPlanet from "../../images/planet_saturn.png";
import colorfulPlanet from "../../images/planet_colorful.png"

export const TasksBoard: FunctionComponent<{flag: boolean}> = ({flag}): JSX.Element => {

    return <TasksBoardContainer>
        {flag === false && <TasksBoardPosterContainer>
            <TasksBoardTitleWrapper>
                <TasksBoardTitle1>Chose Your World</TasksBoardTitle1>
                <TasksBoardTitle2>Chose Your World</TasksBoardTitle2>
                <TasksBoardTitle3>Chose Your World</TasksBoardTitle3>
                <TasksBoardTitle4>Chose Your World</TasksBoardTitle4>
                <TasksBoardTitle5>Chose Your World</TasksBoardTitle5>
                <TasksBoardTitle6>Chose Your World</TasksBoardTitle6>
                <TasksBoardTitle7>Chose Your World</TasksBoardTitle7>
            </TasksBoardTitleWrapper>
            <TasksPlanetWrapper>
                <TasksPlanet1 src={saturnPlanet} alt="saturn"/>
                <TasksPlanet2 src={colorfulPlanet} alt="colorful planet"/>
            </TasksPlanetWrapper>
        </TasksBoardPosterContainer>}




    </TasksBoardContainer>
}