import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() { // custom hook, start with "use"
    const timersCtx = useContext(TimersContext);

    if(timersCtx === null) {
        throw new Error("timersContext is null")
    }

    return timersCtx;
}

type TimersContextProviderProps = {
    children: ReactNode
}

type StartTimersActions = {
    type: 'START_TIMERS'
}

type StopTimersActions = {
    type: 'STOP_TIMERS'
}

type AddTimersActions = {
    type: 'ADD_TIMER';
    payload: Timer
}

type Action = StartTimersActions | StopTimersActions | AddTimersActions

function timersReducer(state: TimersState, action: Action): TimersState {
    if(action.type === 'START_TIMERS') {
        return {
            ...state, // returning the old state
            isRunning: true // just changing the isRunning state
        }
    }
    if(action.type === 'STOP_TIMERS') {
        return {
            ...state, // returning the old state
            isRunning: false // just changing the isRunning state
        }
    }
    if(action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state;
}

export default function TimersContextProvider({children}: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMERS'})
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}