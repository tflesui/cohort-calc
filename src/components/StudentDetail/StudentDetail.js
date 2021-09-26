import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import { StudentsContext } from '../../contexts/StudentsContext';

const StudentDetail = ({ student }) => {
  // individual student functions here
  const { removeStudent } = useContext(StudentsContext)
  return (
    <tr>
      <td>{student.name}</td>
      <td>${new Intl.NumberFormat().format(student.earnings)}</td>
      <td>{student.hoursNeeded}</td>
      <td>
        <Button 
          color='danger'
          onClick={() => removeStudent(student.id)}>
            Remove
        </Button>
      </td>
    </tr>
  )
}

export default StudentDetail;