import React, { useContext, useState } from 'react'
import { DispatchContext } from '../context/taskContext'

const Item = ({task}) => {

    const[isEditing, setIsEditing] = useState(false)

    const dispatch = useContext(DispatchContext)


    return (
        <div className='item_list'>
            
            <input type="checkbox" checked={task.isDone} onChange={()=>{
                dispatch({
                    type: "changed",
                    task: {
                         ...task,
                        isDone: !task.isDone
                    }
                })
            }}/>

            {
                isEditing ? <input type="text" value={task.task} onChange={(e)=>{ dispatch(
                    {
                        type: "changed",
                        task: {
                            ...task,
                             task: e.target.value
                        }
                        
                    }
                )}}/> : <span>{task.task}</span>
            }

            {
                isEditing ? <button onClick={()=>{setIsEditing(false)}}>Save</button> : <button onClick={()=>{setIsEditing(true)}}>Edit</button> 
            }

            <button onClick={()=>{
                dispatch({
                    type: "deleted",
                    id: task.id
                })
            }}>Delete</button>
        </div>
  )
}

export default Item