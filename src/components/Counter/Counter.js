import './Counter.css';

import React, { useContext } from 'react';
import { Container, Button } from 'reactstrap';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';

const Counter = () => {
  const { maxHours, increaseHours, decreaseHours } = useContext(MaxHoursContext);


  return (
    <Container style={{ marginTop: 20 }}>
      <p className="text-primary"data-testid='hrsCounter'>Max Instructor Hours: {maxHours} </p>
      <Button
        data-testid='increase-button' 
        onClick={() => increaseHours(maxHours)} 
        color="success"
        style={{
          marginRight: 5
        }}>
        Increase
      </Button> 
      {
        maxHours > 0  
          ?  <Button data-testid='decrease-button' onClick={() => decreaseHours(maxHours)} color="danger" style={{marginLeft: 5}}>
            Decrease
            </Button>
          : ''
      }
    </Container>
  )
}

export default Counter
