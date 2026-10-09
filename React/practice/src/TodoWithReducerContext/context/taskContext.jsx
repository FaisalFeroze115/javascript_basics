import { createContext,useReducer } from "react";
import {todoReducer} from "../reducer/todoReducer"

export const TaskContext = createContext(null)
export const DispatchContext = createContext(null)

const initialLists = [
    {
        id: 1,
        task: "Hike Mount Ijen",
        isDone: true
    },

    {
        id: 2,
        task: "Visit Mount Bromo",
        isDone: false
    },

    {
        id: 3,
        task: "Go to Nusa Penida",
        isDone: false
    }
]

export default function TaskContextProvider ({children}) {
    const[tasks, dispatch] = useReducer(todoReducer, initialLists)
    return(
        <TaskContext.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TaskContext.Provider>
    )
}


