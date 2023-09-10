import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { shashank } from '../api/memeApi'


const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
       shashank().then((gotMemes)=> setData(gotMemes.data.memes))
    },[])
  return (
    <div className="row">
    { 
       data.map((element)=> <Cards image={element.url} title={element.name} />)
    }
    </div>
  )
}

export default Home