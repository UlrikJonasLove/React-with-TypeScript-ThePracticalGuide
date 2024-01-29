import goalsImage from "./assets/goals.jpg"
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx"
import { useState } from "react"
import NewGoal from "./components/NewGoal.tsx";

export type courseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<courseGoal[]>([]); // set the state into courseGoal array type, initial value is empty array
  
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: courseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal] // return previous data togheter with the new data
  });
}

function handleDeleteGoal(goalId: number) {
  setGoals((prevGoals) => {
    const updatedGoals = prevGoals.filter(goal => goal.id !== goalId)
    return updatedGoals
  })
}

  return (
    <main>
      <Header image={{src: goalsImage, alt: "A list of goals"}}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App