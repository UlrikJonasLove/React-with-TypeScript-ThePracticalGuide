import { CourseGoal } from "./CourseGoal";
import { type courseGoal as Course } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type Props = {
    goals: Course[]; // making goals into the type of Course array
    onDeleteGoal: (id: number) => void; // type of function that returns void
}

export default function CorseGoalList({goals, onDeleteGoal}: Props) {
    if(goals.length === 0) {
      return <InfoBox mode="hint">
        You have no course goal yet, start adding some!
      </InfoBox>
    }
  
    let warningBox: ReactNode;

    if(goals.length >= 4) {
      warningBox = <InfoBox mode="warning" serverity="high">You are collecting a lof of goals, dont put too much o your plate</InfoBox>
    }

  return (
    <>
    {warningBox}
    <ul>
        {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
        ))}
      </ul>
    </>
        
    );
}