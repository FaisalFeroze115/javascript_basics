import React, { useContext, useState } from 'react'
import { DispatchContext } from '../context/taskContext'

const AddItem = () => {

    const [text, setText] = useState("")
    const dispatch = useContext(DispatchContext)

    return (
    <div className='add_item_block'>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{
            setText("")
            dispatch({
                type: "added",
                text: text
            })
            }}>Add Item</button>
    </div>
  )
}

export default AddItem