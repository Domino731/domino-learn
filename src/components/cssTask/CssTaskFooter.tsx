import {IFPropsTaskFooter} from "../../types/types";
import {FunctionComponent, useState} from "react";
import {CssFooter, CssFooterSwitchBar, CssFooterTasksWrapper, CssFooterDecoration} from "../../style/elements/tasks/cssTask";
import {
    TaskFooterTaskNumber,
    TaskFooterTitle,
    TaskFooterListBtn,
    TaskFooterSwitchButton,
    TaskFooterTasksPlanets,
    TaskFooterTasksPlanet1,
    TaskFooterTasksPlanet2,
    TaskFooterTasksPlanet3, TaskFooterTasksList, TaskFooterTasksItem, TaskFooterIcons
} from "../../style/elements/tasks/task";
import {Link} from "react-router-dom";
import neptunPlanet from "../../images/planet_neptune.png"
import saturnPlanet from "../../images/planet_saturn.png"
import marsPlanet from "../../images/planet_mars.png";
import {FreepikThanks} from "../../style/general/generalStyles";
import neptunePlanet from "../../images/planet_neptune.png";

export const CssTaskFooter: FunctionComponent<IFPropsTaskFooter> = ({allTasks, taskNumber}) : JSX.Element => {

    // state with flag, when user change this state(icon with list <HtmlFooterListBtn>), list with tasks will be showed
    const [flag, setFlag] = useState<boolean>(false)

    const handleChangeFlag = (): void => setFlag(!flag)

    const scrollToTop = () : void => window.scrollTo(0,0)
    return <CssFooter>

        <CssFooterSwitchBar>

            <TaskFooterListBtn onClick={handleChangeFlag}>
                <i className="fas fa-clipboard-list"/>
            </TaskFooterListBtn>

            {taskNumber !== 1 &&
            <TaskFooterSwitchButton onClick={scrollToTop} color="#00f5d4"> <Link to={`/css-task/${taskNumber - 1}`}>Back</Link></TaskFooterSwitchButton>}
            {taskNumber < allTasks.length &&
            <TaskFooterSwitchButton onClick={scrollToTop} color="#00f5d4"><Link to={`/css-task/${taskNumber + 1}`}>Next</Link></TaskFooterSwitchButton>}

            {flag && <CssFooterTasksWrapper>
                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={saturnPlanet}/>
                    <TaskFooterTasksPlanet2 src={neptunPlanet}/>
                    <TaskFooterTasksPlanet3 src={marsPlanet}/>
                </TaskFooterTasksPlanets>

                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`cssFooterTasks-${el.title}-${num}`} onClick={() => setFlag(false)} solved={el.solved}>
                        <Link to={`/css-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>
            </CssFooterTasksWrapper>}

        </CssFooterSwitchBar>
        <TaskFooterTaskNumber> {taskNumber} / {allTasks.length}</TaskFooterTaskNumber>


        <TaskFooterTitle>
            <Link to="/">
                DOMINO LEARN
            </Link>
        </TaskFooterTitle>



        <TaskFooterIcons>
            <FreepikThanks style={{fontSize: "1.063rem"}}>
                <div>
                    <span><img src={marsPlanet} alt="mars"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

                <div>
                    <span><img src={neptunePlanet} alt="neptune"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

                <div>
                    <span><img src={saturnPlanet} alt="saturn"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

            </FreepikThanks>
        </TaskFooterIcons>

        <CssFooterDecoration/>
    </CssFooter>
}