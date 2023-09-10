import React, { useState } from 'react'
import {useSearchParams} from "react-router-dom"
import Text from '../components/Text'
import {exportComponentAsJPEG} from "react-component-export-image"
import {createRef} from "react"

const Edit = () => {
    const [params] =useSearchParams()
    const url= params.get('url')
    const [count,setCount]=useState(0)

    function kuchaddkaro(){
    setCount(count+1)
    }

    const useRef=createRef()
  return (<>
    <div ref={useRef}>
        <img src={url} alt="" style={{width:"500px"}} />
        {
             Array(count).fill(0).map(()=><Text/>)
        }
      
    </div>
      <button onClick={kuchaddkaro}>Add Text</button>
      <button variant="success" onClick={()=> exportComponentAsJPEG(useRef )}>Download</button>
      </>
  )
}

export default Edit