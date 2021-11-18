import {FunctionComponent} from "react";
import {
    TaskAidsList,
    TaskAidsTitle,
    TaskAidsWrapper,
    TaskSectionHeader,
    TaskSectionScale,
    TaskTarget,
    TaskTargetCheckbox,
    TaskTargetNumber,
    TaskTargetsWrapper, TaskTargetText
} from "../../style/elements/tasks/task";
import {TaskAid} from "./TaskAid";
import {IFPropsTaskTargets} from "../../types/types";

/**
 * Component which renders task target, and support resources
 * @param targets - array with data about task target
 * @param title - string used to create key
 * @param aidArr - array with data about task aid
 */
export const TaskTargets: FunctionComponent<IFPropsTaskTargets> = ({targets, title, aidArr}): JSX.Element => {
    return <TaskSectionScale>
        {/* header */}
        <TaskSectionHeader><i className="fas fa-bullseye"/><span>Your task</span></TaskSectionHeader>

        {/*task targets list*/}
        <TaskTargetsWrapper>
            {targets.map((el, num) => <TaskTarget key={`${title}_taskTarget_${num}`}>
                {/* task isnt solved yet -> white checkbox*/}
                {el.solved === null && <TaskTargetCheckbox backgroundColor={"#e5e3f1"}/>}

                {/* taks is solved incorrectly -> red checkbox */}
                {el.solved === false && <TaskTargetCheckbox backgroundColor={"#f9320c"}><i
                    className="fas fa-times"/></TaskTargetCheckbox>}

                {/* task is solved correctly */}
                {el.solved === true &&
                <TaskTargetCheckbox backgroundColor={"#75D701"}>
                    <i className="fas fa-check"/>
                    </TaskTargetCheckbox>}
                  
                {/* task number */}
                <TaskTargetNumber>{el.number}. </TaskTargetNumber>

                {/* task requirements */}
                <TaskTargetText dangerouslySetInnerHTML={{__html: el.target}}/>
            </TaskTarget>)}
        </TaskTargetsWrapper>

        {/*task aids*/}
        <TaskAidsWrapper>
            <TaskAidsTitle>Task aids</TaskAidsTitle>
            <TaskAidsList>
                {aidArr.map((el, num) => <TaskAid aid={el} key={`${title}_taskAid_${num}`}/>)}
            </TaskAidsList>
        </TaskAidsWrapper>
    </TaskSectionScale>
}
