import {FunctionComponent, useState} from "react";
import {JsFooter} from "../../style/elements/tasks/jsTask";
import {IFPropsTaskFooter} from "../../types/types";
import {Link} from "react-router-dom";
import {
    TaskFooterIcons,
    TaskFooterListBtn,
    TaskFooterSwitchBar,
    TaskFooterSwitchButton,
    TaskFooterTaskNumber, TaskFooterTasksItem, TaskFooterTasksList,
    TaskFooterTasksPlanet1,
    TaskFooterTasksPlanet2,
    TaskFooterTasksPlanet3,
    TaskFooterTasksPlanets,
    TaskFooterTitle
} from "../../style/elements/tasks/task";
import {JsFooterTasksWrapper} from "../../style/elements/tasks/jsTask";
import {HtmlFooterTasksWrapper} from "../../style/elements/tasks/htmlTask";
import plutoPlanet from "../../images/planet_pluto.png";
import neptunePlanet from "../../images/planet_neptune.png";
import marsPlanet from "../../images/planet_mars.png";
import {FreepikThanks} from "../../style/general/generalStyles";
import planets from "../../images/planets.png";

export const JsTaskFooter : FunctionComponent<IFPropsTaskFooter> = ({allTasks, taskNumber}) : JSX.Element => {


    // state with flag, when user change this state(icon with list <HtmlFooterListBtn>), list with tasks will be showed
    const [flag, setFlag] = useState<boolean>(false);

    const handleChangeFlag = (): void => setFlag(!flag);

    const scrollToTop = () : void => window.scrollTo(0,0);

    return <JsFooter>

        <TaskFooterTitle>
            <Link to="/">
                DOMINO LEARN
            </Link>
        </TaskFooterTitle>

        <TaskFooterTaskNumber> {taskNumber} / {allTasks.length}</TaskFooterTaskNumber>


        <TaskFooterSwitchBar>
            <TaskFooterListBtn onClick={handleChangeFlag}>
                <i className="fas fa-clipboard-list"/>
            </TaskFooterListBtn>
            {taskNumber !== 1 &&

            <TaskFooterSwitchButton onClick={scrollToTop} color="#ff595e"> <Link to={`/html-task/${taskNumber - 1}`}>Back</Link></TaskFooterSwitchButton>}
            {taskNumber < allTasks.length &&
            <TaskFooterSwitchButton onClick={scrollToTop} color="#ff595e"><Link to={`/html-task/${taskNumber + 1}`}>Next</Link></TaskFooterSwitchButton>}

            {flag && <JsFooterTasksWrapper>

                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={plutoPlanet}/>
                    <TaskFooterTasksPlanet2 src={neptunePlanet}/>
                    <TaskFooterTasksPlanet3 src={marsPlanet}/>
                </TaskFooterTasksPlanets>

                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`jsFooterTasks-${el.title}-${num}`} onClick={() => setFlag(false)}>
                        <Link to={`/js-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>
            </JsFooterTasksWrapper>}
        </TaskFooterSwitchBar>

        <TaskFooterIcons>
            <FreepikThanks style={{fontSize: "1.063rem"}}>
                <div>
                    <span><img src={marsPlanet} alt="mars"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

                <div>
                    <span><img src={plutoPlanet} alt="pluto"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

                <div>
                    <span><img src={neptunePlanet} alt="neptune"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

            </FreepikThanks>
        </TaskFooterIcons>
    </JsFooter>
}