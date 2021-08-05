import {FunctionComponent} from "react";
import {FreepikThanks} from "../../style/general/generalStyles";
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
// saturn
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// smth colorful
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export const TasksBoard: FunctionComponent = (): JSX.Element => {
    return <TasksBoardContainer>

        <TasksBoardPosterContainer>
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
        </TasksBoardPosterContainer>

        <FreepikThanks>

            <div>
                <span><img src={saturnPlanet} alt="saturn"/></span>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>

            <div>
                <span><img src={colorfulPlanet} alt="colorful planet"/></span>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik
            </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></div>
        </FreepikThanks>

    </TasksBoardContainer>
}