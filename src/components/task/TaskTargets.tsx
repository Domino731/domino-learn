import {FunctionComponent} from "react";
import {
    TaskAidsList,
    TaskAidsTitle,
    TaskAidsWrapper,
    TaskSectionHeader,
    TaskTarget,
    TaskTargetCheckbox,
    TaskTargetNumber,
    TaskTargetsWrapper, TaskTargetText
} from "../../style/elements/tasks/task";
import {TaskAid} from "./TaskAid";
import {IFPropsTaskTargets} from "../../types/types";

export const TaskTargets : FunctionComponent<IFPropsTaskTargets> =  ({targets, title, aidArr}) : JSX.Element => {
    return <>
        {/*task targets list*/}
        <TaskSectionHeader><i className="fas fa-bullseye"/> <span>Your task</span></TaskSectionHeader>
        <TaskTargetsWrapper>
            {targets.map((el, num) => <TaskTarget key={`${title}_taskTarget_${num}`}>

                {el.solved === null && <TaskTargetCheckbox backgroundColor={"#e5e3f1"}/>}
                {el.solved === false && <TaskTargetCheckbox backgroundColor={"#f9320c"}><i
                    className="fas fa-times"/></TaskTargetCheckbox>}
                {el.solved === true &&
                <TaskTargetCheckbox backgroundColor={"#75D701"}><i
                    className="fas fa-check"/></TaskTargetCheckbox>}
                <TaskTargetNumber>{el.number}. </TaskTargetNumber>
                <TaskTargetText dangerouslySetInnerHTML={{__html: el.target}}/>
            </TaskTarget>)}
        </TaskTargetsWrapper>

        <TaskAidsWrapper>
            <TaskAidsTitle>Task aids</TaskAidsTitle>
            <TaskAidsList>
                {aidArr.map((el, num) => <TaskAid aid={el} key={`${title}_taskAid_${num}`}/>)}
            </TaskAidsList>
        </TaskAidsWrapper>
        <img src="" alt=""/>
    </>
}
