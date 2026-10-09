import './TodoWithReducer.css'
import Header from './components/Header'
import AddItem from "./components/AddItem"
import Lists from './components/Lists'
import { useReducer, useState } from 'react'
import {todoReducer} from "./reducer/todoReducer"


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

// function getNextId(task){
//     return task[task.length -1].id + 1
// }

const TodoWithReducer = () => {
    const[tasks, dispatch] = useReducer(todoReducer, initialLists)

    const handleAddItem = (text) => {
        dispatch({
            type: "added",
            text: text
        })
    }

    const handleTaskDelete = (id) => {
        dispatch({
            type: "deleted",
            id: id
        })
    }

    const handleOnChange = (task) =>{
        dispatch({
            type: "changed",
            task: task
        })
    }

    return (
        <div className='todo_body'>
            <Header />
            <AddItem onAddItem={handleAddItem}/>
            <Lists tasks={tasks} onChange={handleOnChange} onDelete={handleTaskDelete} />
        </div>
    )
}

export default TodoWithReducer