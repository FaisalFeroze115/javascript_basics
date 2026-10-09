import React, { useState } from 'react'

const Item = ({task, onChange, onDelete}) => {

    const[isEditing, setIsEditing] = useState(false)


    return (
        <div className='item_list'>
            
            <input type="checkbox" checked={task.isDone} onChange={()=>{onChange({
                ...task,
                isDone: !task.isDone
            })}}/>

            {
                isEditing ? <input type="text" value={task.task} onChange={(e)=>{onChange({
                ...task,
                task: e.target.value
            })}}/> : <span>{task.task}</span>
            }

            {
                isEditing ? <button onClick={()=>{setIsEditing(false)}}>Save</button> : <button onClick={()=>{setIsEditing(true)}}>Edit</button> 
            }

            <button onClick={()=>{onDelete(task.id)}}>Delete</button>
        </div>
  )
}

export default Item