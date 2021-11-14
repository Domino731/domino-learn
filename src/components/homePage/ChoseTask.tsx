import {FunctionComponent, useState} from "react";
import {ChoseTaskContainer} from "../../style/elements/homePage/choseTask";
import {TasksBoard} from "./TasksBoard";
import {TasksSelect} from "../../style/elements/homePage/choseTask";
import {TaskSelectSingle} from "./TaskSelectSingle";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";

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
                              language={htmlClass}/>
            <TaskSelectSingle task={"cssTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask}
                              language={cssClass}/>
            <TaskSelectSingle task={"jsTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask}
                              language={jsClass}/>
        </TasksSelect>
    </ChoseTaskContainer>
}