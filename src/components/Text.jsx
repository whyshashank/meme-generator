import React from 'react'
import Draggable from "react-draggable"
import { useState } from 'react'


const Text = () => {
    const [editmode,setEditMode]=useState(false)
    const [val,setVal] =useState("Double Click to Edit")
  return (
    <Draggable>
    <div> 
{
    editmode ? <input onDoubleClick={()=>setEditMode(false)} value={val} onChange={(e)=> setVal(e.target.value)}/> :
     <h1 onDoubleClick={()=> setEditMode(true)}>{val}</h1>
}
    </div>
    </Draggable>
  )
}

export default Text