import {FunctionComponent, useState} from "react";
import {
    HtmlFooter,
    HtmlFooterTasksWrapper,
    HtmlDecorationFooter
} from "../../style/elements/tasks/htmlTask";
import {
    TaskFooterTaskNumber,
    TaskFooterSwitchBar,
    TaskFooterTasksList,
    TaskFooterTasksPlanet1,
    TaskFooterTasksPlanet2,
    TaskFooterTasksPlanet3,
    TaskFooterTasksItem,
    TaskFooterTasksPlanets,
    TaskFooterIcons,
    TaskFooterTitle,
    TaskFooterSwitchButton,
    TaskFooterListBtn
} from "../../style/elements/tasks/task";
import {FreepikThanks} from "../../style/general/generalStyles";
import {Link} from "react-router-dom";
import plutoPlanet from "../../images/planet_pluto.png";
import marsPlanet from "../../images/planet_mars.png";
import planets from "../../images/planets.png";
import {IFPropsTaskFooter} from "../../types/types";


export const HtmlTaskFooter: FunctionComponent<IFPropsTaskFooter> = ({allTasks, taskNumber}): JSX.Element  => {

    // state with flag, when user change this state(icon with list <HtmlFooterListBtn>), list with tasks will be showed
    const [flag, setFlag] = useState<boolean>(false)

    const handleChangeFlag = (): void => setFlag(!flag)

    const scrollToTop = () : void => window.scrollTo(0,0)
    return <HtmlFooter>
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

            {flag && <HtmlFooterTasksWrapper>

                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={planets}/>
                    <TaskFooterTasksPlanet2 src={plutoPlanet}/>
                    <TaskFooterTasksPlanet3 src={marsPlanet}/>
                </TaskFooterTasksPlanets>

                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`htmlFooterTasks-${el.title}-${num}`} onClick={() => setFlag(false)} solved={el.solved}>
                        <Link to={`/html-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>
            </HtmlFooterTasksWrapper>}
        </TaskFooterSwitchBar>

        <TaskFooterIcons>
            <FreepikThanks style={{fontSize: "1.063rem"}}>
                <div>
                    <span><img src={marsPlanet} alt="mars"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>

                <div>
                    <span><img src={planets} alt="planets"/></span>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart"
                                          title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/"
                                                                                        title="Flaticon">www.flaticon.com</a>
                    </div>
                </div>

                <div>
                    <span><img src={plutoPlanet} alt="pluto"/></span>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </FreepikThanks>
        </TaskFooterIcons>

        {/*decorations*/}
        <HtmlDecorationFooter/>

    </HtmlFooter>
}