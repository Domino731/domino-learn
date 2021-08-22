import {FunctionComponent, useEffect, useState} from "react";
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
    TasksPlanet1, TasksPlanet2, TasksBoardPosterContainer, TasksList, TasksListItem
} from "../../style/elements/homePage/choseTask";
import saturnPlanet from "../../images/planet_saturn.png";
import colorfulPlanet from "../../images/planet_colorful.png"
import {IFAllTasks, IFPropsTasksBoard} from "../../types/types";
import {getAllTasks} from "../../firebase/operations";
import {Link} from "react-router-dom";

export const TasksBoard: FunctionComponent<IFPropsTasksBoard> = ({selectedTasks}): JSX.Element => {

    // state with all tasks of a particular type
    const [tasks, setTasks] = useState<IFAllTasks[]>([])

    // get the tasks when user select task type
    useEffect(() => {
        switch (selectedTasks) {
            case "htmlTasks":
                return getAllTasks("htmlTasks", "solvedCssTasks", setTasks)
            case "cssTasks":
                return getAllTasks("cssTasks", "solvedCssTasks", setTasks)
            case "jsTasks":
                return getAllTasks("jsTasks", "solvedCssTasks", setTasks)
            default:
                return setTasks([])
        }
    }, [selectedTasks])


    return <TasksBoardContainer>
        <TasksBoardPosterContainer>
            {selectedTasks === "" && <TasksBoardTitleWrapper>
                <TasksBoardTitle1>Chose Your World</TasksBoardTitle1>
                <TasksBoardTitle2>Chose Your World</TasksBoardTitle2>
                <TasksBoardTitle3>Chose Your World</TasksBoardTitle3>
                <TasksBoardTitle4>Chose Your World</TasksBoardTitle4>
                <TasksBoardTitle5>Chose Your World</TasksBoardTitle5>
                <TasksBoardTitle6>Chose Your World</TasksBoardTitle6>
                <TasksBoardTitle7>Chose Your World</TasksBoardTitle7>
            </TasksBoardTitleWrapper>}
            {selectedTasks === "cssTasks" && <TasksList>
                {tasks.map((el, num) => <TasksListItem solved={el.solved}>
                    <Link to={`/css-task/${el.number}`}>{el.number}</Link>
                </TasksListItem>)}
                    </TasksList>}

            {selectedTasks === "jsTasks" && <TasksList>
                {tasks.map((el, num) => <TasksListItem solved={el.solved}>
                    <Link to={`/js-task/${el.number}`}>{el.number}</Link>
                </TasksListItem>)}
            </TasksList>}

            {selectedTasks === "htmlTasks" && <TasksList>
                {tasks.map((el, num) => <TasksListItem solved={el.solved} key={`tasks_board_${num}`}>
                    <Link to={`/html-task/${el.number}`}>{el.number}</Link>
                </TasksListItem>)}
            </TasksList>}

                    <TasksPlanetWrapper>
                        <TasksPlanet1 src={saturnPlanet} alt="saturn"/>
                        <TasksPlanet2 src={colorfulPlanet} alt="colorful planet"/>
                    </TasksPlanetWrapper>
                </TasksBoardPosterContainer>




                    </TasksBoardContainer>
                    }