import React, { useState } from 'react'

const AddItem = ({onAddItem}) => {

    const [text, setText] = useState("")

    return (
    <div className='add_item_block'>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{
            onAddItem(text)
            setText("")
            }}>Add Item</button>
    </div>
  )
}

export default AddItem