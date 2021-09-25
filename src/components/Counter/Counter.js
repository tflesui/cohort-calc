import './Counter.css';

import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { MaxHoursContext } from '../../contexts/MaxHoursContext';

const Counter = () => {
  const { maxHours, increaseHours, decreaseHours } = useContext(MaxHoursContext);


  return (
    <Container style={{ marginTop: 20 }}>
      <p className="text-primary">Max Instructor Hours: {maxHours} </p>
      <Button 
        onClick={() => increaseHours(maxHours)} 
        color="success"
        style={{
          marginRight: 5
        }}>
        Increase
      </Button> 
      {
        maxHours > 0  
          ?  <Button onClick={() => decreaseHours(maxHours)} color="danger">
            Decrease
            </Button>
          : ''
      }
    </Container>
  )
}

export default Counter
