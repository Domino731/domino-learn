import {FunctionComponent} from "react";
import {ChoseTaskContainer} from "../../style/elements/homePage/choseTask";
import {TasksBoard} from "./TasksBoard-subcomponent-for-choseTask";

export const ChoseTask : FunctionComponent = () => {
    return <ChoseTaskContainer>
      <TasksBoard/>
    </ChoseTaskContainer>
}