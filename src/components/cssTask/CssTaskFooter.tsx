import {IFPropsTaskFooter} from "../../types/types";
import {FunctionComponent, useState} from "react";
import {
    CssFooterSwitchBar,
    CssFooterTasksWrapper,
} from "../../style/elements/tasks/cssTask";
import {
    TaskFooterTaskNumber,
    TaskFooterTitle,
    TaskFooterListBtn,
    TaskFooterSwitchButton,
    TaskFooterTasksPlanets,
    TaskFooterTasksPlanet1,
    TaskFooterTasksPlanet2,
    TaskFooterTasksPlanet3, TaskFooterTasksList, TaskFooterTasksItem, TaskFooter
} from "../../style/elements/tasks/task";
import {Link} from "react-router-dom";
import neptunPlanet from "../../images/planet_neptune.png"
import saturnPlanet from "../../images/planet_saturn.png"
import marsPlanet from "../../images/planet_mars.png";
import footerBg from "../../images/quiz_css_background.svg";

/**
 * Footer for cssTask, which contains the number of the current task, lists with tasks
 * @param allTasks - array with tasks, which will be used to render the list with tasks
 * @param taskNumber - current task number
 */
export const CssTaskFooter: FunctionComponent<IFPropsTaskFooter> = ({allTasks, taskNumber}): JSX.Element => {

    // flag to toggle list all javascript tasks
    const [flag, setFlag] = useState<boolean>(false);

    /** change flag state -> toggle tasks list */
    const handleChangeFlag = (): void => setFlag(!flag);

    return <TaskFooter background={footerBg}>

        {/*panel by which user can moving between available tasks*/}
        <CssFooterSwitchBar>

            {/*when user click on this button, tasks list will be showed*/}
            <TaskFooterListBtn onClick={handleChangeFlag}>
                <i className="fas fa-clipboard-list"/>
            </TaskFooterListBtn>

            {taskNumber !== 1 &&
            <TaskFooterSwitchButton color="#7295fa"> <Link
                to={`/css-task/${taskNumber - 1}`}>Back</Link></TaskFooterSwitchButton>}
            {taskNumber < allTasks.length &&
            <TaskFooterSwitchButton color="#7295fa"><Link
                to={`/css-task/${taskNumber + 1}`}>Next</Link></TaskFooterSwitchButton>}

            {/*tasks list*/}
            {flag && <CssFooterTasksWrapper>
                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={saturnPlanet}/>
                    <TaskFooterTasksPlanet2 src={neptunPlanet}/>
                    <TaskFooterTasksPlanet3 src={marsPlanet}/>
                </TaskFooterTasksPlanets>

                {/*list*/}
                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`cssFooterTasks-${el.title}-${num}`}
                                                                    onClick={() => setFlag(false)} solved={el.solved}>
                        <Link to={`/css-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>
            </CssFooterTasksWrapper>}

        </CssFooterSwitchBar>

        {/*current task number*/}
        <TaskFooterTaskNumber> {taskNumber} / {allTasks.length}</TaskFooterTaskNumber>

        {/*title, link to home page*/}
        <TaskFooterTitle>
            <Link to="/">
                DOMINO LEARN
            </Link>
        </TaskFooterTitle>

    </TaskFooter>
}