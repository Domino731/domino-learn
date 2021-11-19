import {FunctionComponent, useState} from "react";
import {
    HtmlFooterTasksWrapper
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
    TaskFooterListBtn,
    TaskFooter
} from "../../style/elements/tasks/task";
import {Link} from "react-router-dom";
import plutoPlanet from "../../images/planet_pluto.png";
import marsPlanet from "../../images/planet_mars.png";
import planets from "../../images/planets.png";
import {IFPropsTaskFooter} from "../../types/types";
import footerBg from "../../images/quiz_html_background.svg";

/**
 * Footer for htmlTask, which contains the number of the current task, lists with tasks
 * @param allTasks - array with tasks, which will be used to render the list with tasks
 * @param taskNumber - current task number
 */
export const HtmlTaskFooter: FunctionComponent<IFPropsTaskFooter> = ({allTasks, taskNumber}): JSX.Element => {

    //  flag to toggle list all javascript tasks
    const [flag, setFlag] = useState<boolean>(false);

    // toggle flag state -> toggle tasks list
    const handleChangeFlag = (): void => setFlag(!flag);

    return <TaskFooter background={footerBg}>

        {/*title, link to home page*/}
        <TaskFooterTitle>
            <Link to="/">
                DOMINO LEARN
            </Link>
        </TaskFooterTitle>

        {/*current task number*/}
        <TaskFooterTaskNumber> {taskNumber} / {allTasks.length}</TaskFooterTaskNumber>

 {/*panel by which user can moving between available tasks*/}
        <TaskFooterSwitchBar>

            {/*when user click on this button, tasks list will be showed*/}
            <TaskFooterListBtn onClick={handleChangeFlag}>
                <i className="fas fa-clipboard-list"/>
            </TaskFooterListBtn>


            {taskNumber !== 1 &&
            <TaskFooterSwitchButton color="#fe9668"> <Link
                to={`/html-task/${taskNumber - 1}`}>Back</Link></TaskFooterSwitchButton>}
            {taskNumber < allTasks.length &&
            <TaskFooterSwitchButton color="#fe9668"><Link
                to={`/html-task/${taskNumber + 1}`}>Next</Link></TaskFooterSwitchButton>}

            {/*tasks list*/}
            {flag && <HtmlFooterTasksWrapper>

                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={planets}/>
                    <TaskFooterTasksPlanet2 src={plutoPlanet}/>
                    <TaskFooterTasksPlanet3 src={marsPlanet}/>
                </TaskFooterTasksPlanets>

                {/*list*/}
                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`htmlFooterTasks-${el.title}-${num}`}
                                                                    onClick={() => setFlag(false)} solved={el.solved}>
                        <Link to={`/html-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>

            </HtmlFooterTasksWrapper>}
        </TaskFooterSwitchBar>

    </TaskFooter >
}