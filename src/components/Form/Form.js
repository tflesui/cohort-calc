import React from 'react'
import './Form.css'

import {
  Form as CForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const Form = () => {
  return (
    <CForm style={{ margin: 10 }}>
      <FormGroup className='row'>
        <Label for='studentName' sm={2}>
          Student Name
        </Label>
        <Col sm={4}>
          <Input
            type='text'
            name='name'
            id='studentName'
            placeholder='Student Name'
          />
        </Col>
      </FormGroup>
      <FormGroup className='row'>
        <Label for='earnings' sm={2}>
          Earnings Potential
        </Label>
        <Col sm={4}>
          <Input
            type='number'
            name='earnings'
            id='earnings'
            placeholder='0'
          />
        </Col>
      </FormGroup>
      <FormGroup className='row'>
        <Label for='hours' sm={2}>
          Hours Needed
        </Label>
        <Col sm={4}>
          <Input
            type='number'
            name='hours'
            id='hours'
            placeholder='0'
          />
        </Col>
      </FormGroup>
      <Button type='submit' color='primary'>
        Add Student
      </Button>
    </CForm>
  )
}

export default Form
