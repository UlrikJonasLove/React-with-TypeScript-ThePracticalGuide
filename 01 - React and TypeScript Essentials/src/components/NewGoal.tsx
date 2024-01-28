import { useRef, type FormEvent } from "react"

type Props = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: Props) {
    const goal = useRef<HTMLInputElement>(null); // by default they return undefined value
    const summary = useRef<HTMLInputElement>(null); // change to null to avoid error

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value; // ! tells TS that it will never be null
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Course Goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}