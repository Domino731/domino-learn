import { FunctionComponent, useState } from "react";
import { IFPropsTaskFooter } from "../../types/types";
import { Link } from "react-router-dom";
import {
    TaskFooter,
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
import { JsFooterTasksWrapper } from "../../style/elements/tasks/jsTask";
import plutoPlanet from "../../images/planet_pluto.png";
import neptunePlanet from "../../images/planet_neptune.png";
import marsPlanet from "../../images/planet_mars.png";
import footerBg from "../../images/quiz_js_background.svg";

export const JsTaskFooter: FunctionComponent<IFPropsTaskFooter> = ({ allTasks, taskNumber }): JSX.Element => {


    // flag to toggle list all javascript tasks
    const [flag, setFlag] = useState<boolean>(false);

    // change flag state -> toggle list with tasks
    const handleChangeFlag = (): void => setFlag(!flag);

    const scrollToTop = (): void => window.scrollTo(0, 0);

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

            {/* toggle list with tasks */}
            <TaskFooterListBtn onClick={handleChangeFlag}>
                <i className="fas fa-clipboard-list" />
            </TaskFooterListBtn>

            {/* previous task */}
            {taskNumber !== 1 &&
                <TaskFooterSwitchButton onClick={scrollToTop} color="#ffe57e"> <Link to={`/html-task/${taskNumber - 1}`}>Back</Link></TaskFooterSwitchButton>}

            {/* next tasks    */}
            {taskNumber < allTasks.length &&
                <TaskFooterSwitchButton onClick={scrollToTop} color="#ffe57e"><Link to={`/html-task/${taskNumber + 1}`}>Next</Link></TaskFooterSwitchButton>}

            {/* list with tasks */}
            {flag && <JsFooterTasksWrapper>

                {/*background for list with planets :)*/}
                <TaskFooterTasksPlanets>
                    <TaskFooterTasksPlanet1 src={plutoPlanet} />
                    <TaskFooterTasksPlanet2 src={neptunePlanet} />
                    <TaskFooterTasksPlanet3 src={marsPlanet} />
                </TaskFooterTasksPlanets>

                <TaskFooterTasksList>
                    {allTasks.map((el, num) => <TaskFooterTasksItem key={`jsFooterTasks-${el.title}-${num}`} onClick={() => setFlag(false)} solved={el.solved}>
                        <Link to={`/js-task/${el.number}`}>
                            {el.number}
                        </Link>
                    </TaskFooterTasksItem>)}
                </TaskFooterTasksList>

                
            </JsFooterTasksWrapper>}
        </TaskFooterSwitchBar>
    </TaskFooter >
}