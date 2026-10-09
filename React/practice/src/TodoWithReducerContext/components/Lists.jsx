import Item from "./Item"
import { TaskContext } from "../context/taskContext"
import { useContext } from "react"

const Lists = () => {
  const tasks = useContext(TaskContext)
  return (
    <div>
        {
          tasks.map((task) => (
            <Item key={task.id} task={task}/>
          ))
        }
        
    </div>
  )
}

export default Lists