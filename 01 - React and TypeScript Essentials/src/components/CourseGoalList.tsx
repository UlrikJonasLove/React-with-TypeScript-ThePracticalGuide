import { CourseGoal } from "./CourseGoal";
import { type courseGoal as Course } from "../App";

type Props = {
    goals: Course[]; // making goals into the type of Course array
    onDeleteGoal: (id: number) => void; // type of function that returns void
}

export default function CorseGoalList({goals, onDeleteGoal}: Props) {
    return (
        <ul>
        {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
        ))}
      </ul>
    );
}