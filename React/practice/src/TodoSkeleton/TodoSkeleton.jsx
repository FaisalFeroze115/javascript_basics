import './TodoSkeleton.css'
import Header from './components/Header'
import AddItem from "./components/AddItem"
import Lists from './components/Lists'
import { useState } from 'react'


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

function getNextId(task){
    return task[task.length -1].id + 1
}

const TodoSkeleton = () => {

    const [tasks, setTasks] = useState(initialLists)

    const handleAddItem = (text) => {
        let newItem = {
            id: getNextId(tasks),
            task: text,
            isDone: false
        }

        let newTasks = [
            ...tasks,
            newItem
        ]

        setTasks(newTasks)
    }

    const handleTaskDelete = (id) => {
        let newTasks = tasks.filter((task)=>{
            if(task.id !== id){
                return task
            }
        })

        setTasks(newTasks)
    }

    const handleOnChange = (task) =>{
        let newTasks = tasks.map((item)=>{
            if(task.id === item.id){
                return task
            }else{
                return item
            }
        })
        setTasks(newTasks)
    }

    return (
        <div className='todo_body'>
            <Header />
            <AddItem onAddItem={handleAddItem}/>
            <Lists tasks={tasks} onChange={handleOnChange} onDelete={handleTaskDelete} />
        </div>
    )
}

export default TodoSkeleton