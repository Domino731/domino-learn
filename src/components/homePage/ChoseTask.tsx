import {FunctionComponent, useState} from "react";
import {ChoseTaskContainer} from "../../style/elements/homePage/choseTask";
import {TasksBoard} from "./TasksBoard-subcomponent-for-choseTask";
import {TasksSelect} from "../../style/elements/homePage/choseTask";
import {TaskSelectSingle} from "./TaskSelectSingle-subcomponenent-for-choseTask";
import {htmlClass} from "../../properties/htmlClass";
import {cssClass} from "../../properties/cssClass";
import {jsClass} from "../../properties/jsClass";

export const ChoseTask : FunctionComponent = () => {

    const [chosenTask, setChosenTask] = useState<string>("")

    const [flag, setFlag] = useState(false)
    const handleChangeChosenTask = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        setChosenTask(e.target.value)
        setFlag(true)
    }

    return <ChoseTaskContainer>
      <TasksBoard flag={flag}/>
      <TasksSelect>
         <TaskSelectSingle task={"htmlTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask} language={htmlClass}/>
          <TaskSelectSingle task={"cssTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask} language={cssClass}/>
          <TaskSelectSingle task={"jsTasks"} chosenTask={chosenTask} setTasks={handleChangeChosenTask} language={jsClass}/>
      </TasksSelect>
    </ChoseTaskContainer>
}