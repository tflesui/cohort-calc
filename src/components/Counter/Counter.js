import React, { useState } from 'react'

import { Container, Button } from 'reactstrap'

const Counter = () => {
  const [hours, setHours] = useState(0)

  return (
    <Container style={{ marginTop: 20 }}>
      <p className="text-primary">Max Instructor Hours: {hours} </p>
      <Button onClick={() => setHours(hours + 1)} color="success">
        Increase the hours
      </Button> 
      <Button onClick={() => setHours(hours - 1)} color="danger">
        Decrease the hours
      </Button>
    </Container>
  )
}

export default Counter
