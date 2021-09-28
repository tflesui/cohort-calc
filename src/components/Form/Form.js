import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../contexts/StudentsContext';
import './Form.css'

import {
  Form as StudentForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const Form = () => {
  const { addStudent } = useContext(StudentsContext);
  const [name, setName] = useState('');
  const [earnings, setEarnings] = useState(0);
  const [hoursNeeded, setHoursNeeded] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    addStudent(name, earnings, hoursNeeded);
    setName('');
    setEarnings(0);
    setHoursNeeded(0);
  }

  const handleClear = e => {
    e.preventDefault();
    setName('');
    setEarnings(0);
    setHoursNeeded(0);
  }

  return (
    <StudentForm data-testid='form' style={{ margin: 10 }} onSubmit={handleSubmit}>
      <FormGroup className='row'>
        <Label for='studentName' sm={2}>
          Student Name
        </Label>
        <Col sm={4}>
          <Input
            type='text'
            name='StudentName'
            maxLength='30'
            value={name}
            id='studentName'
            placeholder='Student Name'
            onChange={e => setName(e.target.value)}
            required
          />
        </Col>
      </FormGroup>
      <FormGroup className='row'>
        <Label for='earnings' sm={2}>
          Earnings Potential
        </Label>
        <Col sm={4}>
          <Input
            type='text'
            name='earnings'
            pattern='\d*'
            maxLength='6'
            value={earnings}
            id='earnings'
            placeholder='0'
            onChange={e => setEarnings(e.target.value)}
            required
          />
        </Col>
      </FormGroup>
      <FormGroup className='row'>
        <Label for='hoursNeeded' sm={2}>
          Hours Needed
        </Label>
        <Col sm={4}>
          <Input
            type='text'
            name='hoursNeeded'
            maxLength='3'
            pattern='\d*'
            value={hoursNeeded}
            id='hoursNeeded'
            placeholder='0'
            onChange={e => setHoursNeeded(e.target.value)}
            required
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button 
          type='submit' 
          color='primary'
          style={{
            marginRight: 5
          }}>
            Add Student
        </Button>
        <Button 
          type='button' 
          color='secondary'
          style={{
            marginLeft: 5
          }}
          onClick={handleClear}>
           Clear Form
        </Button>
      </FormGroup>
    </StudentForm>
  )
}

export default Form;
