import {FunctionComponent, useState} from "react";
import {ChoseTaskContainer} from "../../style/elements/homePage/choseTask";
import {TasksBoard} from "./TasksBoard";
import {TasksSelect} from "../../style/elements/homePage/choseTask";
import {TaskSelectSingle} from "./TaskSelectSingle";
import {HTMLData} from "../../properties/htmlData";
import {CSSData} from "../../properties/cssData";
import {JSData} from "../../properties/jsData";

// Subcomponent for HomePage by which user can select tasks
export const ChoseTask: FunctionComponent = () => {

    // State with actual selected tasks type, the task in the TasksBoard component will be downloaded on this,
    // and he's used to mark checkbox in TaskSelectSingle component
    const [chosenTask, setChosenTask] = useState<string>("")

    // changing selected tasks type
    const handleChangeChosenTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
       return  setChosenTask(e.target.value)
    }

    return <ChoseTaskContainer id="worlds">
        <TasksBoard selectedTasks={chosenTask}/>
        <TasksSelect>
            <TaskSelectSingle task={"htmlTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask}
                              language={HTMLData}/>
            <TaskSelectSingle task={"cssTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask}
                              language={CSSData}/>
            <TaskSelectSingle task={"jsTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask}
                              language={JSData}/>
        </TasksSelect>
    </ChoseTaskContainer>
}