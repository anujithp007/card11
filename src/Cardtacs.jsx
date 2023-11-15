import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './new/img.css'


const Cardtacs = (props) => {
  return (
    <div >
         <Card className={props.class} style={{ width: '18rem', border:'none' }}>
      <Card.Img className='img '  src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}
         
        </Card.Text>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Cardtacs
