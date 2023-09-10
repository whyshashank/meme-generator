import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'
import {useNavigate} from "react-router-dom"


const Cards = (props) => {
  const navigate= useNavigate()
 
  return (
    <div >
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button variant="primary" onClick={()=> navigate(`/edit?url=${props.image}`)}>Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards